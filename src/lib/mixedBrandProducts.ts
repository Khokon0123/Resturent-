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

// TEA
const waghBakri     = "https://www.kesargrocery.com/images/P/wagh-bakri-premium-250gm.jpg";
const waghBakriBags = "https://www.kesargrocery.com/images/P/wagh-bakri-masala-chai-100bags.jpg";
const tetleyBlack   = "https://www.kesargrocery.com/images/P/tetley-black-tea.jpg";
const tetleyMasala  = "https://www.kesargrocery.com/images/P/tetley-masala-chai.jpg";
const lipton        = "https://www.kesargrocery.com/images/P/lipton-yellow-label-450gm.jpg";
const redLabel      = "https://www.kesargrocery.com/images/P/brooke-bond-red-label-450gm.jpg";
const tapriTea      = "https://www.kesargrocery.com/images/P/tapri-family-mixture-tea.jpg";
const vitalTea      = "https://www.kesargrocery.com/images/P/vital-ctc-masala-tea.jpg";
const ispahaniTea   = "https://www.kesargrocery.com/images/P/ispahani-mirzapore-best-leaf-tea.jpg";
const alokozay      = "https://www.kesargrocery.com/images/P/alokozay-green-tea.jpg";
const quikTea       = "https://www.kesargrocery.com/images/P/quik-tea-masala.jpg";

// BISCUITS
const sooperImg     = "https://cosmocashcarry.com/wp-content/uploads/2023/07/peek-freans-sooper-biscuits-600x600.jpg";
const rioImg        = "https://cosmocashcarry.com/wp-content/uploads/2024/02/Peek-Freans-Rio-Strawberry-Biscuit-112g-600x600.jpg";
const cocomoImg     = "https://www.southasiancentral.com/wp-content/uploads/Bisconni-Cocomo-94g.webp";
const clickImg      = "https://www.hkarimbuksh.com/cdn/shop/products/Peek_20Freans_20Click_20Biscuits_20_Family_20Pack_20142g_1_487e6d01-38c4-411c-b23e-3c8834b81328_1024x.jpg?v=1629530910";
const chocolattoImg = "https://nazarjanssupermarket.com/cdn/shop/products/bisconni-chocolatto-biscuit-1x8-nazar-jan-s-supermarket.jpg?v=1715266415";
const goodDay       = "https://britannia-international.com/wp-content/uploads/2024/01/brit-GD-packaging-GCCNZAUSEU-super-saver-pack-8x72g-butter-smile_FOP.jpg";
const goodDayPista  = "https://britannia-international.com/wp-content/uploads/2024/01/brit-GD-packaging-GCCNZAUSEU-super-saver-pack-8x72g-pista-smile_FOP-1.jpg";
const bourbon       = "https://freshcentralgrocery.com/cdn/shop/products/biscuit-britannia-bourbon.jpg?v=1738861061";
const treatImg      = "https://mauryagrocery.com/cdn/shop/files/download_60_2c8b662a-eb3f-4ce9-8772-94518e26f0b5.jpg?v=1707272251";
const parleG        = "https://www.kesargrocery.com/images/P/Parle_G.jpg";
const cakeRuskImg   = "https://onestophalal.com/cdn/shop/products/kcb_cake_rusks_regular_1.jpg?v=1573184220";
const teaRuskKCB    = "https://www.southasiancentral.com/wp-content/uploads/KCB-Tea-Rusk-Round-200g-600x600.webp";
const specialRusk   = "https://onestophalal.com/cdn/shop/products/kcb_cake_rusks_special_1.jpg?v=1573184304";
const milkRusk      = "https://www.jfkgrocery.com/cdn/shop/files/BRITANNIA_TOASTEA_MILK_RUSK_c5f22da5-98a0-4525-af20-b628dc028342_1024x1024.jpg?v=1743436922";
const sujiRusk      = "https://grocerybasket.ca/cdn/shop/products/Suji-Rusk-Toastea-Britannia_1024x1024.png?v=1611817378";
const nankhataiImg  = "https://masalasupermarket.com/wp-content/uploads/2025/11/1278.png";
const khariImg      = "https://www.kesargrocery.com/images/T/deep-khari-200g.jpg";
const darpflicImg   = "https://www.kesargrocery.com/images/P/darpflik-butter-cookies.jpg";
const lexusImg      = "https://www.kesargrocery.com/images/P/lexus-cream-biscuits.jpg";

// DRY MILK
const nidoSmall     = "https://www.kesargrocery.com/images/P/nestle-nido-400gm.jpg";
const nidoLarge     = "https://www.kesargrocery.com/images/P/nestle-nido-1800gm.jpg";
const danoMilk      = "https://www.kesargrocery.com/images/P/dano-dry-whole-milk.jpg";

