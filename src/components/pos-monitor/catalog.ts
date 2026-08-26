/**
 * Vertex POS Monitor — product catalog.
 * Only confirmed / non-fabricated product facts live here.
 * Do not add screen size, resolution, ports, or package contents
 * unless those details are officially documented.
 */
export const monitorProduct = {
  name: "POS Monitor",
  fullName: "Vertex POS Monitor",
  category: "Hardware",
  tagline: "See every order clearly.",
  description:
    "Keep orders, totals, and payments easy to see with a customer-facing POS monitor designed for busy restaurant counters.",
  intro:
    "The POS Monitor gives restaurant staff and customers a clear view of order information, totals, and payment-related details at the counter.",
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

export const monitorBenefits = [
  "Clear customer-facing display",
  "Easy-to-read order totals",
  "Compact counter footprint",
  "Built for continuous restaurant service",
] as const;

export const monitorFeatures = [
  {
    title: "Customer-facing display",
    copy: "Show order details and totals clearly.",
  },
  {
    title: "Clear visual feedback",
    copy: "Make each transaction easy to understand.",
  },
  {
    title: "Compact counter design",
    copy: "Fits naturally into restaurant checkout spaces.",
  },
  {
    title: "Easy-to-read interface",
    copy: "Keep important information visible at a glance.",
  },
  {
    title: "Built for daily service",
    copy: "Designed for busy restaurant environments.",
  },
  {
    title: "Seamless POS workflow",
    copy: "Works as part of the Vertex POS experience.",
  },
] as const;

export const monitorCallouts = [
  { id: "display", label: "Customer-facing display", position: "tl" },
  { id: "angle", label: "Adjustable viewing position", position: "tr" },
  { id: "stand", label: "Compact stand", position: "bl" },
  { id: "screen", label: "Clear screen visibility", position: "mr" },
  { id: "footprint", label: "Counter-friendly footprint", position: "br" },
] as const;

export const monitorUseCases = [
  {
    title: "Counter Service",
    copy: "Give customers a clear view of their order and total during checkout.",
  },
  {
    title: "Quick-Service Restaurants",
    copy: "Keep transactions easy to follow during fast-paced service.",
  },
  {
    title: "Customer-Facing Checkout",
    copy: "Make order information visible without relying on staff explanations.",
  },
] as const;

export const monitorExperience = [
  {
    step: "01",
    title: "See the order",
    copy: "Customers can easily review what they ordered.",
  },
  {
    step: "02",
    title: "Confirm the total",
    copy: "Make pricing and totals clear before payment.",
  },
  {
    step: "03",
    title: "Keep service moving",
    copy: "Reduce confusion during busy checkout moments.",
  },
] as const;

/**
 * Only the confirmed product unit. Mounting and connection accessories
 * are not documented as a fixed package — surface via sales.
 */
export const monitorIncluded = [
  {
    title: "POS Monitor",
    copy: "Customer-facing display for order, total, and transaction visibility.",
  },
] as const;

export const monitorFaqs = [
  {
    question: "What is the Vertex POS Monitor?",
    answer:
      "The Vertex POS Monitor is a customer-facing display for restaurant counters. It keeps orders, totals, and payment-related details easy to see during checkout.",
  },
  {
    question: "Who is the POS Monitor designed for?",
    answer:
      "It is designed for restaurants that want guests and staff to share a clear view of the transaction at the counter — including counter service and quick-service environments.",
  },
  {
    question: "Can customers see their order and total?",
    answer:
      "Yes. The monitor is built to show order information and totals clearly so customers can follow the transaction as it happens.",
  },
  {
    question: "Does it work with Vertex POS?",
    answer:
      "Yes. The POS Monitor is designed to work as part of the Vertex POS experience at the restaurant counter.",
  },
  {
    question: "Where can the POS Monitor be placed?",
    answer:
      "It is intended for restaurant checkout and counter placement, where customers can see transaction details during service.",
  },
  {
    question: "How can I get pricing?",
    answer:
      "Pricing depends on your restaurant setup. Book a demo or talk to sales for a quote tailored to your counter.",
  },
] as const;
