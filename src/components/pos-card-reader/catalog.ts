/**
 * Editable Vertex POS Card Reader catalog.
 */
export const cardReaderPricing = {
  starting: 299,
} as const;

export function formatCardReaderPrice(amount = cardReaderPricing.starting) {
  return `$${amount.toLocaleString("en-US")}`;
}

export const cardReaderProduct = {
  name: "Vertex POS Card Reader",
  price: cardReaderPricing.starting,
  description:
    "Vertex Card Reader makes every checkout fast, secure, and effortless—from tap and insert to digital wallets.",
  includes: [
    "Contactless payments",
    "Chip & PIN",
    "Digital wallets",
    "Secure transactions",
    "Vertex POS integration",
  ],
  specs: [
    { label: "Payment methods", value: "Contactless / Chip / PIN" },
    { label: "Wallet support", value: "Digital wallets" },
    { label: "Connectivity", value: "Wi-Fi / Ethernet / Bluetooth" },
    { label: "Security", value: "Secure payment processing" },
    { label: "Display", value: "Payment status display" },
    { label: "Usage", value: "Restaurant checkout" },
    { label: "Form factor", value: "Compact countertop device" },
  ],
};
