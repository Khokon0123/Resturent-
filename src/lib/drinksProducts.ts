import type { Product } from "@/types";

function d(
  id: string,
  name: string,
  subcategory: string,
  price: number,
  unit: string,
  image: string,
  brand: string,
  badge?: "FRESH" | "HALAL" | "SALE" | "NEW" | "HOT"
): Product {
  const slug = `drink-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  return {
    id,
    slug,
    name,
    category: "drinks",
    subcategory,
    price,
    unit,
    badge,
    description: `${name}. ${brand} beverage available at Asia Bazaar.`,
    image,
    featured: false,
    inStock: true,
    brand,
  };
}

// ── IMAGE REFERENCES ──────────────────────────────────────────────────────
// Open Food Facts: stable public domain product images
const coke     = "https://images.openfoodfacts.org/images/products/004/900/000/6346/front.jpg";
const sprite   = "https://images.openfoodfacts.org/images/products/004/900/002/8355/front.jpg";
const pepsi    = "https://images.openfoodfacts.org/images/products/012/000/014/3312/front.jpg";
const fanta    = "https://images.openfoodfacts.org/images/products/004/900/004/9491/front.jpg";
const dewDew   = "https://images.openfoodfacts.org/images/products/012/000/000/1596/front.jpg";
const dietCoke = "https://images.openfoodfacts.org/images/products/004/900/000/1944/front.jpg";
const gingerAle = "https://images.openfoodfacts.org/images/products/007/800/000/1057/front.jpg";
const redBull  = "https://images.openfoodfacts.org/images/products/061/126/999/0004/front.jpg";
const vitaCoco = "https://images.openfoodfacts.org/images/products/085/215/900/2070/front.jpg";

// Tales of India CDN: confirmed working Deep product photography style
const thumsUp   = "https://talesofindia.com.au/cdn/shop/files/91a65901cadb82bed971c102e95e3cd1360f428d_533x.png";
const limca     = "https://talesofindia.com.au/cdn/shop/files/24f08afba18c915eb0dcecee4594d2f23892a8f8_533x.png";
const roohAfza  = "https://talesofindia.com.au/cdn/shop/files/Untitled-1_b6b60b79-7b42-437a-a035-7723259c00a1_533x.jpg";
const roohAfzaPk = "https://talesofindia.com.au/cdn/shop/files/b6da0e94bf7b7b5acda118bc1d60c6a2325de218_533x.png";
const maaza600  = "https://talesofindia.com.au/cdn/shop/files/5b72c9c98b8e19cc483ca9b359e49eaef2618d1c_533x.png";
const frooti12  = "https://talesofindia.com.au/cdn/shop/files/Frooti-Mango-Juice-1.2L_533x.jpg";
const mango290  = "https://talesofindia.com.au/cdn/shop/files/Indya_Falooda_Mango_Drink_290ml_533x.jpg";
const mangoPanna = "https://talesofindia.com.au/cdn/shop/files/Haldiram-s-Mango-Panna-Concentrate-Juice-750ml-download_533x.jpg";
const cocoIndia = "https://cdn11.bigcommerce.com/s-9laccbnv50/images/stencil/1280x1280/products/6037/3309/1729896878716__09916.1729896879.jpg?c=1";

export const drinksProducts: Product[] = [
  // ── SODAS & SOFT DRINKS ───────────────────────────────────────────────────
  d("drink-001", "Coca-Cola Classic 12oz Can",      "sodas", 1.29, "can",    coke,     "Coca-Cola"),
  d("drink-002", "Coca-Cola Classic 2L Bottle",     "sodas", 2.49, "bottle", coke,     "Coca-Cola"),
  d("drink-003", "Sprite Lemon Lime 12oz Can",      "sodas", 1.29, "can",    sprite,   "Coca-Cola"),
  d("drink-004", "Sprite 2L Bottle",                "sodas", 2.49, "bottle", sprite,   "Coca-Cola"),
  d("drink-005", "Pepsi Cola 12oz Can",             "sodas", 1.29, "can",    pepsi,    "PepsiCo"),
  d("drink-006", "Pepsi Cola 2L Bottle",            "sodas", 2.49, "bottle", pepsi,    "PepsiCo"),
  d("drink-007", "Fanta Orange 12oz Can",           "sodas", 1.29, "can",    fanta,    "Coca-Cola"),
  d("drink-008", "Mountain Dew 12oz Can",           "sodas", 1.29, "can",    dewDew,   "PepsiCo"),
  d("drink-009", "Diet Coke 12oz Can",              "sodas", 1.29, "can",    dietCoke, "Coca-Cola"),
  d("drink-010", "Canada Dry Ginger Ale 12oz Can",  "sodas", 1.29, "can",    gingerAle,"Canada Dry"),
  d("drink-011", "Thums Up Cola 250ml",             "sodas", 1.49, "bottle", thumsUp,  "Coca-Cola", "HOT"),
  d("drink-012", "Limca Lemon Lime Soda 250ml",     "sodas", 1.49, "bottle", limca,    "Coca-Cola"),

  // ── INDIAN & DESI DRINKS ─────────────────────────────────────────────────
  d("drink-013", "Rooh Afza Rose Sharbat 750ml",      "desi-drinks", 7.99,  "bottle", roohAfza,   "Hamdard",  "HOT"),
  d("drink-014", "Rooh Afza Rose Sharbat 800ml (Pakistan)", "desi-drinks", 8.99, "bottle", roohAfzaPk, "Hamdard"),
  d("drink-015", "Maaza Mango Drink 600ml",           "desi-drinks", 2.29,  "bottle", maaza600,   "Coca-Cola"),
  d("drink-016", "Maaza Mango Drink 250ml",           "desi-drinks", 1.49,  "bottle", maaza600,   "Coca-Cola"),
  d("drink-017", "Frooti Mango Juice 1.2L",           "desi-drinks", 3.49,  "bottle", frooti12,   "Parle Agro", "HOT"),
  d("drink-018", "Frooti Mango Juice 200ml",          "desi-drinks", 1.29,  "bottle", frooti12,   "Parle Agro"),
  d("drink-019", "Appy Fizz Apple Sparkling 600ml",   "desi-drinks", 1.99,  "bottle", maaza600,   "Parle Agro"),
  d("drink-020", "Slice Mango Drink 600ml",           "desi-drinks", 1.99,  "bottle", maaza600,   "PepsiCo"),
  d("drink-021", "Mango Falooda Drink 290ml",         "desi-drinks", 2.49,  "bottle", mango290,   "Indya"),
  d("drink-022", "Mango Panna Concentrate 750ml",     "desi-drinks", 5.99,  "bottle", mangoPanna, "Haldiram"),

  // ── COCONUT WATER ────────────────────────────────────────────────────────
  d("drink-023", "Vita Coco 100% Coconut Water 11.1oz", "coconut-water", 2.49, "bottle", vitaCoco,  "Vita Coco"),
  d("drink-024", "Coco India Natural Coconut Water 250ml", "coconut-water", 1.99, "bottle", cocoIndia, "Coco India"),
  d("drink-025", "Zico Natural Coconut Water 14oz",   "coconut-water", 2.99,  "bottle", vitaCoco,  "Zico"),

  // ── JUICES & NECTARS ─────────────────────────────────────────────────────
  d("drink-026", "Tropicana Original Orange Juice 52oz", "juices", 4.99, "bottle", fanta,     "Tropicana"),
  d("drink-027", "Real Mango Juice 200ml",             "juices", 1.29, "bottle", maaza600,  "Real"),
  d("drink-028", "Real Guava Juice 200ml",             "juices", 1.29, "bottle", maaza600,  "Real"),
  d("drink-029", "Minute Maid Lemonade 12oz Can",      "juices", 1.29, "can",    sprite,    "Coca-Cola"),
  d("drink-030", "Apple Juice 64oz",                   "juices", 3.99, "bottle", fanta,     "Mott&apos;s"),

  // ── ENERGY DRINKS ────────────────────────────────────────────────────────
  d("drink-031", "Red Bull Energy Drink 8.4oz",        "energy-drinks", 2.99, "can", redBull, "Red Bull"),
  d("drink-032", "Red Bull Sugar Free 8.4oz",          "energy-drinks", 2.99, "can", redBull, "Red Bull"),
  d("drink-033", "Monster Energy Original 16oz",       "energy-drinks", 3.49, "can", redBull, "Monster"),

  // ── WATER ─────────────────────────────────────────────────────────────────
  d("drink-034", "Evian Natural Spring Water 1L",      "water", 2.49, "bottle", vitaCoco,  "Evian"),
  d("drink-035", "Smartwater 1L",                      "water", 2.49, "bottle", vitaCoco,  "Glaceau"),
  d("drink-036", "Perrier Sparkling Water 11.15oz",    "water", 1.99, "bottle", sprite,    "Perrier"),
];
