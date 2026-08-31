/**
 * Vertex Payment Terminal — product catalog.
 * Only confirmed / qualitative product facts — no invented certifications or measurements.
 */
export const paymentTerminalProduct = {
  name: "Vertex Payment Terminal",
  shortName: "Payment Terminal",
  category: "PAYMENT TERMINAL",
  tagline: "Payments, made effortless.",
  description:
    "Give your customers a simple, professional way to pay with a dedicated payment terminal designed for fast, secure everyday transactions.",
  heroSupport:
    "Give your customers a simple, professional way to pay with a dedicated payment terminal designed for fast, secure everyday transactions.",
  intro:
    "Give customers a fast and familiar way to pay with a dedicated terminal built for everyday checkout.",
  benefits: [
    "Contactless payments",
    "Chip card payments",
    "Clear payment display",
    "Simple customer interaction",
    "Professional checkout experience",
  ],
  specs: [
    { label: "Product type", value: "Payment Terminal" },
    { label: "Payment methods", value: "Contactless / Chip / Digital payments" },
    { label: "Display", value: "Clear customer-facing payment display" },
    { label: "Customer flow", value: "Tap, insert, or pay digitally" },
    { label: "Form factor", value: "Compact countertop design" },
    { label: "Usage", value: "Everyday business checkout" },
    { label: "Compatibility", value: "Works with Vertex POS setups" },
    { label: "Configuration", value: "Contact Vertex for available configurations" },
  ],
} as const;

export const customerExperienceFeatures = [
  "Tap, insert, or pay digitally",
  "Clear on-screen instructions",
  "Fast payment interaction",
  "Easy customer-facing workflow",
  "Designed for everyday transactions",
] as const;

export const paymentTerminalUseCases = [
  {
    title: "Restaurants",
    copy: "Keep customer payments moving during busy service.",
    icon: "M6 10h12v8H6zM9 6h6v4H9z",
  },
  {
    title: "Cafés",
    copy: "Make quick counter payments simple and convenient.",
    icon: "M8 12h8v6H8zM10 8h4v4h-4z",
  },
  {
    title: "Retail",
    copy: "Give customers a familiar way to pay at checkout.",
    icon: "M4 7h16v10H4zM8 11h8",
  },
  {
    title: "Service businesses",
    copy: "Support smooth payment experiences wherever customers pay.",
    icon: "M5 12h14M8 8V5h8v3",
  },
] as const;

export const businessBenefits = [
  {
    title: "Fast checkout",
    copy: "Keep everyday transactions moving.",
    icon: "M4 7h16M4 12h10M4 17h14",
  },
  {
    title: "Customer friendly",
    copy: "Clear payment interactions make checkout easier.",
    icon: "M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  },
  {
    title: "Professional hardware",
    copy: "A polished terminal designed for business environments.",
    icon: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
  },
  {
    title: "Simple workflow",
    copy: "Reduce friction from payment start to completion.",
    icon: "M4 6h16v4H4zM4 12h7v6H4zM13 12h7v6h-7z",
  },
] as const;

export const paymentTerminalTrustIndicators = [
  "Contactless ready",
  "Clear payment display",
  "Vertex POS compatible",
  "Vertex support",
] as const;

export const paymentTerminalSetupOptions = [
  {
    name: "Vertex Payment Terminal",
    description:
      "A dedicated payment terminal for professional customer-facing transactions.",
    features: [
      "Contactless payment support",
      "Card payment support",
      "Clear customer display",
      "Professional countertop design",
    ],
    cta: "Get Started",
    href: "/get-started",
    featured: true,
  },
  {
    name: "Custom Payment Setup",
    description:
      "Work with Vertex to find the right payment hardware and workflow for your business.",
    features: [
      "Payment setup guidance",
      "Hardware planning",
      "Business-specific configuration",
      "Sales support",
    ],
    cta: "Contact Sales",
    href: "/get-started",
    featured: false,
  },
] as const;

export const paymentTerminalFaqs = [
  {
    question: "What is a payment terminal?",
    answer:
      "A payment terminal is a dedicated customer-facing device used to accept payments at checkout — presenting the amount, guiding the payment, and confirming completion.",
  },
  {
    question: "How does the Vertex Payment Terminal work?",
    answer:
      "Customers follow clear on-screen instructions to tap, insert, or pay digitally. The terminal guides the payment interaction from start through confirmation.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "The Vertex Payment Terminal is designed for contactless payments, chip card payments, and digital payment interactions. Availability may depend on your selected setup.",
  },
  {
    question: "Can customers pay using contactless cards or phones?",
    answer:
      "Yes. The terminal includes a tap-enabled payment area for contactless cards and phones where supported by your configuration.",
  },
  {
    question: "Is the Payment Terminal suitable for restaurants and retail businesses?",
    answer:
      "Yes. It is designed for everyday business checkout environments including restaurants, cafés, retail stores, and service businesses.",
  },
  {
    question: "Can the Payment Terminal work with Vertex POS?",
    answer:
      "Yes. The Payment Terminal is designed to work with Vertex POS setups. Contact Vertex for configuration details for your business.",
  },
  {
    question: "How do I get pricing?",
    answer:
      "Contact sales or request a quote for pricing and configuration options matched to your business.",
  },
  {
    question: "How do I get started with Vertex?",
    answer:
      "Get a quote or contact sales to plan a Payment Terminal setup that fits your checkout environment.",
  },
] as const;
