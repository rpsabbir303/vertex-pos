/**
 * Editable Vertex Payment Terminal catalog.
 * Add confirmed pricing and hardware specs when official data is available.
 */
export const terminalPricing = {
  /** Set when official starting price is confirmed — do not invent. */
  starting: null as number | null,
} as const;

export function formatTerminalPrice(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export function terminalStartingLabel() {
  if (terminalPricing.starting == null) {
    return "Pricing available on request";
  }
  return `Starting at ${formatTerminalPrice(terminalPricing.starting)}`;
}

export const paymentTerminalProduct = {
  name: "Vertex Payment Terminal",
  shortName: "Payment Terminal",
  description:
    "A dedicated countertop payment terminal built for fast, secure restaurant checkout — from tap and insert to PIN and confirmation.",
  valueStatement:
    "Bring reliable payment acceptance to your counter without slowing down service.",
  includes: [
    "Contactless payments",
    "Chip & PIN",
    "Digital wallets",
    "Secure payment processing",
    "Vertex POS integration",
  ],
  /** Marketing-level specs only — replace with confirmed hardware data when available. */
  specs: [
    { label: "Product type", value: "Countertop payment terminal" },
    { label: "Payment methods", value: "Contactless / Chip / PIN / Digital wallets" },
    { label: "Card networks", value: "Major credit and debit networks" },
    { label: "Display", value: "Clear customer-facing payment display" },
    { label: "Connectivity", value: "Wi-Fi / Ethernet" },
    { label: "Security", value: "Encrypted payment processing with PIN protection" },
    { label: "Usage", value: "Restaurant checkout and counter payments" },
    { label: "Integration", value: "Vertex POS payment workflow" },
    { label: "Build", value: "Designed for continuous restaurant use" },
  ],
  features: [
    {
      title: "Contactless payments",
      copy: "Guests tap cards or phones for fast checkout at the counter.",
    },
    {
      title: "Chip & PIN",
      copy: "Support insert-and-PIN flows when contactless is not used.",
    },
    {
      title: "Fast transaction processing",
      copy: "Keep authorization moving during busy service periods.",
    },
    {
      title: "Secure payment processing",
      copy: "Payments move through an encrypted flow from start to confirmation.",
    },
    {
      title: "Clear customer-facing display",
      copy: "Present totals and payment status with confidence at checkout.",
    },
    {
      title: "Reliable connectivity",
      copy: "Stay connected to your checkout workflow over Wi-Fi or Ethernet.",
    },
    {
      title: "Built for continuous restaurant use",
      copy: "Designed for repeated daily use on active restaurant counters.",
    },
  ],
};
