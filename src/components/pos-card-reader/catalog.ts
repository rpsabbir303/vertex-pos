/**
 * Vertex POS Card Reader — product catalog.
 * Only verified specs — do not invent technical numbers or capabilities.
 */
export const cardReaderPricing = {
  starting: 299,
} as const;

export function formatCardReaderPrice(amount = cardReaderPricing.starting) {
  return `$${amount.toLocaleString("en-US")}`;
}

export const cardReaderProduct = {
  name: "Vertex POS Card Reader",
  shortName: "Card Reader",
  category: "VERTEX CARD READER",
  tagline: "Simple, secure payments at every checkout.",
  description:
    "Vertex Card Reader makes every checkout fast, secure, and effortless—from tap and insert to digital wallets.",
  heroSupport:
    "A professional card reader designed to make payments simple for your customers and your team.",
  intro:
    "The Vertex POS Card Reader brings contactless, chip, and digital wallet payments to your counter — keeping checkout fast and professional for everyday business.",
  price: cardReaderPricing.starting,
  benefits: [
    "Easy customer interaction",
    "Professional payment experience",
    "Clean countertop setup",
    "Designed for everyday checkout",
    "Works within your Vertex POS environment",
  ],
  specs: [
    { label: "Payment methods", value: "Contactless / Chip / PIN" },
    { label: "Wallet support", value: "Digital wallets" },
    { label: "Connectivity", value: "Wi-Fi / Ethernet / Bluetooth" },
    { label: "Security", value: "Secure payment processing" },
    { label: "Display", value: "Payment status display" },
    { label: "Usage", value: "Restaurant checkout" },
    { label: "Form factor", value: "Compact countertop device" },
    { label: "Compatibility", value: "Vertex POS" },
  ],
} as const;

export const cardReaderPaymentMethods = [
  {
    title: "Contactless",
    copy: "Tap eligible cards or phones for fast checkout.",
    supported: true,
  },
  {
    title: "Chip & PIN",
    copy: "Insert chip cards with PIN entry on device.",
    supported: true,
  },
  {
    title: "Digital wallets",
    copy: "Accept mobile wallet payments on compatible devices.",
    supported: true,
  },
] as const;

export const cardReaderExperienceFeatures = [
  "Clear payment interaction",
  "Simple card presentation",
  "Fast checkout workflow",
  "Easy customer use",
  "Professional countertop experience",
] as const;

export const cardReaderWorkflowBullets = [
  "Easy customer interaction",
  "Clean payment flow",
  "Organized counter setup",
  "Professional checkout experience",
] as const;

export const cardReaderCustomerThemes = [
  "Easy to understand",
  "Simple interaction",
  "Professional presentation",
  "Convenient checkout",
] as const;

export const cardReaderDesignFeatures = [
  "Compact countertop design",
  "Clean hardware appearance",
  "Easy customer access",
  "Professional hardware design",
  "Designed for everyday use",
] as const;

export const cardReaderBusinessTypes = [
  {
    title: "Retail",
    copy: "Fast card payments for retail checkout counters.",
    icon: "M4 7h16v10H4zM8 11h8",
  },
  {
    title: "Restaurant",
    copy: "Built for busy front-of-house payment acceptance.",
    icon: "M6 10h12v8H6zM9 6h6v4H9z",
  },
  {
    title: "Café",
    copy: "Quick contactless payments for counter service.",
    icon: "M8 12h8v6H8zM10 8h4v4h-4z",
  },
  {
    title: "Service business",
    copy: "Professional payments for customer-facing counters.",
    icon: "M5 12h14M8 8V5h8v3",
  },
] as const;

export const cardReaderEcosystemProducts = [
  { label: "Card Reader", href: "/products/pos-card-reader", primary: true },
  { label: "POS Device", href: "/products/pos-device" },
  { label: "POS Monitor", href: "/products/pos-monitor" },
  { label: "POS Printer", href: "/products/pos-printer" },
  { label: "Cash Counter", href: "/products/cash-counter" },
] as const;

