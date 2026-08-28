/**
 * Vertex POS Monitor — product catalog.
 * Only confirmed / non-fabricated product facts live here.
 */
export const monitorProduct = {
  name: "POS Monitor",
  fullName: "Vertex POS Monitor",
  category: "VERTEX POS MONITOR",
  tagline: "A smarter monitor for your modern POS.",
  description:
    "Vertex POS Monitor delivers a clean, reliable, and professional customer-facing display experience for modern restaurant counters.",
  intro:
    "The POS Monitor gives restaurant staff and customers a clear view of order information, totals, and payment-related details at the counter.",
  heroSupport:
    "Keep every order, total, and payment visible with customer-facing hardware designed for busy checkout environments.",
} as const;

/** Confirmed product-level attributes only — no invented measurements. */
export const monitorSpecs = [
  { label: "Product", value: "POS Monitor" },
  { label: "Product type", value: "Customer-facing POS display" },
  { label: "Display", value: "Customer-facing display" },
  { label: "Use", value: "Order, total, and transaction visibility" },
  { label: "Integration", value: "Vertex POS" },
  { label: "Placement", value: "Restaurant checkout / counter" },
  { label: "Connectivity", value: "POS system connection" },
  { label: "Design", value: "Countertop hardware" },
  { label: "Workflow", value: "Customer-facing transaction display" },
] as const;

export const monitorIntroAdvantages = [
  "Clear, responsive customer-facing display",
  "Professional POS experience at the counter",
  "Designed for everyday restaurant service",
  "Integrates with Vertex POS",
  "Reliable countertop hardware",
  "Clean, modern counter appearance",
] as const;

export const monitorWorkFeatures = [
  "Responsive customer-facing interaction",
  "Easy-to-read transaction interface",
  "Designed for long business hours",
  "Compact countertop footprint",
  "Clear order and total visibility",
  "Professional checkout presentation",
] as const;

export const monitorTrustFeatures = [
  {
    title: "Reliable hardware",
    copy: "Built for continuous use in demanding restaurant environments.",
    icon: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
  },
  {
    title: "Secure checkout",
    copy: "Keeps transaction details visible so customers can confirm before payment.",
    icon: "M5 12h14M8 8V5h8v3M5 19h14V8H5z",
  },
  {
    title: "Vertex support",
    copy: "Get guidance on setup, placement, and integration with your counter.",
    icon: "M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  },
  {
    title: "Business-ready",
    copy: "Designed to support busy restaurant checkout workflows every day.",
    icon: "M4 7h16M4 12h10M4 17h14",
  },
] as const;

export const monitorSetupOptions = [
  {
    name: "POS Monitor",
    description:
      "Customer-facing display for order, total, and transaction visibility at your counter.",
    features: [
      "Customer-facing display",
      "Vertex POS integration",
      "Countertop placement",
      "Order and total visibility",
    ],
    cta: "Get Started",
    href: "/get-started",
    featured: true,
  },
  {
    name: "Custom counter setup",
    description:
      "Work with Vertex to configure stand, placement, and connection options for your restaurant.",
    features: [
      "Placement guidance",
      "Connection planning",
      "Counter layout support",
      "Talk to sales for details",
    ],
    cta: "Contact Sales",
    href: "/get-started",
    featured: false,
  },
] as const;

export const monitorTestimonial = {
  quote:
    "The Vertex POS Monitor gives our guests a clear view of every order. Checkout feels more professional and our team spends less time explaining totals.",
  attribution: "Restaurant operator",
  role: "Counter service",
} as const;

export const monitorGrowthLinks = [
  { label: "POS Device", href: "/products/pos-device" },
  { label: "Payment Terminal", href: "/products/payment-terminal" },
  { label: "POS & Billing", href: "/products/pos-billing" },
] as const;

export const monitorFaqs = [
  {
    question: "What is the Vertex POS Monitor?",
    answer:
      "The Vertex POS Monitor is a customer-facing display for restaurant counters. It keeps orders, totals, and payment-related details easy to see during checkout.",
  },
  {
    question: "Is the monitor touchscreen?",
    answer:
      "The POS Monitor is built as a customer-facing display for order and transaction visibility. Contact sales for capability details specific to your setup.",
  },
  {
    question: "What POS systems is it compatible with?",
    answer:
      "The POS Monitor is designed to work as part of the Vertex POS experience at the restaurant counter.",
  },
  {
    question: "Can I use it with other Vertex hardware?",
    answer:
      "Yes. The POS Monitor is designed to complement other Vertex POS hardware as part of a connected checkout setup.",
  },
  {
    question: "Is it suitable for retail and restaurants?",
    answer:
      "It is designed for restaurant checkout and counter service — including counter service and quick-service environments where guests need a clear view of the transaction.",
  },
  {
    question: "What are the available display sizes?",
    answer:
      "Display sizing depends on your restaurant setup. Contact sales for configuration options matched to your counter.",
  },
  {
    question: "Does Vertex provide support?",
    answer:
      "Yes. Vertex can help with setup, placement, and integration questions for your POS Monitor and counter workflow.",
  },
  {
    question: "How can I purchase a Vertex POS Monitor?",
    answer:
      "Get started online or contact sales for a quote tailored to your restaurant counter and Vertex POS setup.",
  },
] as const;
