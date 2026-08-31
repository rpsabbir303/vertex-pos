/**
 * Vertex Smart POS Table — product catalog.
 * All-in-one countertop POS workstation. No invented technical specs or pricing.
 */
export const smartPosTableProduct = {
  name: "Vertex Smart POS Table",
  shortName: "Smart POS Table",
  category: "SMART POS TABLE",
  tagline: "Your entire checkout, built into one table.",
  description:
    "Bring ordering, checkout, and everyday POS operations together in one integrated touchscreen workstation designed for modern restaurants.",
  intro:
    "The Vertex Smart POS Table combines a touchscreen POS experience with an integrated countertop workstation, helping staff manage orders and checkout from one place.",
  benefits: [
    "Built-in touchscreen POS",
    "Integrated checkout workflow",
    "Restaurant-ready workstation",
    "Easy staff interaction",
    "Clean countertop setup",
  ],
  specs: [
    { label: "Product", value: "Vertex Smart POS Table" },
    { label: "Product type", value: "All-in-one POS table workstation" },
    { label: "Display", value: "Integrated touchscreen display" },
    { label: "Workflow", value: "Restaurant ordering and checkout" },
    { label: "Interface", value: "Touch-based POS interaction" },
    { label: "Build", value: "Commercial countertop enclosure" },
    { label: "Payment", value: "Integrated checkout workflow" },
    { label: "Connectivity", value: "Integrated hardware connectivity" },
    { label: "Use", value: "Restaurant and customer-facing service environments" },
    { label: "Configuration", value: "Contact Vertex for available configurations" },
  ],
} as const;

export const touchscreenFeatures = [
  "Responsive touch interaction",
  "Clear menu navigation",
  "Easy order building",
  "Fast checkout workflow",
  "Simple staff experience",
] as const;

export const smartPosTableUseCases = [
  {
    title: "Restaurants",
    copy: "A complete workstation for everyday front-of-house operations.",
    icon: "M6 10h12v8H6zM9 6h6v4H9z",
  },
  {
    title: "Cafés",
    copy: "Keep ordering and checkout simple from one compact setup.",
    icon: "M8 12h8v6H8zM10 8h4v4h-4z",
  },
  {
    title: "Quick service",
    copy: "Help teams move through orders quickly during busy periods.",
    icon: "M4 7h16M4 12h10M4 17h14",
  },
  {
    title: "Hospitality",
    copy: "Create a polished customer-facing checkout experience.",
    icon: "M5 12h14M8 8V5h8v3",
  },
] as const;

export const posWorkflowSteps = [
  "Browse menu",
  "Build order",
  "Review total",
  "Take payment",
  "Complete checkout",
] as const;

export const serviceBenefits = [
  {
    title: "Faster ordering",
    copy: "Build customer orders directly from the touchscreen.",
    icon: "M4 7h16M4 12h10M4 17h14",
  },
  {
    title: "Clear checkout",
    copy: "Review items, totals, and payment information in one place.",
    icon: "M4 6h16v4H4zM4 12h7v6H4zM13 12h7v6h-7z",
  },
  {
    title: "Less hardware clutter",
    copy: "Bring key POS functions into one integrated workstation.",
    icon: "M7 7h10v10H7zM9 4h6v3H9z",
  },
  {
    title: "Professional experience",
    copy: "Create a clean, modern checkout environment for customers and staff.",
    icon: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
  },
] as const;

export const smartPosTableTrustIndicators = [
  "All-in-one workstation",
  "Built-in touchscreen",
  "Restaurant POS workflow",
  "Vertex support",
] as const;

export const smartPosTableSetupOptions = [
  {
    name: "Smart POS Table",
    description:
      "An integrated touchscreen POS workstation for everyday ordering and checkout.",
    features: [
      "Built-in touchscreen",
      "Restaurant POS workflow",
      "Integrated checkout",
      "Countertop-ready design",
    ],
    cta: "Get Started",
    href: "/get-started",
    featured: true,
  },
  {
    name: "Custom Counter Setup",
    description:
      "Work with Vertex to configure the Smart POS Table around your restaurant's counter and workflow.",
    features: [
      "Placement guidance",
      "Counter configuration",
      "Connectivity planning",
      "Sales support",
    ],
    cta: "Contact Sales",
    href: "/get-started",
    featured: false,
  },
] as const;

export const smartPosTableFaqs = [
  {
    question: "What is the Vertex Smart POS Table?",
    answer:
      "The Vertex Smart POS Table is an all-in-one POS table workstation with a built-in touchscreen for restaurant ordering, checkout, and everyday front-of-house operations.",
  },
  {
    question: "How is the Smart POS Table different from a POS Monitor?",
    answer:
      "A POS Monitor is typically a customer-facing display. The Smart POS Table is an integrated countertop workstation that combines touchscreen POS interaction and checkout in one unit.",
  },
  {
    question: "Can staff manage orders directly from the touchscreen?",
    answer:
      "Yes. The built-in touchscreen is designed for browsing menus, building orders, reviewing totals, and completing checkout from one workstation.",
  },
  {
    question: "Can the Smart POS Table support restaurant checkout?",
    answer:
      "Yes. It is designed around restaurant ordering and checkout workflows. Payment and configuration options may depend on your selected setup.",
  },
  {
    question: "Can payment hardware be integrated into the setup?",
    answer:
      "The Smart POS Table includes an integrated checkout workflow and contactless payment interaction area for supported setups. Contact Vertex for configuration details.",
  },
  {
    question: "Is the Smart POS Table suitable for cafés and quick-service restaurants?",
    answer:
      "Yes. It is designed for restaurants, cafés, quick-service counters, and other customer-facing service environments.",
  },
  {
    question: "Can the Smart POS Table be configured for different counter environments?",
    answer:
      "Yes. Contact Vertex for placement guidance and configuration options matched to your counter and workflow.",
  },
  {
    question: "How do I get pricing?",
    answer:
      "Request a quote or contact sales for pricing and configuration options for your business.",
  },
] as const;
