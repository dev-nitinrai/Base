# Pickup Selector (v1)

Per-line-item ship/pickup selector for Shopify Checkout. Renders inside every
cart line in the order summary using the
`purchase.checkout.cart-line-item.render-after` extension target.

## What it does

For each eligible cart line the extension renders one of:

- **0 active pickup locations** → nothing
- **1 active pickup location** → a checkbox: "Pick up this item from the store"
- **2+ active pickup locations** → a select with "Ship to address" plus one
  option per active location

The selection is persisted as **line-item attributes** on the cart line via
`applyCartLinesChange` (`updateCartLine`). Because these are line-item
attributes (not cart-level note attributes) Shopify Flow can read them per
line on order creation.

Lines that are gift cards (`product.productType === "Gift Card"`) or
subscription items (`sellingPlanAllocation != null`) are skipped.

## Metafields the extension READS

Shop-scoped, declared in `shopify.extension.toml`:

| Namespace            | Key         | Type                       | Purpose                                                                 |
| -------------------- | ----------- | -------------------------- | ----------------------------------------------------------------------- |
| `hammermade_pickup`  | `enabled`   | `boolean`                  | Master switch. Extension renders nothing when this is false or missing. |
| `hammermade_pickup`  | `locations` | `list.metaobject_reference`| List of pickup-location metaobjects.                                    |

Each referenced pickup-location metaobject is expected to expose:

- `location_id` — Shopify location GID (e.g. `gid://shopify/Location/12345`)
- `display_name` — merchant-facing name shown to the customer
- `is_active` — boolean; only `true` entries are rendered
- `sort_order` — numeric; render order ascending

The extension parses the metafield value, filters to `is_active === true`,
and sorts by `sort_order` ascending.

> Note: checkout extensions cannot call the Admin GraphQL API. If the raw
> `list.metaobject_reference` value comes through as a list of GIDs only, the
> extension treats each GID as one active location. To get full
> `display_name` / `is_active` / `sort_order` resolution, mirror the resolved
> metaobject fields into the metafield value (commonly done with a Shopify
> Flow workflow or an admin sync job) so the extension reads structured
> objects instead of bare GIDs.

## Line-item attributes the extension WRITES

These keys are stable and consumed by the downstream Shopify Flow workflow.
**Do not rename them.**

| Key                       | When set                | Value                                          |
| ------------------------- | ----------------------- | ---------------------------------------------- |
| `_fulfillment_method`     | always (after interaction) | `"ship"` or `"pickup"`                      |
| `_pickup_location_id`     | only when `pickup`      | Shopify location GID                           |
| `_pickup_location_name`   | only when `pickup`      | `display_name` from the chosen pickup location |

If the customer never interacts with the control, no attributes are written
and the line is treated as `ship` downstream.

When the customer switches from pickup back to ship, the two `_pickup_*`
attributes are removed and `_fulfillment_method` is reset to `"ship"`.

## Shopify Flow setup (downstream)

The extension only writes the attributes. The actual fulfillment-location
assignment happens in Shopify Flow:

1. **Trigger:** Order created
2. **For each line item** (loop):
   - **Condition:** `line_item.custom_attributes._fulfillment_method == "pickup"`
   - **Action:** `fulfillmentOrdersAssignLocations`
     - `fulfillmentOrderId`: the line item's fulfillment order id
     - `locationId`: `line_item.custom_attributes._pickup_location_id`
3. (Optional) Add a tag like `pickup` to the order or fulfillment for
   reporting; surface `_pickup_location_name` on packing slips.

Lines without `_fulfillment_method == "pickup"` are left on the default
shipping fulfillment location and ship as normal.

## Out of scope (v1)

- **Inventory checks.** Every line is treated as pickup-eligible at every
  active location. Inventory-based filtering is on the v2 roadmap.
- **Storefront cart pickup selection.** Pickup choice happens in checkout
  only.
- **Multi-step pickup time / date selection.**

## File layout

```
extensions/pickup-selector-v1/
├── README.md
├── shopify.extension.toml
├── locales/
│   └── en.default.json
└── src/
    └── Checkout.tsx
```

## Configuration reference

`shopify.extension.toml` declares:

- the extension target `purchase.checkout.cart-line-item.render-after`
- the two shop metafields the extension reads (`hammermade_pickup.enabled`,
  `hammermade_pickup.locations`)

API version: `2026-01`.
