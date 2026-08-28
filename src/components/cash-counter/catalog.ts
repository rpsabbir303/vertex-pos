/**
 * Vertex Cash Counter — product catalog.
 * POS checkout station / counter workstation. Only confirmed product facts.
 */
export const cashCounterProduct = {
  name: "Vertex Cash Counter",
  shortName: "Cash Counter",
  category: "VERTEX CASH COUNTER",
  tagline: "Build a better checkout experience.",
  description:
    "A professional checkout station designed around the modern POS experience.",
  heroSupport:
    "Create a clean, professional checkout environment designed around your POS.",
  intro:
    "The Vertex Cash Counter creates a dedicated workspace for POS operations — giving your team a clean, organized checkout area built for everyday business.",
  benefits: [
    "Professional checkout setup",
    "Organized POS workspace",
    "Clean hardware placement",
    "Designed for daily business use",
    "Modern customer-facing experience",
  ],
  /** Confirmed / qualitative attributes only — no invented measurements. */
  specs: [
    { label: "Product", value: "Vertex Cash Counter" },
    { label: "Product type", value: "POS checkout counter / checkout station" },
    { label: "Use", value: "Professional checkout workspace" },
    { label: "Design", value: "Modern countertop workstation" },
    { label: "Integration", value: "Vertex POS ecosystem" },
    { label: "Hardware placement", value: "Designed for POS device and monitor placement" },
    { label: "Connectivity", value: "POS-connected checkout environment" },
    { label: "Configuration", value: "Contact Vertex for available configurations" },
  ],
} as const;

export const counterDesignFeatures = [
  "Dedicated POS placement",
  "Clean countertop",
  "Organized workspace",
  "Professional appearance",
  "Efficient use of counter space",
] as const;

export const checkoutExperienceBullets = [
  "Easy access to POS hardware",
  "Organized cashier workspace",
  "Clear customer interaction",
  "Professional checkout presentation",
] as const;

export const counterBusinessTypes = [
  {
    title: "Retail",
    copy: "A clean, professional checkout area for retail counters.",
    icon: "M4 7h16v10H4zM8 11h8",
  },
  {
    title: "Restaurant",
    copy: "Built for busy front-of-house checkout environments.",
    icon: "M6 10h12v8H6zM9 6h6v4H9z",
  },
  {
    title: "Café",
    copy: "Compact, organized workspace for fast counter service.",
    icon: "M8 12h8v6H8zM10 8h4v4h-4z",
  },
  {
    title: "Service business",
    copy: "Professional presentation for customer-facing counters.",
    icon: "M5 12h14M8 8V5h8v3",
  },
] as const;

export const counterEcosystemProducts = [
  { label: "Cash Counter", href: "/products/cash-counter", primary: true },
  { label: "POS Monitor", href: "/products/pos-monitor" },
  { label: "POS Device", href: "/products/pos-device" },
  { label: "Payment Terminal", href: "/products/payment-terminal" },
  { label: "Card Reader", href: "/products/pos-card-reader" },
] as const;

export const counterTrustIndicators = [
  "Professional design",
  "Business-ready setup",
  "Vertex POS ecosystem",
  "Vertex support",
] as const;

export const counterPeaceOfMind = [
  {
    title: "Professional design",
    copy: "Create a polished customer-facing checkout.",
    icon: "M4 7h16M4 12h10M4 17h14",
  },
  {
    title: "Organized workspace",
    copy: "Keep your POS environment clean and efficient.",
    icon: "M4 6h16v4H4zM4 12h7v6H4zM13 12h7v6h-7z",
  },
  {
    title: "Business ready",
    copy: "Designed for everyday checkout environments.",
    icon: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
  },
  {
    title: "Vertex support",
    copy: "Support when you need it.",
    icon: "M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  },
] as const;

export const counterSetupOptions = [
  {
    name: "Cash Counter",
    description:
      "A dedicated POS checkout station for a clean, professional counter workspace.",
    features: [
      "Checkout counter workstation",
      "Organized POS workspace",
      "Professional counter presentation",
      "Contact sales for configuration",
    ],
    cta: "Get Started",
    href: "/get-started",
    featured: true,
    layout: "full" as const,
  },
  {
    name: "Complete checkout setup",
    description:
      "Combine the Cash Counter with Vertex POS hardware for a connected checkout environment.",
    features: [
      "Cash Counter",
      "POS Device",
      "POS Monitor",
      "Payment hardware options",
    ],
    cta: "Contact Sales",
    href: "/get-started",
    featured: false,
    layout: "ecosystem" as const,
  },
] as const;

export const counterIncluded = [
  {
    title: "Cash Counter",
    copy: "Vertex checkout station workstation. Contact Vertex for configuration and setup details.",
  },
] as const;

export const counterFaqs = [
  {
    question: "What is the Vertex Cash Counter?",
    answer:
      "The Vertex Cash Counter is a professional POS checkout station — a dedicated counter workspace designed around modern POS operations for retail, restaurant, café, and service businesses.",
  },
  {
    question: "What is included with the Cash Counter?",
    answer:
      "The Cash Counter checkout station. Contact Vertex for available configurations, accessories, and setup options for your business.",
  },
  {
    question: "What type of businesses can use the Cash Counter?",
    answer:
      "The Cash Counter is designed for customer-facing checkout environments including retail stores, restaurants, cafés, supermarkets, convenience stores, and service counters.",
  },
  {
    question: "Can I use a Vertex POS Device with the Cash Counter?",
    answer:
      "Yes. The Cash Counter is designed as a checkout workspace that accommodates Vertex POS hardware as part of a complete counter setup.",
  },
  {
    question: "Can I use a Vertex POS Monitor with the Cash Counter?",
    answer:
      "Yes. The Cash Counter can be configured as part of a complete Vertex checkout environment that includes a customer-facing POS Monitor.",
  },
  {
    question: "Is the Cash Counter customizable?",
    answer:
      "Contact Vertex for available configurations and specifications for your checkout environment.",
  },
  {
    question: "What are the Cash Counter dimensions?",
    answer:
      "Contact Vertex for available configurations and specifications.",
  },
  {
    question: "How is the POS hardware mounted?",
    answer:
      "Contact Vertex for available configurations and mounting options for your POS hardware setup.",
  },
  {
    question: "Does the Cash Counter include cable management?",
    answer:
      "Contact Vertex for available configurations and specifications.",
  },
  {
    question: "How can I purchase the Vertex Cash Counter?",
    answer:
      "Get started online or contact sales to plan a checkout setup matched to your business.",
  },
] as const;
