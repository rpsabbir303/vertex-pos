/**
 * Editable Vertex Restaurant Printing catalog.
 * Two complementary printers — do not invent technical numbers.
 */
export const vertexPrinterPricing = {
  starting: 299,
} as const;

export function formatVertexPrinterPrice(amount = vertexPrinterPricing.starting) {
  return `$${amount.toLocaleString("en-US")}`;
}

export const ticketPrinter = {
  name: "Kitchen Ticket Printer",
  description:
    "Print incoming orders directly at the kitchen or preparation station so your team can start preparing without delay.",
  features: [
    "Kitchen order tickets",
    "Order details & modifiers",
    "Preparation workflow",
    "Fast thermal printing",
    "Ideal for kitchen stations",
  ],
  highlights: [
    "Clear order tickets",
    "Kitchen station routing",
    "Fast thermal printing",
    "Easy-to-read order details",
    "Built for continuous restaurant service",
  ],
  specs: [
    { label: "Printer Type", value: "Kitchen ticket printer" },
    { label: "Primary Use", value: "Restaurant kitchen orders" },
    { label: "Printing", value: "Thermal" },
    { label: "Workflow", value: "Vertex POS → Kitchen" },
    { label: "Environment", value: "Restaurant / Food Service" },
  ],
} as const;

export const labelPrinter = {
  name: "Kitchen & Label Printer",
  description:
    "Print food, prep and packaging labels to keep takeaway, delivery and prepared items clearly identified.",
  features: [
    "Food labels",
    "Packaging labels",
    "Prep labels",
    "Order identification",
    "Ideal for takeaway & delivery",
  ],
  highlights: [
    "Food labels",
    "Packaging labels",
    "Preparation labels",
    "Order identification",
    "Takeaway & delivery support",
  ],
  specs: [
    { label: "Printer Type", value: "Kitchen & label printer" },
    { label: "Primary Use", value: "Food, preparation & packaging labels" },
    { label: "Printing", value: "Thermal" },
    { label: "Workflow", value: "Vertex POS → Labels" },
    { label: "Environment", value: "Restaurant / Takeaway / Delivery" },
  ],
} as const;

export const restaurantPrintingProduct = {
  name: "Vertex Restaurant Printing",
  shortName: "Restaurant Printing",
  price: vertexPrinterPricing.starting,
  description:
    "Connect your restaurant workflow with reliable kitchen ticket and label printing — available through cloud or local printing.",
  valueStatement:
    "Connect kitchen orders, food labels and packaging workflows with Vertex printing solutions.",
  keyFeatures: [
    {
      title: "Kitchen ticket printing",
      copy: "Clear order information for preparation teams.",
    },
    {
      title: "Label printing",
      copy: "Print food and packaging labels.",
    },
    {
      title: "Cloud printing",
      copy: "Connect your printing workflow through the cloud.",
    },
    {
      title: "Local printing",
      copy: "Support direct local restaurant printing.",
    },
    {
      title: "Fast thermal printing",
      copy: "Keep printing moving during busy service.",
    },
    {
      title: "Restaurant-ready design",
      copy: "Built for continuous daily restaurant operation.",
    },
  ],
};
