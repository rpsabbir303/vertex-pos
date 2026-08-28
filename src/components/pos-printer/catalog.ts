/**
 * Vertex POS Printer — product catalog.
 * Only verified specs — do not invent technical numbers.
 */
export const printerPricing = {
  starting: 299,
} as const;

export function formatPrinterPrice(amount = printerPricing.starting) {
  return `$${amount.toLocaleString("en-US")}`;
}

export const printerProduct = {
  name: "Vertex POS Printer",
  shortName: "POS Printer",
  category: "VERTEX POS PRINTER",
  tagline: "Print every transaction with confidence.",
  description:
    "Fast, reliable receipt printing built for busy restaurants, cafés, bars, and counter-service operations.",
  heroSupport:
    "A reliable POS printer designed to keep your checkout moving and your receipts ready.",
  intro:
    "The Vertex POS Printer keeps receipt printing fast and dependable at the counter — so staff can finish transactions and keep service moving.",
  price: printerPricing.starting,
  benefits: [
    "Fast receipt printing",
    "Reliable everyday operation",
    "Countertop-ready design",
    "Easy POS workflow",
    "Professional receipt experience",
  ],
  specs: [
    { label: "Print technology", value: "Thermal" },
    { label: "Print speed", value: "High-speed thermal printing" },
    { label: "Resolution", value: "Clear restaurant-grade receipt output" },
    { label: "Paper width", value: "Standard receipt paper widths supported" },
    { label: "Connectivity", value: "USB / Ethernet" },
    { label: "Auto cutter", value: "Automatic receipt cutting" },
    { label: "Compatibility", value: "Vertex POS" },
    { label: "Use", value: "Restaurant receipt printing" },
  ],
} as const;

export const printerPerformanceFeatures = [
  "Quick receipt output",
  "Reliable operation",
  "Designed for repeated daily use",
  "Easy paper replacement",
  "Consistent printing",
] as const;

export const printerWorkflowBullets = [
  "Easy receipt access",
  "Simple paper loading",
  "Organized counter setup",
  "Professional customer experience",
] as const;

export const printerDesignFeatures = [
  "Countertop-ready design",
  "Clean hardware appearance",
  "Easy access during service",
  "Professional hardware design",
  "Simple everyday operation",
] as const;

export const printerBusinessTypes = [
  {
    title: "Retail",
    copy: "Fast receipt printing for retail checkout counters.",
    icon: "M4 7h16v10H4zM8 11h8",
  },
  {
    title: "Restaurant",
    copy: "Built for busy front-of-house receipt printing.",
    icon: "M6 10h12v8H6zM9 6h6v4H9z",
  },
  {
    title: "Café",
    copy: "Reliable printing for quick counter service.",
    icon: "M8 12h8v6H8zM10 8h4v4h-4z",
  },
  {
    title: "Service business",
    copy: "Professional receipts for customer-facing counters.",
    icon: "M5 12h14M8 8V5h8v3",
  },
] as const;

export const printerEcosystemProducts = [
  { label: "POS Printer", href: "/products/pos-printer", primary: true },
  { label: "POS Device", href: "/products/pos-device" },
  { label: "POS Monitor", href: "/products/pos-monitor" },
  { label: "Cash Counter", href: "/products/cash-counter" },
  { label: "Payment Terminal", href: "/products/payment-terminal" },
] as const;

export const printerTrustIndicators = [
  "Reliable hardware",
  "Business ready",
  "Easy operation",
  "Vertex support",
] as const;

export const printerPeaceOfMind = [
  {
    title: "Reliable hardware",
    copy: "Designed for everyday business environments.",
    icon: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
  },
  {
    title: "Easy operation",
    copy: "Simple workflows for staff.",
    icon: "M4 6h16v4H4zM4 12h7v6H4zM13 12h7v6h-7z",
  },
  {
    title: "Professional checkout",
    copy: "A cleaner customer-facing experience.",
    icon: "M4 7h16M4 12h10M4 17h14",
  },
  {
    title: "Vertex support",
    copy: "Support when you need it.",
    icon: "M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  },
] as const;

export const printerSetupOptions = [
  {
    name: "POS Printer",
    description:
      "Fast thermal receipt printing for restaurant and counter-service checkout.",
    features: [
      "High-speed thermal printing",
      "USB / Ethernet connectivity",
      "Automatic receipt cutting",
      "Vertex POS compatible",
    ],
    cta: "Get Started",
    href: "/get-started",
    featured: true,
  },
  {
    name: "Complete checkout setup",
    description:
      "Pair the POS Printer with Vertex POS hardware for a connected checkout environment.",
    features: [
      "POS Printer",
      "POS Device",
      "POS Monitor",
      "Payment hardware options",
    ],
    cta: "Contact Sales",
    href: "/get-started",
    featured: false,
  },
] as const;

export const printerIncluded = [
  {
    title: "POS Printer",
    copy: "Vertex thermal receipt printer. Contact Vertex for package contents and setup details.",
  },
] as const;

export const printerFaqs = [
  {
    question: "What is the Vertex POS Printer?",
    answer:
      "The Vertex POS Printer is a thermal receipt printer designed for restaurant and counter-service checkout. It delivers fast, reliable receipt printing as part of a supported Vertex POS setup.",
  },
  {
    question: "What type of receipts does it print?",
    answer:
      "It prints thermal receipts with clear restaurant-grade output for everyday checkout transactions.",
  },
  {
    question: "What paper does the printer use?",
    answer:
      "It uses standard thermal receipt paper widths commonly used in restaurant checkout stations.",
  },
  {
    question: "How fast does it print?",
    answer:
      "It is built for high-speed thermal printing so receipts can keep up with busy counter service. Exact print-speed ratings can be confirmed with our team for your configuration.",
  },
  {
    question: "How do I replace the paper?",
    answer:
      "The printer supports easy paper loading for quick reloads between busy service periods. Contact Vertex for setup guidance for your counter.",
  },
  {
    question: "What connectivity options are available?",
    answer:
      "Connectivity options include USB and Ethernet so you can match the printer to your restaurant network and counter layout.",
  },
  {
    question: "Is the printer compatible with the Vertex POS Device?",
    answer:
      "Yes. The Vertex POS Printer is designed to work with supported Vertex POS setups, including configurations that use the Vertex POS Device.",
  },
  {
    question: "Is the printer compatible with the Vertex POS Monitor?",
    answer:
      "The POS Printer can be part of a complete Vertex checkout environment that includes a customer-facing POS Monitor. Contact Vertex for your configuration.",
  },
  {
    question: "Can the printer be used with other POS systems?",
    answer:
      "The Vertex POS Printer is designed for Vertex POS. Contact Vertex for product details and compatibility.",
  },
  {
    question: "What is included with the printer?",
    answer:
      "Contact Vertex for package contents and accessories included with your POS Printer order.",
  },
  {
    question: "How can I purchase the Vertex POS Printer?",
    answer:
      "Get started online or contact sales for pricing and a setup matched to your checkout environment.",
  },
] as const;