export const cardReaderTrustIndicators = [
  "Secure payment processing",
  "Vertex POS integration",
  "Contactless ready",
  "Vertex support",
] as const;

export const cardReaderPeaceOfMind = [
  {
    title: "Reliable hardware",
    copy: "Built for everyday business environments.",
    icon: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
  },
  {
    title: "Simple checkout",
    copy: "Designed around a straightforward payment experience.",
    icon: "M4 6h16v4H4zM4 12h7v6H4zM13 12h7v6h-7z",
  },
  {
    title: "Business ready",
    copy: "Fits naturally into modern POS environments.",
    icon: "M4 7h16M4 12h10M4 17h14",
  },
  {
    title: "Vertex support",
    copy: "Support when you need it.",
    icon: "M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  },
] as const;

export const cardReaderSetupOptions = [
  {
    name: "Card Reader",
    description:
      "Compact countertop payment device for contactless, chip, and digital wallet checkout.",
    features: [
      "Contactless / Chip / PIN",
      "Digital wallet support",
      "Wi-Fi / Ethernet / Bluetooth",
      "Vertex POS integration",
    ],
    cta: "Get Started",
    href: "/get-started",
    featured: true,
  },
  {
    name: "Complete checkout setup",
    description:
      "Combine the Card Reader with Vertex POS hardware for a connected payment environment.",
    features: [
      "Card Reader",
      "POS Device",
      "POS Monitor",
      "POS Printer options",
    ],
    cta: "Contact Sales",
    href: "/get-started",
    featured: false,
  },
] as const;

export const cardReaderIncluded = [
  {
    title: "Card Reader",
    copy: "Vertex POS Card Reader. Contact Vertex for package contents and setup details.",
  },
] as const;

export const cardReaderFaqs = [
  {
    question: "What is the Vertex Card Reader?",
    answer:
      "The Vertex POS Card Reader is a compact countertop payment device designed for restaurant and counter-service checkout. It supports contactless, chip, and digital wallet payments as part of a Vertex POS setup.",
  },
  {
    question: "What payment methods does it support?",
    answer:
      "It supports contactless/NFC, Chip & PIN, credit and debit cards, and digital wallets for restaurant checkout.",
  },
  {
    question: "Does it support contactless payments?",
    answer:
      "Yes. Guests can tap eligible cards or phones for fast contactless checkout at the counter.",
  },
  {
    question: "Does it support chip cards?",
    answer:
      "Yes. The Card Reader supports Chip & PIN payment for eligible cards.",
  },
  {
    question: "Does it support magnetic stripe cards?",
    answer:
      "Contact Vertex for product details and supported payment methods for your configuration.",
  },
  {
    question: "Is it compatible with the Vertex POS Device?",
    answer:
      "Yes. The Card Reader connects into the Vertex POS checkout workflow alongside supported Vertex POS hardware.",
  },
  {
    question: "Is it compatible with the Vertex POS Monitor?",
    answer:
      "The Card Reader can be part of a complete Vertex checkout environment that includes a customer-facing POS Monitor. Contact Vertex for your configuration.",
  },
  {
    question: "Does it require a separate power source?",
    answer:
      "Contact Vertex for product details and power requirements for your setup.",
  },
  {
    question: "How is the Card Reader connected?",
    answer:
      "Connectivity options include Wi-Fi, Ethernet, and Bluetooth so you can match the reader to your counter and network layout.",
  },
  {
    question: "What is included with the Card Reader?",
    answer:
      "Contact Vertex for package contents and accessories included with your Card Reader order.",
  },
  {
    question: "Is the Card Reader secure?",
    answer:
      "Payments move through a secure processing flow from tap or insert through confirmation. Contact Vertex for security and compliance details for your configuration.",
  },
  {
    question: "How can I purchase the Vertex Card Reader?",
    answer:
      "Get started online or contact sales for pricing and a payment setup matched to your checkout environment.",
  },
] as const;
