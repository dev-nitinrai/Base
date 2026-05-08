# Dev Agent Run History

> Auto-maintained by the Dev Agent. Lists every run that has touched this PR, newest first.
> A separate GitHub Action deletes this file on PR merge.

---

## Run `427fd76c…` — 2026-05-08T17:16:41.953Z

**Trigger:** initial

**Task input:**

> Build a new Shopify Checkout UI extension that lets customers choose
> per-line-item between "ship" and "pickup" during checkout.
>
> EXTENSION TARGET (important, do not default to block.render):
> - target: "purchase.checkout.cart-line-item.render-after"
> - one render per cart line so each line gets its own pickup control
>
> PICKUP-LOCATIONS DATA SOURCE:
> - Read shop metafield "hammermade_pickup.locations" via useAppMetafields
>   (namespace "hammermade_pickup", key "locations", type
>   list.metaobject_reference). Each referenced metaobject has fields
>   location_id, display_name, is_active, sort_order. Filter to is_active
>   === true and sort by sort_order.
> - Also read "hammermade_pickup.enabled" — if false or missing, render
>   nothing.
>
> UI RULES (per line item):
> - 0 active pickup locations → render nothing
> - exactly 1 active pickup location → render a Checkbox labeled "Pick up
>   this item from the store" using the @shopify/ui-extensions-react/checkout
>   Checkbox component
> - 2+ active pickup locations → render a Select labeled "Select pickup
>   location" with one Option per active location (display_name as label,
>   location_id as value), plus a "Ship to address" default option at the top
>
> PERSISTENCE (this is the load-bearing requirement):
> - Use useApplyAttributeChange to write LINE-ITEM-LEVEL attributes via
>   applyCartLinesChange / cart line attributes — NOT cart-level attributes.
>   Use the useApi hook + cartLineUpdate via applyCartLinesChange when
>   setting per-line attributes.
> - Attribute keys to write on the line item (Shopify Flow downstream will
>   read these — names matter, do not change them):
>   - "_fulfillment_method": "ship" | "pickup"
>   - "_pickup_location_id": Shopify location GID, only set when method is pickup
>   - "_pickup_location_name": display_name string, only set when method is pickup
> - On unselect / switch back to ship, remove the pickup_* attributes and
>   set _fulfillment_method back to "ship".
> - Default state if the customer never interacts: do not write any
>   attribute (treated as ship downstream).
>
> ELIGIBILITY:
> - A line item is "pickup eligible" if at least one active pickup location
>   has inventory available. For v1, treat ALL line items as eligible —
>   inventory checking is out of scope per the SOW's "Out of Scope" section.
> - Skip rendering on gift cards (line.merchandise.product.productType ===
>   "Gift Card") and on subscription line items
>   (line.sellingPlanAllocation != null).
>
> LABELS:
> - All user-facing strings come from locales/en.default.json — keys:
>   pickup.checkbox_label, pickup.dropdown_label, pickup.ship_option,
>   pickup.unavailable
> - Do NOT use t: theme translation keys (this isn't a theme — it's a
>   checkout extension, locale handling is different).
>
> ACCESSIBILITY:
> - Each control needs a unique id tied to the line item id so screen
>   readers announce which line the control belongs to ("Pick up [Product
>   Name] from the store").
>
> DRAFT-THEME GATE:
> - Standard gate baked into the extension entry. Do not remove.
>
> REPO CONVENTIONS:
> - Detect TS vs JS, React vs Preact, API version from sibling extensions.
> - Use the latest stable @shopify/ui-extensions-react/checkout API version
>   available in the repo.
>
> DELIVERABLE:
> - New extension folder under extensions/, versioned (e.g.
>   pickup-selector-v1)
> - shopify.extension.toml with the cart-line-item target
> - src/Checkout.tsx (or .jsx) with the per-line component
> - locales/en.default.json with all user-facing strings
> - README.md documenting: which metafields the extension reads, which
>   line-item attribute keys it writes, and the Shopify Flow setup the
>   merchant needs to do downstream (trigger on order creation, condition
>   on line_item.custom_attributes._fulfillment_method == "pickup", action
>   fulfillmentOrdersAssignLocations using _pickup_location_id).
>
> DO NOT:
> - Do not modify checkout.liquid or anything outside the new extension
>   folder.
> - Do not call Admin GraphQL from inside the extension (it cannot).
> - Do not add inventory-checking logic.
> - Do not touch the existing storefront cart page — pickup selection
>   happens in checkout only per the SOW.
> --skip-questions

**Outcome:** ✓

**Attempts:** 1
- attempt 1: stopReason=done, 20 rounds, 4 file(s) changed

**Files changed (4):**
- `extensions/pickup-selector-v1/shopify.extension.toml`
- `extensions/pickup-selector-v1/locales/en.default.json`
- `extensions/pickup-selector-v1/src/Checkout.tsx`
- `extensions/pickup-selector-v1/README.md`

**Agent summary:**

> Built `extensions/pickup-selector-v1/` checkout UI extension with target `purchase.checkout.cart-line-item.render-after`.
>
> Files:
> - `shopify.extension.toml` — api_version 2026-01, declares the cart-line-item target and the two shop metafields (`hammermade_pickup.enabled`, `hammermade_pickup.locations`).
> - `src/Checkout.tsx` — TS + React (`@shopify/ui-extensions-react/checkout`). Reads metafields via `useAppMetafields`, gets the current line via `useTarget`, writes line-item attributes via `applyCartLinesChange({type: 'updateCartLine', id, attributes})` from `useApi` — NOT cart-level. Renders nothing when disabled / 0 active locations / gift card / subscription. 1 location → `Checkbox`; 2+ → `Select` with options including a "Ship to address" default. On switch back to ship the `_pickup_*` attrs are stripped. Each control gets a unique id keyed off the line id and a screen-reader label that includes the product title.
> - `locales/en.default.json` — `pickup.checkbox_label`, `pickup.dropdown_label`, `pickup.ship_option`, `pickup.unavailable`. Uses `useTranslate` (checkout extension localization, not theme `t:` keys).
> - `README.md` — documents the two metafields read, the three line-item attribute keys written (`_fulfillment_method`, `_pickup_location_id`, `_pickup_location_name`), and the downstream Shopify Flow setup (Order created → for each line, condition `_fulfillment_method == "pickup"` → `fulfillmentOrdersAssignLocations` using `_pickup_location_id`).
>
> Notes on judgment calls (documented in the README):
> - Task said "useApplyAttributeChange" but its clarifying line said "NOT cart-level attributes" and to use `applyCartLinesChange` — I followed the binding instruction (line-item attrs via `applyCartLinesChange`).
> - `list.metaobject_reference` values arrive as GID strings; checkout extensions can't call Admin GraphQL to resolve metaobject fields. The parser supports both bare-GID arrays (each treated as one active location) and pre-resolved JSON objects with `location_id`/`display_name`/`is_active`/`sort_order`. Merchants who want full filtering need to mirror resolved fields into the metafield value (e.g. via Flow). Inventory checking is intentionally out of scope per the SOW.
> - No existing extensions in the repo to crib conventions from — picked TS+React per the task's explicit `@shopify/ui-extensions-react/checkout` reference and pinned api_version 2026-01 (current stable).
