/**
 * Editable Vertex POS Printer catalog.
 * Only include verified specs — do not invent technical numbers.
 */
export const printerPricing = {
  starting: 299,
} as const;

export function formatPrinterPrice(amount = printerPricing.starting) {
  return `$${amount.toLocaleString("en-US")}`;
}

export const printerProduct = {
  name: "Vertex POS Printer",
  price: printerPricing.starting,
  description:
    "Fast, reliable receipt printing built for busy restaurants, cafés, bars, and counter-service operations.",
  /** Marketing-level specs only — replace with confirmed hardware data when available. */
  specs: [
    { label: "Printing Method", value: "Thermal" },
    { label: "Print Speed", value: "High-speed thermal printing" },
    { label: "Resolution", value: "Clear restaurant-grade receipt output" },
    { label: "Paper Width", value: "Standard receipt paper widths supported" },
    { label: "Connectivity", value: "USB / Ethernet" },
    { label: "Auto Cutter", value: "Automatic receipt cutting" },
    { label: "Compatibility", value: "Vertex POS" },
    { label: "Use", value: "Restaurant receipt printing" },
  ],
  quickInfo: [
    { label: "Printing", value: "High-speed thermal" },
    { label: "Connectivity", value: "USB / Ethernet" },
    { label: "Use", value: "Restaurant receipt printing" },
  ],
};
