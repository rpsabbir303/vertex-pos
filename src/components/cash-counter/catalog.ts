/**
 * Editable Cash Counter Box catalog — hardware product page only.
 */
export const cashBoxPricing = {
  starting: 199,
} as const;

export function formatCashBoxPrice(amount = cashBoxPricing.starting) {
  return `$${amount.toLocaleString("en-US")}`;
}

export const cashDemoFigures = {
  opening: "$300.00",
  cashSales: "$1,248.50",
  cashDrops: "-$300.00",
  expected: "$1,248.50",
  counted: "$1,248.50",
  variance: "$0.00",
} as const;

export const cashBoxProduct = {
  name: "Vertex Cash Counter Box",
  price: cashBoxPricing.starting,
  description:
    "A secure, restaurant-ready cash drawer designed to keep every shift organized — from opening float to final reconciliation.",
  specs: [
    { label: "Type", value: "Restaurant cash drawer" },
    { label: "Construction", value: "Commercial-grade steel" },
    { label: "Compartments", value: "Multi-slot bill + coin tray" },
    { label: "Security", value: "Lockable drawer with key" },
    { label: "Integration", value: "Vertex POS compatible" },
    { label: "Operation", value: "Manual cash + POS tracking" },
    { label: "Connectivity", value: "POS-connected workflow" },
    { label: "Footprint", value: "Counter-ready compact design" },
  ],
};
