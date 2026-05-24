import type { Product } from "@/types";

const BASE = "https://www.sfbl.com.bd/uploaded_files/";
const img = (filename: string) => BASE + filename;

function r(
  id: string,
  name: string,
  subcategory: string,
  price: number,
  unit: string,
  image: string,
  category: "grocery" | "frozen-food" = "grocery",
  badge?: "FRESH" | "HALAL" | "SALE" | "NEW" | "HOT"
): Product {
  const slug = `radhuni-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  return {
    id,
    slug,
    name,
    category,
    subcategory,
    price,
    unit,
    badge,
    description: `Radhuni ${name}. Authentic Bangladeshi flavors, trusted by desi households worldwide.`,
    image,
    featured: false,
    inStock: true,
    brand: "Radhuni",
  };
}

export const radhuniProducts: Product[] = [
  // ── BASIC SPICES ─────────────────────────────────────────────────────────
  r("radhuni-001", "Radhuni Turmeric Powder", "spices", 2.49, "pack", img("300tn_thumb_turmeric(1).png")),
  r("radhuni-002", "Radhuni Chilli Powder", "spices", 2.49, "pack", img("300tn_thumb_Untitled design(1).png")),
  r("radhuni-003", "Radhuni Coriander Powder", "spices", 2.49, "pack", img("300tn_thumb_dhoniya gura.png")),
  r("radhuni-004", "Radhuni Cumin Powder", "spices", 2.99, "pack", img("300tn_thumb_cumin.png")),
  r("radhuni-005", "Radhuni Chilli Flakes", "spices", 2.49, "pack", img("300tn_thumb_Chili Flackse 04.png")),

  // ── MASALA MIXES ─────────────────────────────────────────────────────────
  r("radhuni-006", "Radhuni Meat Curry Masala", "masala", 1.99, "pack", img("300tn_thumb_Meat Curry (3).png")),
  r("radhuni-007", "Radhuni Chicken Masala", "masala", 1.99, "pack", img("300tn_thumb_Untitled design (1).png")),
  r("radhuni-008", "Radhuni Fish Curry Masala", "masala", 1.99, "pack", img("300tn_thumb_Fish Curry copy.jpg")),
  r("radhuni-009", "Radhuni Kabab Masala", "masala", 1.99, "pack", img("300tn_thumb_Kabab.PNG")),
  r("radhuni-010", "Radhuni Biryani Masala", "masala", 2.29, "pack", img("300tn_thumb_BIRIYANI.PNG")),
  r("radhuni-011", "Radhuni Borhani Masala", "masala", 1.99, "pack", img("300tn_thumb_Borhani.PNG")),
  r("radhuni-012", "Radhuni Beef Masala", "masala", 1.99, "pack", img("300tn_thumb_Beeef Curry Pouch 3D copy(1).jpg")),
  r("radhuni-013", "Radhuni Tehari Masala", "masala", 2.29, "pack", img("300tn_thumb_Tehari.PNG")),
  r("radhuni-014", "Radhuni Chatpati Masala", "masala", 1.99, "pack", img("300tn_thumb_Chotpoti.PNG")),
  r("radhuni-015", "Radhuni Garam Masala", "masala", 1.99, "pack", img("300tn_thumb_Garam-Masala-Pouch-New.png")),
  r("radhuni-016", "Radhuni Panchforan", "masala", 1.79, "pack", img("300tn_thumb_Untitled design (8).png")),
  r("radhuni-017", "Radhuni Roast Masala", "masala", 1.99, "pack", img("300tn_thumb_Roast Masala.PNG")),
  r("radhuni-018", "Radhuni Mejbani Beef Masala", "masala", 2.29, "pack", img("300tn_thumb_Mezbani.PNG")),
  r("radhuni-019", "Radhuni Hyderabadi Biryani Masala", "masala", 2.49, "pack", img("300tn_thumb_Hydra.PNG")),
  r("radhuni-020", "Radhuni Kachchi Biryani Masala", "masala", 2.49, "pack", img("300tn_thumb_Kachhi.PNG")),
  r("radhuni-021", "Radhuni Kala Bhuna Masala", "masala", 2.29, "pack", img("300tn_thumb_Kala Bhuna yo.PNG")),
  r("radhuni-022", "Radhuni Bar-B-Q Masala", "masala", 1.99, "pack", img("300tn_thumb_bbq(3).jpg")),
  r("radhuni-023", "Radhuni Korma Masala", "masala", 1.99, "pack", img("300tn_thumb_R Korma  Left(1).png")),
  r("radhuni-024", "Radhuni Chicken Tandoori Masala", "masala", 2.29, "pack", img("300tn_thumb_Tandoori (2).jpg")),
  r("radhuni-025", "Radhuni Shadmishali", "masala", 1.79, "pack", img("300tn_thumb_Radhuni Shadmishali(1).jpg")),
  r("radhuni-026", "Radhuni Fried Rice Seasoning Mix", "masala", 1.99, "pack", img("300tn_thumb_Radhuni Fried Rice Seasoning Mix(2).png")),
  r("radhuni-027", "Radhuni Fried Chicken Mix", "masala", 1.99, "pack", img("300tn_thumb_Fried Chicken Mix(1).jpg")),
  r("radhuni-028", "Radhuni Chaat Masala", "masala", 1.99, "pack", img("300tn_thumb_Chat Masala (Right).png")),
  r("radhuni-029", "Radhuni Khichuri Masala", "masala", 1.99, "pack", img("300tn_thumb_1(5).png")),
  r("radhuni-030", "Radhuni Shorshe Ilish Masala", "masala", 2.29, "pack", img("300tn_thumb_Sorisha_Ilish_Pack__1_-removebg-preview(1).png")),
  r("radhuni-031", "Radhuni Duck Curry Masala", "masala", 2.29, "pack", img("300tn_thumb_Duck Curry Masala(1).jpg")),

  // ── COOKING & DESSERT MIXES ───────────────────────────────────────────────
  r("radhuni-032", "Radhuni Haleem Mix", "cooking-mixes", 4.49, "pack", img("300tn_thumb_Haleem Mix.PNG")),
  r("radhuni-033", "Radhuni Khichuri Mix", "cooking-mixes", 3.99, "pack", img("300tn_thumb_Khichuri Mixed copy.jpg")),
  r("radhuni-034", "Radhuni Firni Mix", "cooking-mixes", 2.99, "pack", img("300tn_thumb_Firni Pack Right.jpg")),
  r("radhuni-035", "Radhuni Falooda Mix", "cooking-mixes", 3.49, "pack", img("300tn_thumb_Untitled design (6).png")),
  r("radhuni-036", "Radhuni Jorda Mix", "cooking-mixes", 2.99, "pack", img("300tn_thumb_Jorda Pack Right.jpg")),
  r("radhuni-037", "Radhuni Shemai (Vermicelli)", "cooking-mixes", 2.99, "pack", img("300tn_thumb_Shemai Hey.PNG")),
  r("radhuni-038", "Radhuni Kheer Mix", "cooking-mixes", 2.99, "pack", img("300tn_thumb_Kheer Pack Right.jpg")),
  r("radhuni-039", "Radhuni Custard Powder", "cooking-mixes", 2.49, "pack", img("300tn_thumb_Custard Powder Pack Right.png")),

  // ── CONDIMENTS & SAUCES ───────────────────────────────────────────────────
  r("radhuni-040", "Radhuni Kasundi (Mustard Sauce)", "condiments", 3.99, "jar", img("300tn_thumb_Kasundi New.png")),
  r("radhuni-041", "Radhuni White Vinegar", "condiments", 2.49, "bottle", img("300tn_thumb_Vinegar 280 ml(1).png")),
  r("radhuni-042", "Radhuni Soy Sauce", "condiments", 3.49, "bottle", img("300tn_thumb_Soya (3).jpeg")),

  // ── COOKING OILS ─────────────────────────────────────────────────────────
  r("radhuni-043", "Radhuni Pure Mustard Oil", "oil", 5.99, "bottle", img("300tn_thumb_1-Liter-02.jpg")),
  r("radhuni-044", "Radhuni Sunflower Oil", "oil", 6.99, "bottle", img("300tn_thumb_Untitled design (6).jpg")),

  // ── GHEE ─────────────────────────────────────────────────────────────────
  r("radhuni-045", "Radhuni Premium Ghee", "ghee", 12.99, "jar", img("300tn_thumb_Untitled design (5).jpg")),
];
