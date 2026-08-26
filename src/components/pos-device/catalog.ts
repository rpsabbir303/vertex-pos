/**
 * Editable Vertex POS Device catalog.
 * Pricing and specs for the main POS terminal only.
 */
export const devicePricing = {
  /** Placeholder starting price — preserve/update when official pricing is confirmed. */
  starting: 899,
} as const;

export function formatDevicePrice(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export function deviceStartingAt(amount = devicePricing.starting) {
  return `Starting at ${formatDevicePrice(amount)}`;
}

export const posDeviceProduct = {
  name: "Vertex POS Device",
  shortName: "POS Device",
  price: devicePricing.starting,
  description:
    "A powerful restaurant POS terminal built for fast ordering, smooth checkout, and the pace of everyday service.",
  benefits: [
    "Fast order entry",
    "Menu & item customization",
    "Table and order management",
    "Integrated checkout",
    "Real-time order updates",
  ],
  /** Marketing-level specs — replace with confirmed hardware data when available. */
  specs: [
    { label: "Display", value: '15.6" Full HD Touchscreen' },
    { label: "Processor", value: "High-performance restaurant-grade processor" },
    { label: "Memory", value: "8GB RAM" },
    { label: "Storage", value: "128GB SSD" },
    { label: "Connectivity", value: "Wi-Fi / Ethernet / Bluetooth" },
    { label: "Operating", value: "All-day restaurant operation" },
    { label: "Interface", value: "Responsive multi-touch display" },
    { label: "Build", value: "Restaurant-ready commercial enclosure" },
    { label: "Software", value: "Vertex POS" },
    { label: "Payments", value: "Integrated POS checkout workflow" },
    {
      label: "Integration",
      value: "Orders, tables, menu, kitchen, inventory and reporting",
    },
  ],
};
