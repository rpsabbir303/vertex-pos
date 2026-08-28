/**
 * Vertex POS Device — product catalog.
 * Specs below are from the existing Vertex product data in this project.
 */
export const devicePricing = {
  starting: 899,
} as const;

export function formatDevicePrice(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export function deviceStartingAt(amount = devicePricing.starting) {
  return `Starting at ${formatDevicePrice(amount)}`;
}

export const posDeviceProduct = {
  name: "Vertex POS Device",
  shortName: "POS Device",
  category: "VERTEX POS DEVICE",
  tagline: "Everything you need to run your business.",
  description:
    "A reliable all-in-one POS solution designed for modern restaurants — fast ordering, smooth checkout, and the pace of everyday service.",
  heroSupport:
    "Give your team one powerful workstation for orders, tables, kitchen routing, and checkout.",
  intro:
    "The Vertex POS Device combines the essential tools staff need for everyday checkout and restaurant operations on one primary terminal.",
  price: devicePricing.starting,
  benefits: [
    "Fast checkout",
    "Easy-to-use interface",
    "Reliable performance",
    "Professional countertop design",
    "Built for everyday business",
  ],
  /** From existing Vertex POS Device product data. */
  specs: [
    { label: "Display", value: '15.6" Full HD Touchscreen' },
    { label: "Processor", value: "High-performance restaurant-grade processor" },
    { label: "Memory", value: "8GB RAM" },
    { label: "Storage", value: "128GB SSD" },
    { label: "Connectivity", value: "Wi-Fi / Ethernet / Bluetooth" },
    { label: "Operating", value: "All-day restaurant operation" },
    { label: "Interface", value: "Responsive multi-touch display" },
    { label: "Build", value: "Restaurant-ready commercial enclosure" },
    { label: "Software", value: "Vertex POS" },
    { label: "Payments", value: "Integrated POS checkout workflow" },
    {
      label: "Integration",
      value: "Orders, tables, menu, kitchen, inventory and reporting",
    },
  ],
} as const;

export const devicePowerFeatures = [
  "Fast and responsive performance",
  "Clear and intuitive interface",
  "Easy checkout workflow",
  "Designed for busy environments",
  "Reliable day-to-day operation",
] as const;

export const deviceBusinessTypes = [
  "Restaurants",
  "Cafés",
  "Bars",
  "Quick-service counters",
  "Hospitality",
  "Growing service businesses",
] as const;

export const deviceWorkflowBullets = [
  "Quick transaction processing",
  "Easy order management",
  "Clear staff-facing workflow",
  "Simple employee experience",
  "Professional checkout experience",
] as const;

export const deviceManagementBullets = [
  "Order management",
  "Table management",
  "Menu customization",
  "Kitchen routing",
  "Integrated checkout and payments",
] as const;

export const deviceGrowthBullets = [
  "Flexible restaurant setup",
  "Reliable hardware",
  "Connected Vertex ecosystem",
  "Designed for growing businesses",
] as const;

export const deviceTrustFeatures = [
  {
    title: "Reliable hardware",
    copy: "Built for continuous use during busy restaurant service.",
    icon: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
  },
  {
    title: "Business support",
    copy: "Get guidance on setup, peripherals, and your restaurant workflow.",
    icon: "M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  },
  {
    title: "Secure experience",
    copy: "Designed for professional checkout and payment workflows.",
    icon: "M5 12h14M8 8V5h8v3M5 19h14V8H5z",
  },
  {
    title: "Easy setup",
    copy: "Get your POS environment up and running with Vertex support.",
    icon: "M4 7h16M4 12h10M4 17h14",
  },
] as const;

export const deviceSetupOptions = [
  {
    name: "Vertex POS Device",
    description:
      "The primary staff terminal for ordering, tables, kitchen routing, and checkout.",
    features: [
      "Fast order entry",
      "Table & order management",
      "Menu customization",
      "Integrated checkout",
    ],
    cta: "Get Started",
    href: "/get-started",
    featured: true,
    screen: "service" as const,
  },
  {
    name: "POS Device + Monitor",
    description:
      "Pair the staff terminal with a customer-facing display for clearer checkout.",
    features: [
      "Staff POS workstation",
      "Customer-facing monitor",
      "Connected Vertex POS workflow",
      "Counter-ready setup",
    ],
    cta: "Contact Sales",
    href: "/get-started",
    featured: false,
    screen: "order" as const,
  },
] as const;

export const deviceGrowthLinks = [
  { label: "POS Monitor", href: "/products/pos-monitor" },
  { label: "Payment Terminal", href: "/products/payment-terminal" },
  { label: "POS & Billing", href: "/products/pos-billing" },
] as const;

export const deviceTrustIndicators = [
  "Restaurant-ready hardware",
  "Vertex POS software",
  "Connected peripherals",
] as const;

export const deviceFaqs = [
  {
    question: "What is the Vertex POS Device?",
    answer:
      "The Vertex POS Device is the main restaurant POS terminal for staff order entry, table management, menu customization, kitchen routing, and checkout.",
  },
  {
    question: "What businesses can use the Vertex POS Device?",
    answer:
      "It is built as a front-of-house restaurant terminal for ordering, tables, kitchen routing, and checkout during live service.",
  },
  {
    question: "Is the Vertex POS Device touchscreen?",
    answer:
      "Yes. The device includes a responsive multi-touch display designed for fast order entry and staff workflows.",
  },
  {
    question: "What POS software works with the device?",
    answer:
      "The Vertex POS Device runs Vertex POS and supports the full staff workflow for orders, tables, menu, kitchen, inventory, and reporting.",
  },
  {
    question: "Can I connect other Vertex hardware?",
    answer:
      "Yes. The POS Device can connect with compatible payment hardware, kitchen systems, printers, customer-facing displays, and other restaurant peripherals.",
  },
  {
    question: "Does the device support payments?",
    answer:
      "Yes. Staff can review checks, apply discounts, and complete payment from the integrated POS checkout workflow.",
  },
  {
    question: "What connectivity options are available?",
    answer:
      "The device supports Wi-Fi, Ethernet, and Bluetooth connectivity as listed in the product specifications.",
  },
  {
    question: "Does Vertex provide support?",
    answer:
      "Yes. Talk to the Vertex team about setup, peripherals, and the right configuration for your restaurant.",
  },
  {
    question: "How can I purchase a Vertex POS Device?",
    answer:
      "Get started online or contact sales for pricing and a setup matched to your restaurant.",
  },
] as const;
