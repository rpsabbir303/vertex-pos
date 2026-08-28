export const navLinks = [
  { label: "Products", href: "/#products", hasMenu: true },
  { label: "Features", href: "/features", hasMenu: true },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Resources", href: "/#resources" },
];

/** Features → Back Office / Developers (and future feature groups) */
export const featureGroups = [
  {
    title: "Back Office",
    href: "/features/back-office",
    items: [
      {
        title: "Menu Engineering",
        description: "Profitability analysis and menu-mix reporting.",
        href: "/features/back-office/menu-engineering",
      },
    ],
  },
  {
    title: "Developers",
    href: "/features/developers/rest-api",
    items: [
      {
        title: "REST API",
        description: "Connect Vertex POS to your apps, workflows, and systems.",
        href: "/features/developers/rest-api",
      },
    ],
  },
] as const;

export const productLinks = [
  {
    title: "POS Device",
    description: "The terminal built for the whole restaurant.",
    href: "/products/pos-device",
  },
  {
    title: "POS Monitor",
    description: "Customer-facing order, total, and payment display.",
    href: "/products/pos-monitor",
  },
  {
    title: "Cash Counter",
    description: "Professional POS checkout station for a clean, organized counter workspace.",
    href: "/products/cash-counter",
  },
  {
    title: "Restaurant Printing",
    description: "Kitchen ticket and label printers for Vertex POS.",
    href: "/products/vertex-printer",
  },
  {
    title: "POS Printer",
    description: "Fast thermal receipt printing for busy restaurant counters.",
    href: "/products/pos-printer",
  },
  {
    title: "Card Reader",
    description: "Contactless, Chip & PIN, and digital wallet payments.",
    href: "/products/pos-card-reader",
  },
  {
    title: "Payment Terminal",
    description: "Dedicated countertop payments for fast, secure checkout.",
    href: "/products/payment-terminal",
  },
  {
    title: "Smart Ordering Table",
    description: "Smart ordering table with a built-in screen.",
    href: "/products/smart-ordering-table",
  },
  {
    title: "POS & Billing",
    description: "Dine-in, takeaway, and delivery on one terminal.",
    href: "/products/pos-billing",
  },
  {
    title: "Production Planner",
    description: "Plan prep from forecasted demand.",
    href: "/products/production-planner",
  },
  {
    title: "Split & Partial Pay",
    description: "Split checks and settle mixed payments.",
    href: "/products/split-partial-pay",
  },
  {
    title: "Kitchen Display",
    description: "Route tickets to the right station.",
    href: "/get-started",
  },
  {
    title: "Inventory",
    description: "Recipes, ingredients, and waste control.",
    href: "/get-started",
  },
];

export const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "POS Device", href: "/products/pos-device" },
      { label: "POS Monitor", href: "/products/pos-monitor" },
      { label: "Cash Counter", href: "/products/cash-counter" },
      { label: "Restaurant Printing", href: "/products/vertex-printer" },
      { label: "POS Printer", href: "/products/pos-printer" },
      { label: "Card Reader", href: "/products/pos-card-reader" },
      { label: "Payment Terminal", href: "/products/payment-terminal" },
      { label: "Smart Ordering Table", href: "/products/smart-ordering-table" },
      { label: "POS & Billing", href: "/products/pos-billing" },
      { label: "Production Planner", href: "/products/production-planner" },
      { label: "Split & Partial Pay", href: "/products/split-partial-pay" },
      { label: "Kitchen Display", href: "/get-started" },
      { label: "Online Ordering", href: "/get-started" },
      { label: "Inventory", href: "/get-started" },
    ],
  },
  {
    title: "Features",
    links: [
      {
        label: "Menu Engineering",
        href: "/features/back-office/menu-engineering",
      },
      {
        label: "REST API",
        href: "/features/developers/rest-api",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/#resources" },
      { label: "Guides", href: "/#resources" },
      { label: "REST API", href: "/features/developers/rest-api" },
      { label: "Customer stories", href: "/#resources" },
      { label: "Integrations", href: "/#resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Vertex", href: "/#resources" },
      { label: "Careers", href: "/#resources" },
      { label: "Contact", href: "/get-started" },
      { label: "Partners", href: "/#resources" },
    ],
  },
];
