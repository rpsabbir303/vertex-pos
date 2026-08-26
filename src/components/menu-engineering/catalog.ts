/**
 * Menu Engineering — Back Office feature catalog.
 * Marketing content with fictional restaurant sample data.
 */
export const menuEngineeringProduct = {
  name: "Menu Engineering",
  category: "Back Office",
  description: "Profitability analysis and menu-mix reporting",
  tagline: "Know what sells. Know what earns.",
  heroHeadline: "Turn menu data into smarter decisions.",
  heroCopy:
    "See which menu items drive sales, which generate profit, and where your menu can perform better — all from one connected view.",
  supportCopy:
    "Use real sales and profitability data to understand your menu, improve item performance, and make smarter decisions about what stays, changes, or goes.",
} as const;

export const overviewMetrics = [
  { label: "Total Menu Sales", value: "$48,620" },
  { label: "Gross Profit", value: "$21,340" },
  { label: "Top Seller", value: "Truffle Burger" },
  { label: "Highest Margin", value: "Salmon Bowl" },
  { label: "Low Performer", value: "Veggie Wrap" },
] as const;

export const matrixQuadrants = [
  {
    key: "stars",
    title: "Stars",
    popularity: "High popularity",
    profitability: "High profitability",
    items: ["Truffle Burger", "Salmon Bowl"],
  },
  {
    key: "puzzles",
    title: "Puzzles",
    popularity: "Low popularity",
    profitability: "High profitability",
    items: ["Steak Frites", "Shrimp Pasta"],
  },
  {
    key: "plowhorses",
    title: "Plowhorses",
    popularity: "High popularity",
    profitability: "Low profitability",
    items: ["Classic Burger", "Chicken Sandwich"],
  },
  {
    key: "dogs",
    title: "Dogs",
    popularity: "Low popularity",
    profitability: "Low profitability",
    items: ["Veggie Wrap", "Seasonal Soup"],
  },
] as const;

export const insightCards = [
  {
    title: "Identify Best Sellers",
    copy: "See which items consistently drive customer demand.",
  },
  {
    title: "Improve Profitability",
    copy: "Spot high-volume items with margins that need attention.",
  },
  {
    title: "Find Hidden Opportunities",
    copy: "Discover profitable items that need better placement or promotion.",
  },
  {
    title: "Optimize Your Menu",
    copy: "Use performance data to decide what to keep, change, promote, or remove.",
  },
] as const;

export const itemRows = [
  {
    item: "Truffle Burger",
    category: "Burgers",
    orders: "184",
    revenue: "$4,968",
    foodCost: "28%",
    profit: "$3,578",
    margin: "72%",
    performance: "Star" as const,
  },
  {
    item: "Salmon Bowl",
    category: "Bowls",
    orders: "126",
    revenue: "$3,780",
    foodCost: "31%",
    profit: "$2,608",
    margin: "69%",
    performance: "Star" as const,
  },
  {
    item: "Chicken Sandwich",
    category: "Sandwiches",
    orders: "210",
    revenue: "$3,150",
    foodCost: "48%",
    profit: "$1,638",
    margin: "52%",
    performance: "Plowhorse" as const,
  },
  {
    item: "Veggie Wrap",
    category: "Wraps",
    orders: "42",
    revenue: "$756",
    foodCost: "61%",
    profit: "$295",
    margin: "39%",
    performance: "Dog" as const,
  },
] as const;

export const categoryRows = [
  { category: "Burgers", sales: "$18,420", margin: "68%", bar: 90 },
  { category: "Bowls", sales: "$12,840", margin: "71%", bar: 72 },
  { category: "Pizza", sales: "$9,620", margin: "54%", bar: 55 },
  { category: "Drinks", sales: "$7,740", margin: "78%", bar: 48 },
] as const;

export const recommendations = [
  {
    title: "Promote Truffle Burger",
    detail: "High demand + high margin.",
    action: "Recommended for featured placement.",
    tone: "strong" as const,
  },
  {
    title: "Review Veggie Wrap",
    detail: "Low demand + low margin.",
    action: "Consider updating pricing, ingredients, or placement.",
    tone: "warn" as const,
  },
  {
    title: "Review Chicken Sandwich Pricing",
    detail: "High demand but lower margin.",
    action: "Potential opportunity to improve profitability.",
    tone: "neutral" as const,
  },
] as const;

export const workflowSteps = [
  {
    step: "01",
    title: "Track",
    copy: "Vertex POS collects menu sales and item performance data.",
  },
  {
    step: "02",
    title: "Understand",
    copy: "Review popularity, revenue, costs, margins, and menu mix.",
  },
  {
    step: "03",
    title: "Optimize",
    copy: "Use those insights to improve pricing, placement, promotions, and menu selection.",
  },
] as const;

export const benefits = [
  {
    title: "Better menu profitability",
    copy: "Focus attention on the dishes that protect and grow contribution.",
  },
  {
    title: "Clearer item performance",
    copy: "See popularity and profitability together for every menu item.",
  },
  {
    title: "Smarter pricing decisions",
    copy: "Understand how food cost and price shape margin before you change a recipe.",
  },
  {
    title: "Less guesswork",
    copy: "Replace gut-feel menu edits with sales-backed recommendations.",
  },
] as const;
