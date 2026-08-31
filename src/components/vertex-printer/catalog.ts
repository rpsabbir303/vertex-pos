/**
 * Vertex Kitchen & Label Printer — product catalog.
 * Only confirmed / qualitative product facts — no invented measurements or connectivity claims.
 */
export const kitchenLabelProduct = {
  name: "Vertex Kitchen & Label Printer",
  shortName: "Kitchen & Label Printer",
  category: "KITCHEN & LABEL PRINTING",
  tagline: "Keep every order moving.",
  description:
    "Print kitchen orders, preparation labels, and packaging information quickly with a dedicated printing solution built for busy restaurant operations.",
  intro:
    "Send clear order information directly to the kitchen with fast, reliable printing designed for everyday restaurant service.",
  benefits: [
    "Fast kitchen order printing",
    "Clear order tickets",
    "Food preparation labels",
    "Reliable daily operation",
    "Easy kitchen workflow",
  ],
  specs: [
    { label: "Product", value: "Vertex Kitchen & Label Printer" },
    { label: "Product type", value: "Kitchen receipt and label printer" },
    { label: "Printing", value: "Kitchen order and food label printing" },
    { label: "Use", value: "Restaurant kitchen and packaging workflows" },
    { label: "Build", value: "Commercial restaurant-ready enclosure" },
    { label: "Operation", value: "Everyday kitchen printing" },
    { label: "Integration", value: "Vertex POS workflow compatible" },
    { label: "Configuration", value: "Contact Vertex for available configurations" },
  ],
} as const;

export const labelPrintingFeatures = [
  "Clear food labels",
  "Order identification",
  "Packaging support",
  "Easy label printing",
  "Designed for daily restaurant use",
] as const;

export const kitchenLabelUseCases = [
  {
    title: "Restaurants",
    copy: "Print kitchen orders clearly during busy service.",
    icon: "M6 10h12v8H6zM9 6h6v4H9z",
  },
  {
    title: "Cafés",
    copy: "Keep food and drink preparation organized.",
    icon: "M8 12h8v6H8zM10 8h4v4h-4z",
  },
  {
    title: "Takeaway",
    copy: "Print labels and order information for packed orders.",
    icon: "M4 7h16v10H4zM8 11h8",
  },
  {
    title: "Delivery",
    copy: "Keep packaging clearly identified from preparation to handoff.",
    icon: "M5 12h14M8 8V5h8v3",
  },
] as const;

export const kitchenWorkflowSteps = [
  "Order received",
  "Kitchen ticket printed",
  "Food prepared",
  "Label printed",
  "Order packed",
  "Ready for pickup",
] as const;

export const serviceBenefits = [
  {
    title: "Fast kitchen output",
    copy: "Get order information to the kitchen quickly.",
    icon: "M4 7h16M4 12h10M4 17h14",
  },
  {
    title: "Clear order information",
    copy: "Make tickets easy for staff to read and follow.",
    icon: "M4 6h16v4H4zM4 12h7v6H4zM13 12h7v6h-7z",
  },
  {
    title: "Organized packaging",
    copy: "Use labels to identify food and packed orders.",
    icon: "M7 7h10v10H7zM9 4h6v3H9z",
  },
  {
    title: "Reliable daily operation",
    copy: "Designed for repeated use in busy restaurant environments.",
    icon: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
  },
] as const;

export const kitchenLabelTrustIndicators = [
  "Kitchen order printing",
  "Food label printing",
  "Vertex POS compatible",
  "Vertex support",
] as const;

export const kitchenLabelSetupOptions = [
  {
    name: "Kitchen Printer",
    description:
      "A dedicated printer for kitchen order tickets and restaurant workflows.",
    features: [
      "Kitchen order printing",
      "Clear printed tickets",
      "Countertop-ready design",
      "Vertex POS workflow",
    ],
    cta: "Get Started",
    href: "/get-started",
    featured: true,
    kind: "ticket" as const,
  },
  {
    name: "Kitchen & Label Setup",
    description:
      "Combine kitchen order printing and food labeling for a complete restaurant workflow.",
    features: [
      "Kitchen printing setup",
      "Label printing",
      "Packaging workflow",
      "Configuration support",
    ],
    cta: "Contact Sales",
    href: "/get-started",
    featured: false,
    kind: "both" as const,
  },
] as const;

export const kitchenLabelFaqs = [
  {
    question: "What is the Vertex Kitchen & Label Printer?",
    answer:
      "The Vertex Kitchen & Label Printer is a restaurant printing solution designed for kitchen order tickets and food or packaging labels — helping teams move orders from prep to handoff.",
  },
  {
    question: "What is the difference between a kitchen printer and a label printer?",
    answer:
      "A kitchen printer produces order tickets for preparation stations. A label printer produces food and packaging labels for identification during prep, takeaway, and delivery. Availability may depend on your selected setup.",
  },
  {
    question: "Can the printer receive orders from Vertex POS?",
    answer:
      "Yes. It is designed to work within Vertex POS restaurant workflows. Contact Vertex for configuration details for your kitchen setup.",
  },
  {
    question: "Can I print food preparation labels?",
    answer:
      "Yes. The solution is designed to support clear food and packaging labels for preparation, pickup, and delivery workflows where configured.",
  },
  {
    question: "Is the printer suitable for restaurants and cafés?",
    answer:
      "Yes. It is built for everyday restaurant and café kitchen and packaging environments.",
  },
  {
    question: "Can I use the printer for takeaway and delivery orders?",
    answer:
      "Yes. Labels and order information can help identify packed takeaway and delivery orders as part of your restaurant workflow.",
  },
  {
    question: "How do I configure the printer for my restaurant?",
    answer:
      "Contact Vertex sales for configuration and connectivity options matched to your kitchen and packaging setup.",
  },
  {
    question: "How do I get pricing?",
    answer:
      "Request a quote or contact sales for pricing and configuration options for your business.",
  },
] as const;
