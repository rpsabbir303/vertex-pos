/**
 * Vertex Cash Counter Box — product catalog.
 * Physical cash drawer / cash box. Only confirmed product facts.
 */
export const cashBoxPricing = {
  starting: 199,
} as const;

export function formatCashBoxPrice(amount = cashBoxPricing.starting) {
  return `$${amount.toLocaleString("en-US")}`;
}

export const cashBoxProduct = {
  name: "Vertex Cash Counter Box",
  shortName: "Cash Counter Box",
  category: "VERTEX CASH COUNTER BOX",
  tagline: "Keep every transaction organized.",
  description:
    "A reliable cash drawer designed to keep your checkout organized, accessible, and ready for business.",
  heroSupport:
    "Secure, restaurant-ready cash storage with organized bill and coin compartments for everyday counter service.",
  intro:
    "The Vertex Cash Counter Box helps create a more organized checkout environment — keeping bills and coins accessible during everyday POS transactions.",
  price: cashBoxPricing.starting,
  benefits: [
    "Organized cash storage",
    "Easy cashier access",
    "Clean checkout workflow",
    "Professional POS setup",
    "Designed for everyday business use",
  ],
  specs: [
    { label: "Product type", value: "Restaurant cash drawer" },
    { label: "Construction", value: "Commercial-grade steel" },
    { label: "Compartments", value: "Multi-slot bill + coin tray" },
    { label: "Security", value: "Lockable drawer with key" },
    { label: "Integration", value: "Vertex POS compatible" },
    { label: "Operation", value: "Manual cash + POS tracking" },
    { label: "Connectivity", value: "POS-connected workflow" },
    { label: "Footprint", value: "Counter-ready compact design" },
  ],
} as const;

export const cashBoxOrganizationFeatures = [
  "Multi-slot bill organization",
  "Dedicated coin tray",
  "Organized cash layout",
  "Easy access during transactions",
  "Cleaner checkout workspace",
] as const;

export const cashBoxWorkflowBullets = [
  "Easy cashier access",
  "Organized cash handling",
  "Smooth checkout workflow",
  "Professional counter setup",
] as const;

export const cashBoxSecurityFeatures = [
  "Lockable drawer with key",
  "Secure cash storage",
  "Controlled cashier access",
  "Commercial-grade steel construction",
] as const;

export const cashBoxDesignFeatures = [
  "Professional appearance",
  "Easy drawer access",
  "Counter-ready footprint",
  "Durable commercial construction",
  "Clean POS counter setup",
] as const;

export const cashBoxBusinessTypes = [
  {
    title: "Retail",
    copy: "Organized cash handling for retail checkout counters.",
    icon: "M4 7h16v10H4zM8 11h8",
  },
  {
    title: "Restaurant",
    copy: "Built for busy front-of-house cash handling.",
    icon: "M6 10h12v8H6zM9 6h6v4H9z",
  },
  {
    title: "Café",
    copy: "Compact cash storage for counter service.",
    icon: "M8 12h8v6H8zM10 8h4v4h-4z",
  },
  {
    title: "Service business",
    copy: "Professional cash drawer for customer-facing counters.",
    icon: "M5 12h14M8 8V5h8v3",
  },
] as const;

export const cashBoxEcosystemProducts = [
  { label: "Cash Counter Box", href: "/products/cash-counter-box", primary: true },
  { label: "POS Device", href: "/products/pos-device" },
  { label: "POS Monitor", href: "/products/pos-monitor" },
  { label: "POS Printer", href: "/products/pos-printer" },
  { label: "Card Reader", href: "/products/pos-card-reader" },
  { label: "Cash Counter", href: "/products/cash-counter" },
] as const;

export const cashBoxTrustIndicators = [
  "Lockable cash storage",
  "Vertex POS compatible",
  "Commercial-grade steel",
  "Vertex support",
] as const;

export const cashBoxPeaceOfMind = [
  {
    title: "Reliable hardware",
    copy: "Designed for daily business use.",
    icon: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
  },
  {
    title: "Organized checkout",
    copy: "Keep cash accessible and organized.",
    icon: "M4 6h16v4H4zM4 12h7v6H4zM13 12h7v6h-7z",
  },
  {
    title: "Professional setup",
    copy: "Complete your POS counter environment.",
    icon: "M4 7h16M4 12h10M4 17h14",
  },
  {
    title: "Vertex support",
    copy: "Support when you need it.",
    icon: "M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  },
] as const;

export const cashBoxSetupOptions = [
  {
    name: "Cash Counter Box",
    description:
      "Secure cash drawer with organized bill and coin compartments for your counter.",
    features: [
      "Multi-slot bill + coin tray",
      "Lockable drawer with key",
      "Vertex POS compatible",
      "Counter-ready footprint",
    ],
    cta: "Get Started",
    href: "/get-started",
    featured: true,
    visual: "open" as const,
  },
  {
    name: "Complete checkout setup",
    description:
      "Pair the Cash Counter Box with Vertex POS hardware for a connected checkout environment.",
    features: [
      "Cash Counter Box",
      "POS Device integration",
      "Counter layout guidance",
      "Contact sales for details",
    ],
    cta: "Contact Sales",
    href: "/get-started",
    featured: false,
    visual: "closed" as const,
  },
] as const;

export const cashBoxIncluded = [
  {
    title: "Cash Counter Box",
    copy: "Restaurant cash drawer with multi-slot bill and coin compartments. Contact Vertex for package contents and accessories.",
  },
] as const;

export const cashBoxFaqs = [
  {
    question: "What is the Vertex Cash Counter Box?",
    answer:
      "The Vertex Cash Counter Box is a restaurant cash drawer built to store and organize bills and coins securely during everyday POS checkout.",
  },
  {
    question: "Is the Cash Counter Box a cash drawer?",
    answer:
      "Yes. It is a physical cash drawer designed for organized cash storage and handling at the checkout counter.",
  },
  {
    question: "How many cash compartments does it have?",
    answer:
      "It includes a multi-slot bill and coin tray for organized cash storage. Contact Vertex for compartment configuration details.",
  },
  {
    question: "Does it include coin compartments?",
    answer:
      "Yes. The Cash Counter Box includes a multi-slot bill and coin tray for organized cash storage.",
  },
  {
    question: "Does it have a lock?",
    answer:
      "Yes. It includes lockable cash storage with a key to help protect cash between transactions and at the end of service.",
  },
  {
    question: "Is it compatible with the Vertex POS Device?",
    answer:
      "Yes. It is Vertex POS compatible and designed to work as part of a connected checkout workflow.",
  },
  {
    question: "Is it compatible with the Vertex POS Printer?",
    answer:
      "The Cash Counter Box can be part of a complete Vertex counter setup alongside other Vertex hardware. Contact sales for your configuration.",
  },
  {
    question: "Can it be mounted under a counter?",
    answer:
      "Contact Vertex for product details and mounting options for your setup.",
  },
  {
    question: "What are the dimensions?",
    answer:
      "Contact Vertex for product details and specifications for your configuration.",
  },
  {
    question: "What is included with the Cash Counter Box?",
    answer:
      "The Cash Counter Box unit. Contact Vertex for details on accessories and setup options for your counter.",
  },
  {
    question: "Is it suitable for retail and restaurants?",
    answer:
      "It is built as a restaurant cash drawer for organized bills and coins at the counter. Contact Vertex to confirm fit for your business type.",
  },
  {
    question: "How can I purchase the Vertex Cash Counter Box?",
    answer:
      "Get started online or contact sales for pricing and a setup matched to your checkout counter.",
  },
] as const;
