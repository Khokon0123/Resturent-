import type { Product } from "@/types";

function f(
  id: string,
  name: string,
  subcategory: string,
  price: number,
  unit: string,
  image: string,
  brand: string,
  category: "grocery" | "frozen-food" = "frozen-food",
  badge?: "FRESH" | "HALAL" | "SALE" | "NEW" | "HOT"
): Product {
  const slug = `${brand.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  return {
    id,
    slug,
    name,
    category,
    subcategory,
    price,
    unit,
    badge,
    description: `${name} by ${brand}. Available fresh at Asia Bazaar, Alexandria VA.`,
    image,
    featured: false,
    inStock: true,
    brand,
  };
}

// Image shortcuts
const dawnParatha   = "https://dailyfreshgrocery.com/cdn/shop/products/dawn-bread-paratha-plain-2400gm-338643_850x.jpg?v=1603494638";
const mirchParatha  = "https://www.kesargrocery.com/images/P/ML21.JPG";
const ashokaSmosa   = "https://masalasupermarket.com/wp-content/uploads/2025/11/1278.png";
const mezbanKabab   = "https://mekkahmart.com/cdn/shop/products/aadqoyt4pp0sylp6e4s7_1024x1024_46fc5e7f-475c-43b4-b7a5-89d4747d3354.png?v=1612310062";
const colonelKabab  = "https://www.kesargrocery.com/images/P/chicken-chapli-kabab-NEW.webp";
const gajarHalwa    = "https://images.squarespace-cdn.com/content/v1/62df38bd768870226dced4a0/1735590096975-J6XUT4GR6AQRGB6I1JUE/Gajar+Halwa2.jpg?format=2500w";
const nanakGJ       = "https://images.squarespace-cdn.com/content/v1/62df38bd768870226dced4a0/1662832510308-M13A7PC9BA5GY181AXUJ/GulabjamunProp.jpg?format=2500w";
const nanakRM       = "https://static1.squarespace.com/static/62df38bd768870226dced4a0/62ecd969d0402a7f85047496/631cd0d063eb30325ae82773/1687883413545/rasmalai-413.png?format=2500w";
const sujataAtta    = "https://www.kesargrocery.com/images/P/sujata-chakki-aata.jpg";
const aashirvaadAtta = "https://www.kesargrocery.com/images/P/1773177579-aashirvaad-whole-wheat-atta.jpg";
const goldenTempAtta = "https://www.kesargrocery.com/images/P/golden-temple-durum.jpg";

export const mixedBrandProducts: Product[] = [

  // ── FROZEN BREADS / PARATHAS / ROTIS ──────────────────────────────────────
  f("mix-001", "Dawn Plain Paratha 5pc",               "bread", 3.99, "5pc",   dawnParatha,  "Dawn"),
  f("mix-002", "Mirch Masala Malaysian Plain Paratha 5pc", "bread", 4.49, "5pc", mirchParatha, "Mirch Masala"),
  f("mix-003", "Lachha Paratha",                       "bread", 3.99, "pack",  mirchParatha, "Dawat"),
  f("mix-004", "Whole Wheat Paratha",                  "bread", 3.79, "pack",  dawnParatha,  "Generic"),
  f("mix-005", "Bajra Roti",                           "bread", 4.99, "pack",  mirchParatha, "Bikano"),
  f("mix-006", "Gobhi Paratha",                        "bread", 4.99, "4pc",   mirchParatha, "Bikano"),
  f("mix-007", "Golden Harvest Wheat Rooti",           "bread", 4.29, "pack",  dawnParatha,  "Golden Harvest"),
  f("mix-008", "Sheermal Frozen",                      "bread", 4.99, "pack",  dawnParatha,  "Mezban"),
  f("mix-009", "Homestyle Paratha",                    "bread", 3.79, "pack",  dawnParatha,  "Generic"),

  // ── FROZEN PURI / KACHORI ─────────────────────────────────────────────────
  f("mix-010", "Dal Puri",                             "appetizers", 4.99, "pack",  ashokaSmosa, "Golden Harvest"),
  f("mix-011", "Deep Dal Puri",                        "appetizers", 4.99, "pack",  ashokaSmosa, "Deep"),

  // ── FROZEN APPETIZERS / SNACKS ────────────────────────────────────────────
  f("mix-012", "Punjabi Samosa",                       "appetizers", 6.99, "pack",  ashokaSmosa,  "Ashoka"),
  f("mix-013", "Vegetable Singara",                    "appetizers", 4.99, "pack",  ashokaSmosa,  "Generic"),
  f("mix-014", "Singara",                              "appetizers", 5.49, "pack",  ashokaSmosa,  "Mezban"),
  f("mix-015", "Chicken Samosa 10pc",                  "appetizers", 6.99, "10pc",  mezbanKabab,  "Mezban", "frozen-food", "HALAL"),
  f("mix-016", "Spring Roll",                          "appetizers", 4.99, "pack",  ashokaSmosa,  "Golden Harvest"),

  // ── FROZEN KEBABS & MEATS ────────────────────────────────────────────────
  f("mix-017", "Beef Seekh Kabab",                     "kebabs", 8.99,  "pack", colonelKabab, "Colonel Kababz",  "frozen-food", "HALAL"),
  f("mix-018", "Lamb Seekh Kabab",                     "kebabs", 9.99,  "pack", colonelKabab, "Colonel Kababz",  "frozen-food", "HALAL"),
  f("mix-019", "Chicken Chapli Kabab 10pc",            "kebabs", 8.99,  "10pc", colonelKabab, "Colonel Kababz",  "frozen-food", "HALAL"),
  f("mix-020", "Chicken Reshmi Kabab",                 "kebabs", 7.99,  "pack", mezbanKabab,  "Mezban",          "frozen-food", "HALAL"),
  f("mix-021", "Chicken Seekh Kabab 8pc",              "kebabs", 7.99,  "8pc",  mezbanKabab,  "Mezban",          "frozen-food", "HALAL"),
  f("mix-022", "Wild Chicken Seekh Kabab Family Pack", "kebabs", 14.99, "pack", mezbanKabab,  "Mezban",          "frozen-food", "HALAL"),
  f("mix-023", "Chicken Seekh Kabab",                  "kebabs", 7.99,  "pack", mezbanKabab,  "Badshah",         "frozen-food", "HALAL"),
  f("mix-024", "Chicken Shami Kabab",                  "kebabs", 7.99,  "pack", mezbanKabab,  "Al-Safa",         "frozen-food", "HALAL"),
  f("mix-025", "Cheese Seekh Kebab",                   "kebabs", 6.99,  "pack", mezbanKabab,  "Generic"),
  f("mix-026", "Tandoori Chicken Roll",                "kebabs", 7.99,  "pack", mezbanKabab,  "Kaiser",          "frozen-food", "HALAL"),
  f("mix-027", "Chicken Kabab Spring Roll",            "kebabs", 6.99,  "pack", mezbanKabab,  "Kaiser",          "frozen-food", "HALAL"),

  // ── FROZEN READY FOODS & SWEETS ──────────────────────────────────────────
  f("mix-028", "Carrot Halwa",                         "frozen-sweets", 7.99,  "pack",  gajarHalwa,  "Mezban"),
  f("mix-029", "Halwa Puri Tarkari",                   "frozen-sweets", 8.99,  "pack",  gajarHalwa,  "Eatco"),
  f("mix-030", "Chicken Nuggets",                      "appetizers",    6.99,  "pack",  mezbanKabab, "Deep",   "frozen-food", "HALAL"),
  f("mix-031", "Gulab Jamun",                          "frozen-sweets", 7.99,  "pack",  nanakGJ,     "Anand"),
  f("mix-032", "Chaler Roti (Rice Bread)",             "bread",         4.99,  "pack",  dawnParatha, "Dawat"),
  f("mix-033", "Mango Rasmalai",                       "frozen-sweets", 8.99,  "pack",  nanakRM,     "Nanak"),

  // ── ATTA / FLOUR ──────────────────────────────────────────────────────────
  f("mix-034", "Sher Durum Atta Desi Style 10lb",      "flour", 14.99, "10lb", goldenTempAtta, "Sher",         "grocery"),
  f("mix-035", "Sujata Atta with Multi Grains 10lb",   "flour", 14.99, "10lb", sujataAtta,     "Sujata",       "grocery"),
  f("mix-036", "Deep Multigrain Atta 9-Grain 4lb",     "flour", 12.99, "4lb",  sujataAtta,     "Deep",         "grocery"),
  f("mix-037", "Royal Chakki Atta 10lb",               "flour", 14.99, "10lb", goldenTempAtta, "Royal",        "grocery"),
  f("mix-038", "Swarna Chakki Fresh Atta 10lb",        "flour", 13.99, "10lb", sujataAtta,     "Swarna",       "grocery"),
  f("mix-039", "Sujata Chakki Atta 10lb",              "flour", 12.99, "10lb", sujataAtta,     "Sujata",       "grocery"),
  f("mix-040", "Aashirvaad Whole Wheat Atta 10lb",     "flour", 16.99, "10lb", aashirvaadAtta, "Aashirvaad",   "grocery"),
  f("mix-041", "Golden Temple Fine Durum Atta 20lb",   "flour", 19.99, "20lb", goldenTempAtta, "Golden Temple","grocery"),
  f("mix-042", "Golden Temple Atta 20lb",              "flour", 17.99, "20lb", goldenTempAtta, "Golden Temple","grocery"),
  f("mix-043", "Sujata Gold Atta 10lb",                "flour", 14.99, "10lb", sujataAtta,     "Sujata",       "grocery"),
  f("mix-044", "Teer Atta 10lb",                       "flour", 12.99, "10lb", sujataAtta,     "Teer",         "grocery"),
];
