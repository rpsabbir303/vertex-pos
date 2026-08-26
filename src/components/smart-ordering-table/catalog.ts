/**
 * Vertex Smart Ordering Table — marketing catalog.
 * Confirmed product characteristics only; no invented tech specs or pricing.
 */
export const smartOrderingTableProduct = {
  name: "Smart Ordering Table",
  tagline: "Smart ordering at the table, without the wait.",
  positioning: "Guests order faster. Restaurants operate smarter.",
  heroHeadline: "Let every table become a smarter way to order.",
  heroCopy:
    "Guests browse the menu, customize items, and send orders straight to the kitchen from a built-in table screen — without waiting for staff.",
  description:
    "A smart restaurant ordering table with a built-in customer-facing screen that lets guests browse the menu, customize items, place orders, and interact with the restaurant without waiting for staff.",
} as const;

export const experienceSteps = [
  {
    step: "01",
    title: "Browse",
    copy: "Explore the digital menu right from the table.",
  },
  {
    step: "02",
    title: "Customize",
    copy: "Add modifiers and preferences with clarity.",
  },
  {
    step: "03",
    title: "Order",
    copy: "Send the order directly into the POS workflow.",
  },
  {
    step: "04",
    title: "Enjoy",
    copy: "Stay seated while the kitchen gets to work.",
  },
] as const;

export const menuAnnotations = [
  { label: "Easy menu discovery", side: "left" as const },
  { label: "Item customization", side: "right" as const },
  { label: "Clear pricing", side: "left" as const },
  { label: "Fast checkout", side: "right" as const },
] as const;

export const orderingStages = [
  {
    step: "01",
    title: "Browse menu",
    copy: "Categories and dishes appear on the built-in screen.",
  },
  {
    step: "02",
    title: "Select item",
    copy: "Guests tap into dishes with photos, names, and prices.",
  },
  {
    step: "03",
    title: "Customize",
    copy: "Modifiers and preferences stay clear before adding.",
  },
  {
    step: "04",
    title: "Review order",
    copy: "Cart totals and selections are easy to confirm.",
  },
  {
    step: "05",
    title: "Send to kitchen",
    copy: "The order routes into the restaurant workflow.",
  },
] as const;

export const environmentBenefits = [
  "Faster ordering",
  "Less waiting",
  "Fewer order mistakes",
  "More staff efficiency",
] as const;

export const editorialBenefits = [
  {
    title: "Faster service",
    copy: "Guests order when they are ready.",
  },
  {
    title: "Higher order accuracy",
    copy: "Orders go directly into the POS workflow.",
  },
  {
    title: "Better guest experience",
    copy: "Customers have control without waiting for staff.",
  },
  {
    title: "More efficient teams",
    copy: "Staff can focus on hospitality instead of taking every order.",
  },
] as const;

export const interfaceCallouts = [
  "Menu",
  "Categories",
  "Modifiers",
  "Cart",
  "Order status",
  "Payment",
] as const;

export const useCases = [
  {
    title: "Fine Dining",
    copy: "Quiet table ordering that supports a refined service style.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Casual Dining",
    copy: "Keep busy dining rooms moving with self-directed ordering.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Cafés",
    copy: "Let guests browse and order while they settle in.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Food Halls",
    copy: "Support multi-concept spaces with clear table-side ordering.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export const specifications = [
  { label: "Product", value: "Smart Ordering Table" },
  { label: "Ordering", value: "Table-side ordering" },
  { label: "Display", value: "Built-in customer-facing touchscreen" },
  { label: "Menu", value: "Digital menu browsing" },
  { label: "Customization", value: "Item modifiers and preferences" },
  { label: "Integration", value: "Direct POS integration" },
  { label: "Workflow", value: "Orders routed to kitchen" },
  { label: "Use", value: "Restaurant table service" },
] as const;

export const galleryItems = [
  {
    caption: "Front view",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
    large: true,
  },
  {
    caption: "Table environment",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    large: false,
  },
  {
    caption: "Touchscreen interface",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    large: false,
  },
  {
    caption: "Detail view",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3bb3b36?auto=format&fit=crop&w=1200&q=80",
    large: false,
  },
] as const;