// NOODLES (extra)
const mrNoodles     = "https://www.kesargrocery.com/images/P/mr-noodles-chicken-cup.jpg";
const bakeParlor    = "https://www.kesargrocery.com/images/P/bake-parlor-noodles.jpg";
const cocolaNood    = "https://www.kesargrocery.com/images/P/cocola-noodles.jpg";

// BESAN
const meeraBesan    = "https://www.kesargrocery.com/images/P/meera-gram-flour-4lb.jpg";

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

  // ── GRAM FLOUR / BESAN ────────────────────────────────────────────────────
  f("mix-045", "Meera Gram Flour (Besan) 4lb",          "flour", 5.99, "4lb", meeraBesan,     "Meera",        "grocery"),

  // ── TEA & HOT DRINKS ──────────────────────────────────────────────────────
  f("mix-046", "Wagh Bakri Premium Loose Tea 250g",     "tea", 5.99, "250g",  waghBakri,    "Wagh Bakri",   "grocery", "HOT"),
  f("mix-047", "Wagh Bakri Masala Chai Tea Bags 100ct", "tea", 6.99, "100ct", waghBakriBags,"Wagh Bakri",   "grocery"),
  f("mix-048", "Tetley Black Tea 72 Bags",              "tea", 5.49, "72ct",  tetleyBlack,  "Tetley",       "grocery"),
  f("mix-049", "Tetley Masala Chai 72 Bags",            "tea", 5.99, "72ct",  tetleyMasala, "Tetley",       "grocery"),
  f("mix-050", "Lipton Yellow Label Tea 450g",          "tea", 8.99, "450g",  lipton,       "Lipton",       "grocery"),
  f("mix-051", "Brooke Bond Red Label Tea 450g",        "tea", 7.99, "450g",  redLabel,     "Brooke Bond",  "grocery", "HOT"),
  f("mix-052", "Brooke Bond Red Label Tea 1.8kg",       "tea", 24.99, "1.8kg", redLabel,    "Brooke Bond",  "grocery"),
  f("mix-053", "Tapri Family Mixture Tea",              "tea", 8.99, "pack",  tapriTea,     "Tapri",        "grocery"),
  f("mix-054", "Vital CTC Masala Tea 200g",             "tea", 5.99, "200g",  vitalTea,     "Vital",        "grocery"),
  f("mix-055", "Ispahani Mirzapore Best Leaf Tea 400g", "tea", 7.99, "400g",  ispahaniTea,  "Ispahani",     "grocery"),
  f("mix-056", "Alokozay Green Tea 100 Bags",           "tea", 4.99, "100ct", alokozay,     "Alokozay",     "grocery"),
  f("mix-057", "Quik Tea Masala",                       "tea", 4.99, "pack",  quikTea,      "Quik Tea",     "grocery"),

  // ── BISCUITS, RUSKS & COOKIES ─────────────────────────────────────────────
  f("mix-058", "Peek Freans Sooper Biscuits",           "biscuits", 2.99, "pack",  sooperImg,    "Peek Freans", "grocery"),
  f("mix-059", "Peek Freans Rio Biscuits",              "biscuits", 2.99, "pack",  rioImg,       "Peek Freans", "grocery"),
  f("mix-060", "Bisconni Cocomo Cream Biscuits",        "biscuits", 2.99, "pack",  cocomoImg,    "Bisconni",    "grocery"),
  f("mix-061", "Britannia Good Day Butter Cookies 600g","biscuits", 8.99, "600g",  goodDay,      "Britannia",   "grocery"),
  f("mix-062", "Britannia Good Day Pistachio Almond",   "biscuits", 4.99, "pack",  goodDayPista, "Britannia",   "grocery"),
  f("mix-063", "Britannia Bourbon Biscuits",            "biscuits", 2.49, "pack",  bourbon,      "Britannia",   "grocery"),
  f("mix-064", "Parle-G Original Glucose Biscuits 800g","biscuits", 4.99, "800g",  parleG,       "Parle",       "grocery"),
  f("mix-065", "KCB Cake Rusk 400g",                   "biscuits", 5.99, "400g",  cakeRuskImg,  "KCB",         "grocery"),
  f("mix-066", "Britannia ToasTea Milk Rusk",           "biscuits", 5.99, "pack",  milkRusk,     "Britannia",   "grocery"),
  f("mix-067", "Deep Nankhatai Cookies",                "biscuits", 3.99, "pack",  nankhataiImg, "Deep",        "grocery"),
  f("mix-068", "Deep Khari Twisted Original",           "biscuits", 3.49, "pack",  khariImg,     "Deep",        "grocery"),

  // ── DRY MILK & POWDER ─────────────────────────────────────────────────────
  f("mix-069", "Nestle NIDO Dry Whole Milk 400g",       "dry-milk", 8.99,  "400g",  nidoSmall, "Nestle",  "grocery"),
  f("mix-070", "Nestle NIDO Dry Whole Milk 1.8kg",      "dry-milk", 24.99, "1.8kg", nidoLarge, "Nestle",  "grocery"),
  f("mix-071", "DANO Dry Whole Milk 400g",              "dry-milk", 7.99,  "400g",  danoMilk,  "DANO",    "grocery"),

  // ── NOODLES (additional) ──────────────────────────────────────────────────
  f("mix-072", "Mr. Noodles Chicken Flavour Cup 60g",   "noodles", 1.49, "60g",   mrNoodles,  "Mr. Noodles", "grocery"),
  f("mix-073", "Bake Parlor Hot & Sour Noodles",        "noodles", 2.49, "pack",  bakeParlor, "Bake Parlor", "grocery"),
  f("mix-074", "Cocola Chicken Masala Noodles 4-pack",  "noodles", 3.99, "4pk",   cocolaNood, "Cocola",      "grocery"),

  // ── MORE BISCUITS ─────────────────────────────────────────────────────────
  f("mix-075", "Peek Freans Click Biscuits",            "biscuits", 2.99, "pack",  clickImg,     "Peek Freans", "grocery"),
  f("mix-076", "Bisconni Chocolatto Biscuits 58g",      "biscuits", 1.99, "58g",   chocolattoImg,"Bisconni",    "grocery"),
  f("mix-077", "Britannia Treat Cream Cookies",         "biscuits", 3.49, "pack",  treatImg,     "Britannia",   "grocery"),
  f("mix-078", "Darpflik Coconut Cookies",              "biscuits", 3.49, "pack",  darpflicImg,  "Darpflik",    "grocery"),
  f("mix-079", "Darpflik Butter Cookies",               "biscuits", 3.49, "pack",  darpflicImg,  "Darpflik",    "grocery"),
  f("mix-080", "Deep Cake Cookies",                     "biscuits", 3.99, "pack",  nankhataiImg, "Deep",        "grocery"),
  f("mix-081", "KCB Tea Rusk 200g",                     "biscuits", 4.99, "200g",  teaRuskKCB,   "KCB",         "grocery"),
  f("mix-082", "Britannia ToasTea Suji Rusk",           "biscuits", 5.99, "pack",  sujiRusk,     "Britannia",   "grocery"),
  f("mix-083", "KCB Special Cake Rusk",                 "biscuits", 6.49, "pack",  specialRusk,  "KCB",         "grocery"),
  f("mix-084", "KCB Premium Rusk",                      "biscuits", 5.99, "pack",  cakeRuskImg,  "KCB",         "grocery"),
  f("mix-085", "Lexus Cream Biscuits",                  "biscuits", 3.49, "pack",  lexusImg,     "Generic",     "grocery"),
  f("mix-086", "Nan Khatai Cookies",                    "biscuits", 3.99, "pack",  nankhataiImg, "Generic",     "grocery"),
  f("mix-087", "Bi Toast Ghee Toast",                   "biscuits", 3.99, "pack",  sooperImg,    "Bi Toast",    "grocery"),
  f("mix-088", "KCB Coconut Cake Rusk",                 "biscuits", 5.99, "pack",  cakeRuskImg,  "KCB",         "grocery"),
  f("mix-089", "Mirch Masala Crunchy Snacks",           "biscuits", 2.49, "pack",  mirchParatha, "Mirch Masala","grocery"),

  // ── LAZIZA MASALAS ────────────────────────────────────────────────────────
  f("mix-090", "Laziza Biryani Masala 100g",         "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizabiryani_1024x1024.jpg?v=1754517674",        "Laziza", "grocery"),
  f("mix-091", "Laziza Sindhi Biryani Masala 130g",  "masala",        2.99, "130g", "https://halalco.com/cdn/shop/files/Lazizabiryani_1024x1024.jpg?v=1754517674",        "Laziza", "grocery"),
  f("mix-092", "Laziza Delhi Pulao Biryani 100g",    "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizabiryani_1024x1024.jpg?v=1754517674",        "Laziza", "grocery"),
  f("mix-093", "Laziza Chicken Tikka Masala 100g",   "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizachickentikka_1024x1024.webp?v=1754517898",  "Laziza", "grocery"),
  f("mix-094", "Laziza Chicken Masala 100g",         "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizachickentikka_1024x1024.webp?v=1754517898",  "Laziza", "grocery"),
  f("mix-095", "Laziza Tikka Botti Masala 100g",     "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizachickentikka_1024x1024.webp?v=1754517898",  "Laziza", "grocery"),
  f("mix-096", "Laziza Tandoori Masala 100g",        "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizatandoori_1024x1024.webp?v=1754582018",      "Laziza", "grocery"),
  f("mix-097", "Laziza Lahori Chargha 90g",          "masala",        2.99, "90g",  "https://halalco.com/cdn/shop/files/Lazizatandoori_1024x1024.webp?v=1754582018",      "Laziza", "grocery"),
  f("mix-098", "Laziza Karahi & Fry Masala 100g",    "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazazikarachifryemat_1024x1024.jpg?v=1754517169", "Laziza", "grocery"),
  f("mix-099", "Laziza Achar Gosht 100g",            "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazazikarachifryemat_1024x1024.jpg?v=1754517169", "Laziza", "grocery"),
  f("mix-100", "Laziza Sabzi Bhujia Masala 100g",    "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazazikarachifryemat_1024x1024.jpg?v=1754517169", "Laziza", "grocery"),
  f("mix-101", "Laziza Fish Masala 100g",            "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazazikarachifryemat_1024x1024.jpg?v=1754517169", "Laziza", "grocery"),
  f("mix-102", "Laziza Stew Do-Piaza 80g",           "masala",        2.99, "80g",  "https://halalco.com/cdn/shop/files/Lazazikarachifryemat_1024x1024.jpg?v=1754517169", "Laziza", "grocery"),
  f("mix-103", "Laziza Qorma Masala 100g",           "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/LazizaQorma_1024x1024.jpg?v=1754582406",          "Laziza", "grocery"),
  f("mix-104", "Laziza Haleem Masala 100g",          "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/LazizaQorma_1024x1024.jpg?v=1754582406",          "Laziza", "grocery"),
  f("mix-105", "Laziza Paya Masala 100g",            "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/LazizaQorma_1024x1024.jpg?v=1754582406",          "Laziza", "grocery"),
  f("mix-106", "Laziza Seekh Kebab Masala 100g",     "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizaseekhkebab_1024x1024.jpg?v=1754581889",     "Laziza", "grocery"),
  f("mix-107", "Laziza Shami Kebab Masala 100g",     "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizaseekhkebab_1024x1024.jpg?v=1754581889",     "Laziza", "grocery"),
  f("mix-108", "Laziza Kofta Masala 130g",           "masala",        2.99, "130g", "https://halalco.com/cdn/shop/files/Lazizaseekhkebab_1024x1024.jpg?v=1754581889",     "Laziza", "grocery"),
  f("mix-109", "Laziza Kat-a-Kat Spice 90g",         "masala",        2.99, "90g",  "https://halalco.com/cdn/shop/files/Lazizaseekhkebab_1024x1024.jpg?v=1754581889",     "Laziza", "grocery"),
  f("mix-110", "Laziza Chana Masala 100g",           "masala",        2.99, "100g", "https://halalco.com/cdn/shop/files/Lazazikarachifryemat_1024x1024.jpg?v=1754517169", "Laziza", "grocery"),
  f("mix-111", "Laziza Chaat Masala 100g",           "condiments",    2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizachaat_1024x1024.jpg?v=1754514765",          "Laziza", "grocery"),
  f("mix-112", "Laziza Chutney & Raita Masala 100g", "condiments",    2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizachaat_1024x1024.jpg?v=1754514765",          "Laziza", "grocery"),
  f("mix-113", "Laziza Plum Chutney 275g",           "chutneys",      3.79, "275g", "https://halalco.com/cdn/shop/files/Lazizachaat_1024x1024.jpg?v=1754514765",          "Laziza", "grocery"),
  f("mix-114", "Laziza Broast Mix 125g",             "cooking-mixes", 2.99, "125g", "https://halalco.com/cdn/shop/files/Lazizabrost_1024x1024.webp?v=1754518424",         "Laziza", "grocery"),
  f("mix-115", "Laziza Behari Kebab Spice Mix 100g", "cooking-mixes", 2.99, "100g", "https://halalco.com/cdn/shop/files/Lazizaseekhkebab_1024x1024.jpg?v=1754581889",     "Laziza", "grocery"),
  f("mix-116", "Laziza Haleem Mix 375g",             "cooking-mixes", 3.29, "375g", "https://halalco.com/cdn/shop/files/LazizaHaleem375_1024x1024.jpg?v=1754514522",      "Laziza", "grocery"),
];
