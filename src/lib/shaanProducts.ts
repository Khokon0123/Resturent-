import type { Product } from "@/types";

const img = (path: string) => `https://www.shanfoods.com/wp-content/uploads/${path}`;

function s(
  id: string,
  name: string,
  subcategory: string,
  price: number,
  unit: string,
  image: string,
  category: "grocery" | "frozen-food" = "grocery",
  badge?: "FRESH" | "HALAL" | "SALE" | "NEW" | "HOT"
): Product {
  const slug = `shaan-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  return {
    id,
    slug,
    name,
    category,
    subcategory,
    price,
    unit,
    badge,
    description: `Shaan ${name}. Authentic Pakistani & South Asian flavors trusted by millions worldwide.`,
    image,
    featured: false,
    inStock: true,
    brand: "Shaan",
  };
}

export const shaanGroceryProducts: Product[] = [
  // ── PLAIN SPICES ─────────────────────────────────────────────────────────
  s("shaan-001", "Shaan Coriander Powder", "spices", 2.99, "box", img("2016/11/coriander-new-24.png")),
  s("shaan-002", "Shaan Turmeric Powder", "spices", 2.99, "box", img("2016/11/turmeric-new-24.png")),
  s("shaan-003", "Shaan Red Chilli Powder", "spices", 2.99, "box", img("2016/11/red-chilli-new-24.png")),
  s("shaan-004", "Shaan Black Pepper Powder", "spices", 3.49, "box", img("2016/11/black-pepper-new-24.png")),
  s("shaan-005", "Shaan Fenugreek Leaves", "spices", 2.79, "box", img("2016/11/fenugreek-leaves-2.png")),
  s("shaan-006", "Shaan Zafrani Garam Masala", "spices", 3.49, "box", img("2016/11/garam-masala-new-24.png")),
  s("shaan-007", "Shaan Curry Powder", "spices", 2.99, "box", img("2016/10/Curry-Powder-2.png")),
  s("shaan-008", "Shaan Himalayan Pink Salt", "spices", 3.99, "pack", img("2016/12/himalayan-pink-salt.png")),

  // ── MASALA MIXES — Curry ──────────────────────────────────────────────────
  s("shaan-009", "Shaan Paya Masala", "masala", 1.89, "pack", img("2016/10/paya-masala-1.png")),
  s("shaan-010", "Shaan Nihari Masala", "masala", 1.89, "pack", img("2016/10/nihari-3.png")),
  s("shaan-011", "Shaan Kunna Masala", "masala", 1.89, "pack", img("2016/10/kunna.png")),
  s("shaan-012", "Shaan Karahi Masala", "masala", 1.89, "pack", img("2016/11/karahi-2.png")),
  s("shaan-013", "Shaan Meat Masala", "masala", 1.89, "pack", img("2016/11/meat-masala-4.png")),
  s("shaan-014", "Shaan Korma Masala", "masala", 1.89, "pack", img("2016/10/korma-1.png")),
  s("shaan-015", "Shaan Murgh Cholay Masala", "masala", 1.89, "pack", img("2016/11/murgh-cholay-4.png")),
  s("shaan-016", "Shaan Kofta Masala", "masala", 1.89, "pack", img("2016/10/kofta-3.png")),
  s("shaan-017", "Shaan Chicken Masala", "masala", 1.89, "pack", img("2016/10/chicken-masala-3.png")),
  s("shaan-018", "Shaan Achar Gosht Masala", "masala", 1.89, "pack", img("2016/10/achar-gosht-2.png")),

  // ── MASALA MIXES — Rice ───────────────────────────────────────────────────
  s("shaan-019", "Shaan Biryani Masala", "masala", 1.99, "pack", img("2016/10/biryani-6.png")),
  s("shaan-020", "Shaan Pilau Biryani Masala", "masala", 1.99, "pack", img("2016/11/Pilau-Biryani-4.png")),
  s("shaan-021", "Shaan Bombay Biryani Masala", "masala", 1.99, "pack", img("2016/10/bombay-biryani-4.png")),
  s("shaan-022", "Shaan Memoni Biryani Masala", "masala", 2.29, "pack", img("2016/11/memoni-mutton-biryani-2.png")),
  s("shaan-023", "Shaan Karachi Beef Biryani Masala", "masala", 2.29, "pack", img("2021/04/karachi-beef-biryani-3.png")),
  s("shaan-024", "Shaan Fish Biryani Masala", "masala", 1.99, "pack", img("2016/10/fish-biryani-1.png")),
  s("shaan-025", "Shaan Sindhi Biryani Masala", "masala", 1.99, "pack", img("2021/04/sindhi-biryani.png")),

  // ── MASALA MIXES — Stir Fried ─────────────────────────────────────────────
  s("shaan-026", "Shaan Chicken Ginger Masala", "masala", 1.89, "pack", img("2016/10/chicken-ginger-1.png")),
  s("shaan-027", "Shaan Chicken White Karahi Masala", "masala", 1.89, "pack", img("2016/11/chicken-white-karahi-4.png")),
  s("shaan-028", "Shaan Chicken White Korma Masala", "masala", 1.89, "pack", img("2016/10/chicken-white-korma-3.png")),
  s("shaan-029", "Shaan Chicken Jalfrezi Masala", "masala", 1.89, "pack", img("2016/10/chicken-jalfrezi-1.png")),
  s("shaan-030", "Shaan Chicken Handi Masala", "masala", 1.89, "pack", img("2016/11/chicken-handi-5.png")),
  s("shaan-031", "Shaan Butter Chicken Masala", "masala", 1.89, "pack", img("2016/10/butter-chicken-1.png")),

  // ── MASALA MIXES — Fried ──────────────────────────────────────────────────
  s("shaan-032", "Shaan Fried Chop Masala", "masala", 1.89, "pack", img("2016/11/fried-chop.png")),
  s("shaan-033", "Shaan Chapli Kabab Masala", "masala", 1.89, "pack", img("2016/10/chapli-kabab-3.png")),
  s("shaan-034", "Shaan Dahi Bara Mix", "masala", 1.99, "pack", img("2016/11/dahi-bara-mix-8.png")),
  s("shaan-035", "Shaan Shami Kabab Masala", "masala", 1.89, "pack", img("2016/10/shami-kabab-2.png")),
  s("shaan-036", "Shaan Lahori Charga Masala", "masala", 1.89, "pack", img("2016/10/lahori-chargha-1.png")),
  s("shaan-037", "Shaan Chicken Broast Masala", "masala", 1.89, "pack", img("2016/10/chicken-broast-2.png")),
  s("shaan-038", "Shaan Pakora Mix", "masala", 1.89, "pack", img("2016/10/pakora-bhaji-mix-1.png")),

  // ── MASALA MIXES — BBQ ───────────────────────────────────────────────────
  s("shaan-039", "Shaan Tandoori Masala", "masala", 1.89, "pack", img("2016/10/tandoori-masala-1.png")),
  s("shaan-040", "Shaan Chicken Tikka Masala", "masala", 1.89, "pack", img("2016/10/Chicken-Tikka-2.png")),
  s("shaan-041", "Shaan Tikka Boti Masala", "masala", 1.89, "pack", img("2016/10/tikka-2.png")),
  s("shaan-042", "Shaan Seekh Kabab Masala", "masala", 1.89, "pack", img("2016/10/seekh-kabab-2.png")),
  s("shaan-043", "Shaan Tikka Seekh Kabab Masala", "masala", 1.89, "pack", img("2016/10/tikka-seekh-kabab-1.png")),
  s("shaan-044", "Shaan Bihari Kabab Masala", "masala", 1.89, "pack", img("2016/11/bihari-kabab-5.png")),

  // ── MASALA MIXES — Vegetarian ────────────────────────────────────────────
  s("shaan-045", "Shaan Pav Bhaji Masala", "masala", 1.89, "pack", img("2016/10/pav-bhaji-2.png")),
  s("shaan-046", "Shaan Daal Masala", "masala", 1.89, "pack", img("2016/11/daal-masala-2.png")),
  s("shaan-047", "Shaan Vegetable Masala", "masala", 1.89, "pack", img("2021/03/Vegetable-Masala-1.png")),

  // ── MASALA MIXES — Haleem ────────────────────────────────────────────────
  s("shaan-048", "Shaan Easy Cook Haleem Mix", "masala", 3.49, "pack", img("2016/11/easy-cook-haleem-mix-3.png")),
  s("shaan-049", "Shaan Shahi Haleem Mix", "masala", 3.49, "pack", img("2016/11/shahi-haleem-mix-4.png")),
  s("shaan-050", "Shaan Haleem Masala", "masala", 1.89, "pack", img("2016/11/haleem-3.png")),

  // ── MASALA MIXES — Arabic ────────────────────────────────────────────────
  s("shaan-051", "Shaan Mandhi Masala", "masala", 2.29, "pack", img("2016/11/mandhi-2.png")),
  s("shaan-052", "Shaan Shish Touk Masala", "masala", 2.29, "pack", img("2016/11/Shish-Touk-1.png")),
  s("shaan-053", "Shaan Bukhari Rice Masala", "masala", 2.29, "pack", img("2016/11/bukhari-rice-2.png")),
  s("shaan-054", "Shaan Kabsa Rice Masala", "masala", 2.29, "pack", img("2016/11/kabsa-rice-2.png")),
  s("shaan-055", "Shaan Beryani Rice Masala", "masala", 2.29, "pack", img("2016/11/beryani-2.png")),
  s("shaan-056", "Shaan Kabuli Rice Masala", "masala", 2.29, "pack", img("2016/11/kabuli-2.png")),

  // ── MASALA MIXES — South Indian ──────────────────────────────────────────
  s("shaan-057", "Shaan Sambar Masala", "masala", 1.89, "pack", img("2021/03/Sambar-Masala.png")),
  s("shaan-058", "Shaan South Indian Chicken Masala", "masala", 1.89, "pack", img("2021/03/Chicken-Masala.png")),
  s("shaan-059", "Shaan South Indian Meat Masala", "masala", 1.89, "pack", img("2021/03/Meat-Masala.png")),
  s("shaan-060", "Shaan South Indian Vegetable Masala", "masala", 1.89, "pack", img("2021/03/Vegetable-Masala.png")),
  s("shaan-061", "Shaan Rasam Masala", "masala", 1.89, "pack", img("2021/03/Rasam-Masala.png")),
  s("shaan-062", "Shaan South Indian Fish Masala", "masala", 1.89, "pack", img("2021/03/Fish-Masala.png")),

  // ── MASALA MIXES — Fish ───────────────────────────────────────────────────
  s("shaan-063", "Shaan Lahori Fish Masala", "masala", 1.89, "pack", img("2016/10/Lahori-Fish.png")),
  s("shaan-064", "Shaan Fried Fish Masala", "masala", 1.89, "pack", img("2016/11/fried-fish-2.png")),

  // ── MASALA MIXES — Oriental ───────────────────────────────────────────────
  s("shaan-065", "Shaan Sweet & Sour Mix", "masala", 1.99, "pack", img("2016/11/sweet-sour.png")),
  s("shaan-066", "Shaan Chinese Egg Fried Rice Mix", "masala", 1.99, "pack", img("2016/11/chinese-egg-fried-rice.png")),
  s("shaan-067", "Shaan Chicken Manchurian Mix", "masala", 1.99, "pack", img("2022/07/chinese-manchurian-thumb.png")),
  s("shaan-068", "Shaan Chicken Chowmein Mix", "masala", 1.99, "pack", img("2016/11/Chinese-Chowmein.png")),
  s("shaan-069", "Shaan Chinese Beef Mix", "masala", 1.99, "pack", img("2016/11/chinese-beef.png")),

  // ── MASALA MIXES — Chaat ─────────────────────────────────────────────────
  s("shaan-070", "Shaan Chaat Masala", "masala", 2.49, "pack", img("2016/11/chaat-masala-12.png")),
  s("shaan-071", "Shaan Fruit Chaat Masala", "masala", 2.49, "pack", img("2016/11/fruit-chaat-4.png")),
  s("shaan-072", "Shaan Chana Chaat Masala", "masala", 2.49, "pack", img("2016/11/Chana-Chaat-4.png")),
  s("shaan-073", "Shaan Dahi Bara Chaat Masala", "masala", 2.49, "pack", img("2016/11/dahi-bara-chaat-2.png")),

  // ── COOKING SAUCES ────────────────────────────────────────────────────────
  s("shaan-074", "Shaan Karahi Boti Sauce", "cooking-sauces", 5.99, "jar", img("2021/02/Karahi-3.png")),
  s("shaan-075", "Shaan Nihari Sauce", "cooking-sauces", 5.99, "jar", img("2021/02/Nihari-3.png")),
  s("shaan-076", "Shaan Pilau Biryani Sauce", "cooking-sauces", 5.99, "jar", img("2021/02/Pilau-Biryani-3.png")),
  s("shaan-077", "Shaan Achar Gosht Sauce", "cooking-sauces", 5.99, "jar", img("2021/02/Achar-Gosht-3.png")),
  s("shaan-078", "Shaan Tandoori Sauce", "cooking-sauces", 5.99, "jar", img("2021/02/Tandoori-3.png")),
  s("shaan-079", "Shaan Butter Chicken Sauce", "cooking-sauces", 6.49, "jar", img("2021/02/Butter-chicken-4.png")),
  s("shaan-080", "Shaan Sindhi Biryani Sauce", "cooking-sauces", 5.99, "jar", img("2021/02/Sindhi-Biryani-3.png")),
  s("shaan-081", "Shaan Korma Sauce", "cooking-sauces", 5.99, "jar", img("2021/02/Korma-3.png")),
  s("shaan-082", "Shaan Biryani Sauce", "cooking-sauces", 5.99, "jar", img("2021/02/Biryani-3.png")),
  s("shaan-083", "Shaan Bombay Biryani Sauce", "cooking-sauces", 5.99, "jar", img("2021/02/Bombay-Biryani-3.png")),
  s("shaan-084", "Shaan Jalfrezi Sauce", "cooking-sauces", 5.99, "jar", img("2021/02/Jalfrezi-3.png")),

  // ── COOKING PASTE ─────────────────────────────────────────────────────────
  s("shaan-085", "Shaan Red Chili Paste", "cooking-paste", 3.99, "jar", img("2022/06/Red-Chili-paste.png")),
  s("shaan-086", "Shaan Garlic Paste", "cooking-paste", 3.49, "jar", img("2016/11/Garlic-Paste-1.png")),
  s("shaan-087", "Shaan Onion Paste", "cooking-paste", 3.49, "jar", img("2022/06/onion-paste.png")),
  s("shaan-088", "Shaan Ginger Garlic Paste", "cooking-paste", 3.99, "jar", img("2016/11/Ginger-Garlic-Paste-4.png")),
  s("shaan-089", "Shaan Ginger Paste", "cooking-paste", 3.49, "jar", img("2016/11/Ginger-paste-2.png")),
  s("shaan-090", "Shaan Papaya Paste", "cooking-paste", 3.49, "jar", img("2022/06/papaya-paste.png")),
  s("shaan-091", "Shaan Minced Garlic", "cooking-paste", 3.99, "jar", img("2022/06/minced-garlic-paste.png")),
  s("shaan-092", "Shaan Green Chilli Paste", "cooking-paste", 3.49, "jar", img("2022/06/green-chili-paste.png")),

  // ── PICKLES ───────────────────────────────────────────────────────────────
  s("shaan-093", "Shaan Garlic Pickle", "pickles", 4.49, "jar", img("2016/11/garlic-pickle-1.png")),
  s("shaan-094", "Shaan Carrot Pickle", "pickles", 4.49, "jar", img("2016/11/carrot-pickle.png")),
  s("shaan-095", "Shaan Chilli Pickle", "pickles", 4.49, "jar", img("2016/11/chilli-pickle.png")),
  s("shaan-096", "Shaan Hyderabadi Mixed Pickle", "pickles", 4.99, "jar", img("2016/11/hyderabadi-pickle.png")),
  s("shaan-097", "Shaan Mango Pickle", "pickles", 4.49, "jar", img("2022/04/Mango_Pickle.png")),
  s("shaan-098", "Shaan Mixed Pickle", "pickles", 4.49, "jar", img("2016/11/mixed-pickle-5.png")),

  // ── CONDIMENTS & CHUTNEYS ─────────────────────────────────────────────────
  s("shaan-099", "Shaan Tamarind Chutney", "condiments", 3.99, "jar", img("2016/11/tamarind-chutney-n-en.png")),
  s("shaan-100", "Shaan Mango Chutney", "condiments", 3.99, "jar", img("2016/11/mango-chutney-en.png")),
  s("shaan-101", "Shaan Dried Mango Chutney", "condiments", 3.99, "jar", img("2016/11/dried-mango-chutney-1.png")),
  s("shaan-102", "Shaan Tomato Chutney", "condiments", 3.99, "jar", img("2016/11/Tomatoi-Chutney.png")),
  s("shaan-103", "Shaan Garlic Relish", "condiments", 3.49, "jar", img("2016/11/garlic-chutney.png")),
  s("shaan-104", "Shaan Ginger Mango Chutney", "condiments", 3.99, "jar", img("2016/11/ginger-mango-relish.png")),
  s("shaan-105", "Shaan Green Chutney", "condiments", 3.49, "jar", img("2016/11/green-Chutney-en.png")),
  s("shaan-106", "Shaan Plum Chutney", "condiments", 3.99, "jar", img("2016/11/plum-chutney-new-en.png")),
  s("shaan-107", "Shaan Crispy Fried Onion", "condiments", 4.49, "pack", img("2021/04/fried_onion-1.png")),

  // ── COOKING & DESSERT MIXES ───────────────────────────────────────────────
  s("shaan-108", "Shaan Badam Kheer Mix", "cooking-mixes", 2.99, "pack", img("2016/12/badam-kheer-mix.png")),
  s("shaan-109", "Shaan Sheer Khurma Mix", "cooking-mixes", 2.99, "pack", img("2016/11/sheer-khurma-mix.png")),
  s("shaan-110", "Shaan Lauki Halwa Mix", "cooking-mixes", 2.99, "pack", img("2016/11/lauki-halwa-mix.png")),
  s("shaan-111", "Shaan Special Kheer Mix", "cooking-mixes", 2.49, "pack", img("2016/11/spacial-kheer-1.png")),
  s("shaan-112", "Shaan Gajar Halwa Mix", "cooking-mixes", 2.99, "pack", img("2016/11/gajar-halwa-4.png")),
  s("shaan-113", "Shaan Rasmalai Mix", "cooking-mixes", 3.49, "pack", img("2016/11/rasmalai-mix-2.png")),
  s("shaan-114", "Shaan Gulab Jaman Mix", "cooking-mixes", 2.49, "pack", img("2016/11/gulab-jaman-3.png")),

  // ── RICE ──────────────────────────────────────────────────────────────────
  s("shaan-115", "Shaan Sella Basmati Rice", "rice", 9.99, "bag", img("2021/04/sella-rice.png")),
  s("shaan-116", "Shaan Biryani Basmati Rice", "rice", 11.99, "bag", img("2021/04/biryani-rice-range.png")),
  s("shaan-117", "Shaan Daily Cooking Rice", "rice", 7.99, "bag", img("2021/04/daily-cooking-rice.png")),
  s("shaan-118", "Shaan Himalayan Basmati Rice", "rice", 13.99, "bag", img("2021/04/himalayan-rice.png")),

  // ── LENTILS ───────────────────────────────────────────────────────────────
  s("shaan-119", "Shaan Split Moong Dal", "lentils", 5.49, "bag", img("2021/04/split-dal-moong.png")),
  s("shaan-120", "Shaan Toor Dal", "lentils", 5.49, "bag", img("2021/04/toor-dal.png")),
  s("shaan-121", "Shaan Red Kidney Beans", "lentils", 5.99, "bag", img("2021/04/red-kidney-beans.png")),
  s("shaan-122", "Shaan Black Eye Beans", "lentils", 5.49, "bag", img("2021/04/black-eye-beans.png")),
  s("shaan-123", "Shaan Orid Dal", "lentils", 5.49, "bag", img("2021/04/orid-dal.png")),
  s("shaan-124", "Shaan Chick Peas", "lentils", 5.99, "bag", img("2021/04/chick-peas.png")),
  s("shaan-125", "Shaan Split Masoor Dal", "lentils", 5.49, "bag", img("2021/04/split-dal-masoor.png")),
  s("shaan-126", "Shaan Chick Peas Black", "lentils", 5.99, "bag", img("2021/04/chick-peas-tyson-black.png")),
  s("shaan-127", "Shaan Split Dal Chana", "lentils", 5.49, "bag", img("2021/04/split-dal-chana.png")),

  // ── INSTANT NOODLES ───────────────────────────────────────────────────────
  s("shaan-128", "Shoop Chicken Noodles", "noodles", 1.49, "pack", img("2021/06/chicken-us.png")),
  s("shaan-129", "Shoop Masala Noodles", "noodles", 1.49, "pack", img("2021/06/masala-us.png")),
  s("shaan-130", "Shoop Chatpatta Noodles", "noodles", 1.49, "pack", img("2021/06/chatpata-us.png")),
];

export const shaanFrozenProducts: Product[] = [
  // ── FROZEN — Non-Veg Entrees ──────────────────────────────────────────────
  s("shaan-f01", "Shaan Chicken Karahi", "frozen-non-veg", 7.99, "pack", img("2022/12/chicken-Karahi.png"), "frozen-food"),
  s("shaan-f02", "Shaan Chicken Haleem", "frozen-non-veg", 7.99, "pack", img("2022/12/chicken-Haleem.png"), "frozen-food"),
  s("shaan-f03", "Shaan Chicken Bombay Biryani", "frozen-non-veg", 8.49, "pack", img("2022/12/chicken-Biryani.png"), "frozen-food"),
  s("shaan-f04", "Shaan Chicken Nihari", "frozen-non-veg", 7.99, "pack", img("2022/12/chicken-Nihari.png"), "frozen-food"),
  s("shaan-f05", "Shaan Chicken Pilau Biryani", "frozen-non-veg", 8.49, "pack", img("2022/12/chicken-Pilau-Biryani.png"), "frozen-food"),
  s("shaan-f06", "Shaan Beef Seekh Kebab", "frozen-non-veg", 8.99, "pack", img("2022/12/beef-Seekh-Kebab.png"), "frozen-food"),
  s("shaan-f07", "Shaan Beef Shami Kebab", "frozen-non-veg", 8.99, "pack", img("2022/12/beef-Shami-Kebab.png"), "frozen-food"),
  s("shaan-f08", "Shaan Beef Haleem", "frozen-non-veg", 8.99, "pack", img("2022/12/beef-Haleem-2.png"), "frozen-food"),
  s("shaan-f09", "Shaan Chicken Tandoori", "frozen-non-veg", 7.99, "pack", img("2022/12/chicken-Tandoori.png"), "frozen-food"),
  s("shaan-f10", "Shaan Butter Chicken", "frozen-non-veg", 7.99, "pack", img("2022/12/butter-Chicken.png"), "frozen-food"),
  s("shaan-f11", "Shaan Chicken Korma", "frozen-non-veg", 7.99, "pack", img("2022/12/chicken-Korma.png"), "frozen-food"),
  s("shaan-f12", "Shaan Chicken Shami Kebab", "frozen-non-veg", 7.99, "pack", img("2022/12/chicken-Shami-Kebab.png"), "frozen-food"),
  s("shaan-f13", "Shaan Chicken Tikka Bites", "frozen-non-veg", 7.99, "pack", img("2022/12/Chicken-Tikka-Bites.png"), "frozen-food"),
  s("shaan-f14", "Shaan Beef Nihari", "frozen-non-veg", 8.99, "pack", img("2022/12/beef-Nihari-1.png"), "frozen-food"),
];
