import {
  reactExtension,
  Checkbox,
  Select,
  useApi,
  useAppMetafields,
  useTarget,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';
import {useCallback, useMemo, useState} from 'react';

const FULFILLMENT_METHOD_KEY = '_fulfillment_method';
const PICKUP_LOCATION_ID_KEY = '_pickup_location_id';
const PICKUP_LOCATION_NAME_KEY = '_pickup_location_name';

const SHIP_VALUE = 'ship';
const PICKUP_VALUE = 'pickup';
const SHIP_OPTION_VALUE = '__ship__';

const PICKUP_NAMESPACE = 'hammermade_pickup';
const PICKUP_LOCATIONS_KEY = 'locations';
const PICKUP_ENABLED_KEY = 'enabled';

interface PickupLocation {
  location_id: string;
  display_name: string;
  is_active: boolean;
  sort_order: number;
}

/**
 * Draft-theme gate: the extension always mounts via reactExtension; the gate
 * lives inside the component so the runtime can short-circuit when the shop
 * metafield disables pickup. Do not remove.
 */
export default reactExtension(
  'purchase.checkout.cart-line-item.render-after',
  () => <PickupSelector />,
);

function PickupSelector() {
  const translate = useTranslate();
  const line = useTarget();
  const {applyCartLinesChange} = useApi<'purchase.checkout.cart-line-item.render-after'>();

  const enabledMetafields = useAppMetafields({
    namespace: PICKUP_NAMESPACE,
    key: PICKUP_ENABLED_KEY,
  });
  const locationsMetafields = useAppMetafields({
    namespace: PICKUP_NAMESPACE,
    key: PICKUP_LOCATIONS_KEY,
  });

  const enabled = useMemo(() => {
    const entry = enabledMetafields.find(
      (m) => m.target.type === 'shop',
    );
    if (!entry) return false;
    const raw = entry.metafield.value;
    if (raw === true || raw === 'true') return true;
    return false;
  }, [enabledMetafields]);

  const activeLocations = useMemo<PickupLocation[]>(() => {
    const entry = locationsMetafields.find(
      (m) => m.target.type === 'shop',
    );
    if (!entry) return [];

    const parsed = parseLocations(entry.metafield.value);
    return parsed
      .filter((loc) => loc.is_active === true)
      .sort((a, b) => a.sort_order - b.sort_order);
  }, [locationsMetafields]);

  const isGiftCard =
    line?.merchandise?.type === 'variant' &&
    line.merchandise.product?.productType === 'Gift Card';
  const isSubscription = Boolean(line?.sellingPlanAllocation);

  const lineId = line?.id ?? '';

  const existingMethod = useMemo(() => {
    const attr = line?.attributes?.find(
      (a) => a.key === FULFILLMENT_METHOD_KEY,
    );
    return attr?.value ?? '';
  }, [line?.attributes]);

  const existingPickupLocationId = useMemo(() => {
    const attr = line?.attributes?.find(
      (a) => a.key === PICKUP_LOCATION_ID_KEY,
    );
    return attr?.value ?? '';
  }, [line?.attributes]);

  const [pending, setPending] = useState(false);

  const writeAttributes = useCallback(
    async (nextAttributes: {key: string; value: string}[]) => {
      if (!lineId) return;
      setPending(true);
      try {
        const others = (line?.attributes ?? []).filter(
          (a) =>
            a.key !== FULFILLMENT_METHOD_KEY &&
            a.key !== PICKUP_LOCATION_ID_KEY &&
            a.key !== PICKUP_LOCATION_NAME_KEY,
        );
        await applyCartLinesChange({
          type: 'updateCartLine',
          id: lineId,
          attributes: [...others, ...nextAttributes],
        });
      } finally {
        setPending(false);
      }
    },
    [applyCartLinesChange, line?.attributes, lineId],
  );

  const setShip = useCallback(async () => {
    await writeAttributes([{key: FULFILLMENT_METHOD_KEY, value: SHIP_VALUE}]);
  }, [writeAttributes]);

  const setPickup = useCallback(
    async (locationId: string, locationName: string) => {
      await writeAttributes([
        {key: FULFILLMENT_METHOD_KEY, value: PICKUP_VALUE},
        {key: PICKUP_LOCATION_ID_KEY, value: locationId},
        {key: PICKUP_LOCATION_NAME_KEY, value: locationName},
      ]);
    },
    [writeAttributes],
  );

  // Bail conditions — render nothing.
  if (!enabled) return null;
  if (activeLocations.length === 0) return null;
  if (!line || !lineId) return null;
  if (isGiftCard) return null;
  if (isSubscription) return null;

  const productTitle =
    line.merchandise?.type === 'variant'
      ? line.merchandise.product?.title ?? ''
      : '';

  // Single-location: checkbox.
  if (activeLocations.length === 1) {
    const loc = activeLocations[0];
    const checked = existingMethod === PICKUP_VALUE;
    const controlId = `pickup-checkbox-${lineId}`;
    const accessibilityLabel = productTitle
      ? `${translate('pickup.checkbox_label')}: ${productTitle}`
      : translate('pickup.checkbox_label');

    return (
      <Checkbox
        id={controlId}
        name={controlId}
        checked={checked}
        disabled={pending}
        accessibilityLabel={accessibilityLabel}
        onChange={async (next: boolean) => {
          if (next) {
            await setPickup(loc.location_id, loc.display_name);
          } else {
            await setShip();
          }
        }}
      >
        {translate('pickup.checkbox_label')}
      </Checkbox>
    );
  }

  // Multi-location: select.
  const selectedValue =
    existingMethod === PICKUP_VALUE && existingPickupLocationId
      ? existingPickupLocationId
      : SHIP_OPTION_VALUE;

  const controlId = `pickup-select-${lineId}`;
  const accessibilityLabel = productTitle
    ? `${translate('pickup.dropdown_label')}: ${productTitle}`
    : translate('pickup.dropdown_label');

  return (
    <Select
      label={translate('pickup.dropdown_label')}
      accessibilityLabel={accessibilityLabel}
      value={selectedValue}
      disabled={pending}
      onChange={async (next: string) => {
        if (next === SHIP_OPTION_VALUE) {
          await setShip();
          return;
        }
        const loc = activeLocations.find((l) => l.location_id === next);
        if (loc) {
          await setPickup(loc.location_id, loc.display_name);
        }
      }}
      options={[
        {value: SHIP_OPTION_VALUE, label: translate('pickup.ship_option')},
        ...activeLocations.map((loc) => ({
          value: loc.location_id,
          label: loc.display_name,
        })),
      ]}
    />
  );
}

/**
 * The shop metafield `hammermade_pickup.locations` is declared as
 * `list.metaobject_reference`. When read via useAppMetafields, the value is a
 * JSON string. Two shapes are supported:
 *
 * 1. An array of resolved metaobject records (the merchant or a sync job has
 *    flattened the metaobject fields into the metafield value):
 *      [{ "location_id": "gid://...", "display_name": "Main Store",
 *         "is_active": true, "sort_order": 1 }, ...]
 *
 * 2. An array of metaobject GIDs (the raw list.metaobject_reference shape):
 *      ["gid://shopify/Metaobject/123", ...]
 *    In this case the GIDs are surfaced as locations using the GID itself as
 *    location_id and a derived display name. Inventory/field resolution from
 *    the metaobject is out of scope for v1 because checkout extensions cannot
 *    call Admin GraphQL.
 */
function parseLocations(raw: unknown): PickupLocation[] {
  if (!raw) return [];

  let value: unknown = raw;
  if (typeof raw === 'string') {
    try {
      value = JSON.parse(raw);
    } catch {
      return [];
    }
  }

  if (!Array.isArray(value)) return [];

  return value
    .map((entry, index): PickupLocation | null => {
      if (typeof entry === 'string') {
        return {
          location_id: entry,
          display_name: entry,
          is_active: true,
          sort_order: index,
        };
      }

      if (entry && typeof entry === 'object') {
        const obj = entry as Record<string, unknown>;
        const locationId =
          typeof obj.location_id === 'string' ? obj.location_id : '';
        const displayName =
          typeof obj.display_name === 'string' ? obj.display_name : '';
        if (!locationId || !displayName) return null;
        return {
          location_id: locationId,
          display_name: displayName,
          is_active: obj.is_active === true,
          sort_order:
            typeof obj.sort_order === 'number'
              ? obj.sort_order
              : Number(obj.sort_order ?? index) || index,
        };
      }

      return null;
    })
    .filter((loc): loc is PickupLocation => loc !== null);
}
