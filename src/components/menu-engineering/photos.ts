/**
 * Menu Engineering photography — unique Unsplash assets per section.
 * Restaurant / food / chef context only. Each URL used once.
 */
export const mePhotos = {
  heroRestaurant:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
  performanceService:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
  matrixBurger:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  matrixBowl:
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  matrixPizza:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  matrixDrink:
    "https://images.unsplash.com/photo-1513558163717-ad81b3c0b8e4?auto=format&fit=crop&w=800&q=80",
  insightsManager:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
  itemBurger:
    "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=240&q=80",
  itemBowl:
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=240&q=80",
  itemSandwich:
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=240&q=80",
  itemWrap:
    "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=240&q=80",
  categoryBurgers:
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
  categoryBowls:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  categoryPizza:
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
  categoryDrinks:
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
  recommendationsChef:
    "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
  benefitsDining:
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=80",
  ctaPlated:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
} as const;

export const matrixFoodStrip = [
  { label: "Burger", src: mePhotos.matrixBurger },
  { label: "Bowl", src: mePhotos.matrixBowl },
  { label: "Pizza", src: mePhotos.matrixPizza },
  { label: "Drink", src: mePhotos.matrixDrink },
] as const;

export const itemThumbByName: Record<string, string> = {
  "Truffle Burger": mePhotos.itemBurger,
  "Salmon Bowl": mePhotos.itemBowl,
  "Chicken Sandwich": mePhotos.itemSandwich,
  "Veggie Wrap": mePhotos.itemWrap,
};

export const categoryPhotoByName: Record<
  string,
  { src: string; span: "large" | "small" }
> = {
  Burgers: { src: mePhotos.categoryBurgers, span: "large" },
  Bowls: { src: mePhotos.categoryBowls, span: "small" },
  Pizza: { src: mePhotos.categoryPizza, span: "small" },
  Drinks: { src: mePhotos.categoryDrinks, span: "large" },
};
