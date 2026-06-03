import type {
  Product,
  Category,
  Deal,
  Review,
  StoreHours,
  StoreInfo,
} from "@/types";
import { deepFoodsGroceryProducts, deepFoodsFrozenProducts } from "./deepFoodsProducts";
import { radhuniProducts } from "./radhuniProducts";
import { shaanGroceryProducts, shaanFrozenProducts } from "./shaanProducts";
import { drinksProducts } from "./drinksProducts";
import { freshMeatProducts } from "./freshMeatProducts";

export const storeInfo: StoreInfo = {
  name: "Asia Bazaar",
  phone: "+1-703-555-0192",
  address: "7864 Richmond Hwy",
  city: "Alexandria",
  state: "VA",
  zip: "22306",
  email: "info@asiabazaarak.com",
  mapsUrl: "https://maps.google.com/?q=7864+Richmond+Hwy+Alexandria+VA+22306",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.5!2d-77.1000!3d38.7300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s7864+Richmond+Hwy+Alexandria+VA!5e0!3m2!1sen!2sus!4v1680000000000",
  social: {
    facebook: "https://facebook.com/asiabazaarva",
    instagram: "https://instagram.com/asiabazaarva",
    whatsapp: "https://wa.me/17035550192",
  },
};

export const storeHours: StoreHours[] = [
  { day: "Monday", open: "9:00 AM", close: "9:00 PM" },
  { day: "Tuesday", open: "9:00 AM", close: "9:00 PM" },
  { day: "Wednesday", open: "9:00 AM", close: "9:00 PM" },
  { day: "Thursday", open: "9:00 AM", close: "9:00 PM" },
  { day: "Friday", open: "9:00 AM", close: "10:00 PM" },
  { day: "Saturday", open: "8:00 AM", close: "10:00 PM" },
  { day: "Sunday", open: "9:00 AM", close: "8:00 PM" },
];

export const categories: Category[] = [
  {
    id: "fresh-meat-fish",
    slug: "fresh-meat-fish",
    label: "Fresh Meat & Fish",
    description: "Daily fresh halal chicken, goat, beef & Bangladeshi fish",
    icon: "Fish",
    href: "/fresh-meat-fish",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    count: 18,
    color: "#DC2626",
  },
  {
    id: "grocery",
    slug: "grocery",
    label: "Grocery",
    description: "Rice, spices, lentils, oil & all your pantry essentials",
    icon: "ShoppingBasket",
    href: "/grocery",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    count: 45,
    color: "#F59E0B",
  },
  {
    id: "frozen-food",
    slug: "frozen-food",
    label: "Frozen Food",
    description: "Paratha, samosa, frozen fish & ready-to-cook items",
    icon: "Snowflake",
    href: "/frozen-food",
    image:
      "https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=600&q=80",
    count: 22,
    color: "#0891B2",
  },
  {
    id: "fresh-produce",
    slug: "fresh-produce",
    label: "Fresh Produce",
    description: "Vegetables, fruits & fresh herbs from local farms",
    icon: "Leaf",
    href: "/shop",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    count: 30,
    color: "#16A34A",
  },
  {
    id: "appliances",
    slug: "appliances",
    label: "Appliances",
    description: "Rice cookers, blenders & kitchen tools",
    icon: "Plug",
    href: "/shop",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    count: 12,
    color: "#7C3AED",
  },
  {
    id: "religious",
    slug: "religious",
    label: "Religious & More",
    description: "Prayer mats, incense, holy books & desi clothing",
    icon: "Star",
    href: "/shop",
    image:
      "https://images.unsplash.com/photo-1609183480405-5ba85f5a0148?w=600&q=80",
    count: 20,
    color: "#D97706",
  },
  {
    id: "drinks",
    slug: "drinks",
    label: "Drinks",
    description: "Coca-Cola, Sprite, Pepsi, Rooh Afza, Maaza, Frooti & more",
    icon: "GlassWater",
    href: "/drinks",
    image:
      "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=600&q=80",
    count: 36,
    color: "#0891B2",
  },
];

export const products: Product[] = [
  // Fresh Meat & Fish
  {
    id: "1",
    slug: "hilsha-12-15",
    name: "Hilsha 12/15",
    namebn: "ইলিশ ১২/১৫",
    category: "fresh-meat-fish",
    subcategory: "fish",
    price: 12.99,
    unit: "per lb",
    badge: "FRESH",
    description:
      "Premium Hilsha (Ilish) fish — the king of Bengali cuisine. Fresh daily. 12 to 15 pieces per unit. Perfect for sorshe ilish, bhapa ilish & bhuna.",
    image: "https://ik.imagekit.io/3u72arpq9/product-image/3412_1722260179_Kolkata_Hilsa__600g_-_750g_.jpg",
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    slug: "rohu-fish-2-3kg",
    name: "Rohu 2/3 kg",
    namebn: "রুই মাছ ২/৩ কেজি",
    category: "fresh-meat-fish",
    subcategory: "fish",
    price: 2.99,
    unit: "per lb",
    badge: "FRESH",
    description:
      "Fresh Rohu (Rui) fish, 2 to 3 kg size. Great for curry, mustard gravy and kalia. Cleaned and cut on request.",
    image: "https://ik.imagekit.io/3u72arpq9/product-image/2917_1694760703_Rohu_image.jpg",
    featured: false,
    inStock: true,
  },
  {
    id: "3",
    slug: "katla-fish",
    name: "Katla",
    namebn: "কাতলা মাছ",
    category: "fresh-meat-fish",
    subcategory: "fish",
    price: 3.49,
    unit: "per lb",
    badge: "FRESH",
    description:
      "Fresh Katla fish — large, meaty South Asian carp. Ideal for mustard gravy, doi katla and festive cooking.",
    image: "https://ik.imagekit.io/3u72arpq9/product-image/2860_1756120053_Jumbo_Katla__Catla_Cut_Only_Gada_Pieces.jpg",
    featured: false,
    inStock: true,
  },
  {
    id: "4",
    slug: "zabiha-whole-chicken",
    name: "Zabiha Whole Chicken",
    namebn: "যবেহা মুরগি",
    category: "fresh-meat-fish",
    subcategory: "chicken",
    price: 2.99,
    unit: "per lb",
    badge: "HALAL",
    description: "Fresh zabiha halal whole chicken. Hand-slaughtered daily. Non pre-stunned, hormone & antibiotic free.",
    image: "https://onestophalal.com/cdn/shop/products/halal_chicken_whole_1.jpg?v=1578097153",
    featured: true,
    inStock: true,
  },
  {
    id: "5",
    slug: "baby-goat-whole-featured",
    name: "Baby Goat Whole",
    namebn: "ছাগলের মাংস",
    category: "fresh-meat-fish",
    subcategory: "goat",
    price: 11.99,
    unit: "per lb",
    badge: "HALAL",
    description:
      "Whole fresh halal baby goat. Perfect for Eid, Qurbani, biryani and rezala. Call ahead to order.",
    image: "https://onestophalal.com/cdn/shop/products/half_goat_1_d681ad20-bbc9-4945-b50c-c5027900c599.jpg",
    featured: true,
    inStock: true,
  },
  {
    id: "6",
    slug: "beef-mix",
    name: "Beef Mix",
    namebn: "গরুর মাংস মিক্স",
    category: "fresh-meat-fish",
    subcategory: "beef",
    price: 4.99,
    unit: "per lb",
    badge: "HALAL",
    description: "Fresh halal beef mix — bone-in pieces. Great for bhuna, bhaat and stew.",
    image: "https://taibahalalmeat.com/wp-content/uploads/2025/03/59494949-300x300.jpg",
    featured: false,
    inStock: true,
  },
  // Grocery
  {
    id: "7",
    slug: "basmati-rice",
    name: "Basmati Rice",
    category: "grocery",
    subcategory: "rice",
    price: 24.99,
    unit: "10kg bag",
    badge: "HOT",
    description:
      "Premium aged Basmati rice. Long grain, fragrant, perfect for biryani.",
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&q=80",
    featured: true,
    inStock: true,
  },
  {
    id: "8",
    slug: "kalijeera-rice",
    name: "Kalijeera Rice",
    namebn: "কালিজিরা চাল",
    category: "grocery",
    subcategory: "rice",
    price: 19.99,
    unit: "5kg bag",
    description: "Aromatic Bangladeshi Kalijeera rice. Naturally fragrant.",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
    featured: false,
    inStock: true,
  },
  {
    id: "9",
    slug: "shaan-masala-pack",
    name: "Shaan Masala Variety",
    category: "grocery",
    subcategory: "spices",
    price: 3.49,
    unit: "per pack",
    badge: "NEW",
    description:
      "Authentic Shaan masala blends — Biryani, Karahi, Nihari & more.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    featured: true,
    inStock: true,
  },
  {
    id: "10",
    slug: "mustard-oil",
    name: "Mustard Oil",
    namebn: "সরিষার তেল",
    category: "grocery",
    subcategory: "oil",
    price: 8.99,
    unit: "1L bottle",
    description: "Pure cold-pressed mustard oil. Essential for Bengali cooking.",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
    featured: false,
    inStock: true,
  },
  {
    id: "11",
    slug: "dal-masoor",
    name: "Masoor Dal (Red Lentils)",
    namebn: "মসুর ডাল",
    category: "grocery",
    subcategory: "lentils",
    price: 5.99,
    unit: "2kg bag",
    description:
      "Premium red lentils. Quick-cooking, nutritious & full of flavor.",
    image:
      "https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80",
    featured: false,
    inStock: true,
  },
  {
    id: "12",
    slug: "atta-flour",
    name: "Whole Wheat Atta",
    category: "grocery",
    subcategory: "flour",
    price: 12.99,
    unit: "5kg bag",
    description: "Fine-ground whole wheat atta for rotis and parathas.",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    featured: false,
    inStock: true,
  },
  // Frozen Food
  {
    id: "13",
    slug: "frozen-paratha",
    name: "Frozen Paratha (20pc)",
    namebn: "পরোটা",
    category: "frozen-food",
    subcategory: "bread",
    price: 7.99,
    unit: "pack of 20",
    badge: "HOT",
    description:
      "Flaky, layered frozen parathas. Ready in minutes on the tawa.",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    featured: true,
    inStock: true,
  },
  {
    id: "14",
    slug: "frozen-samosa",
    name: "Frozen Samosa (12pc)",
    category: "frozen-food",
    subcategory: "snacks",
    price: 6.49,
    unit: "pack of 12",
    badge: "HOT",
    description: "Crispy potato & pea samosas. Perfect party snack.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    featured: true,
    inStock: true,
  },
  {
    id: "15",
    slug: "frozen-fish",
    name: "Frozen Hilsa Fish",
    namebn: "হিমায়িত ইলিশ",
    category: "frozen-food",
    subcategory: "fish",
    price: 18.99,
    unit: "1kg pack",
    description:
      "Imported frozen Ilish fish. Flash-frozen to preserve flavor.",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    featured: false,
    inStock: true,
  },
  {
    id: "16",
    slug: "frozen-spring-rolls",
    name: "Frozen Spring Rolls (20pc)",
    category: "frozen-food",
    subcategory: "snacks",
    price: 8.49,
    unit: "pack of 20",
    description: "Vegetable spring rolls — crispy, golden, delicious.",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&q=80",
    featured: false,
    inStock: true,
  },
  // Fresh Produce
  {
    id: "17",
    slug: "green-chili",
    name: "Green Chili",
    namebn: "কাঁচা মরিচ",
    category: "fresh-produce",
    subcategory: "herbs",
    price: 1.99,
    unit: "per bunch",
    badge: "FRESH",
    description: "Fresh hot green chilies. Essential for desi cooking.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    featured: false,
    inStock: true,
  },
  {
    id: "18",
    slug: "cilantro",
    name: "Cilantro (Dhania)",
    namebn: "ধনেপাতা",
    category: "fresh-produce",
    subcategory: "herbs",
    price: 0.99,
    unit: "per bunch",
    badge: "FRESH",
    description: "Fresh cilantro / coriander leaves. Aromatic and bright.",
    image:
      "https://images.unsplash.com/photo-1587814213716-0068738d0fa4?w=600&q=80",
    featured: false,
    inStock: true,
  },
];

export const deals: Deal[] = [
  {
    id: "d1",
    title: "4 PCS Ilish Fish Combo",
    description:
      "Get 4 pieces of fresh Ilish (Hilsa) fish — the king of Bangladeshi fish. Limited quantity daily.",
    price: 25,
    originalPrice: 36,
    savings: 11,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    badge: "TODAY'S DEAL",
  },
  {
    id: "d2",
    title: "Weekend Meat Bundle",
    description:
      "2 lbs Halal Goat + 2 lbs Halal Chicken. Perfect for weekend biryani.",
    price: 45,
    originalPrice: 60,
    savings: 15,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    badge: "WEEKEND SPECIAL",
  },
  {
    id: "d3",
    title: "Grocery Starter Pack",
    description:
      "10kg Basmati Rice + 6 Shaan Masala packs + 2L Mustard Oil. Everything you need.",
    price: 49.99,
    originalPrice: 65,
    savings: 15,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    badge: "BEST VALUE",
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Fatema Khanom",
    rating: 5,
    date: "March 2025",
    body: "Best place for fresh fish and desi groceries. The Ilish fish is always fresh and the prices are very reasonable. Highly recommended for all Bangladeshis in the area!",
    verified: true,
  },
  {
    id: "r2",
    author: "Mohammad Rahman",
    rating: 5,
    date: "February 2025",
    body: "I drive 30 minutes just to shop here. The halal meat quality is exceptional — you can taste the difference. Friendly staff who understand what you need.",
    verified: true,
  },
  {
    id: "r3",
    author: "Nasrin Ahmed",
    rating: 5,
    date: "January 2025",
    body: "Finally a proper desi store in Alexandria! They have everything — Shaan masala, Kalijeera rice, frozen paratha and even prayer mats. One-stop shop!",
    verified: true,
  },
  {
    id: "r4",
    author: "Karim Uddin",
    rating: 4,
    date: "December 2024",
    body: "Great selection of Bangladeshi and Pakistani products. The goat biryani combo deal was worth every penny. Will definitely be back every weekend.",
    verified: true,
  },
];

export const announcementMessages = [
  "🚚 Same-Day Pickup Available",
  "🐟 Fresh Ilish Fish In Stock Daily",
  "🥩 Fresh Halal Meat Slaughtered Daily",
  "📞 Call to Order: " + storeInfo.phone,
  "📍 7864 Richmond Hwy, Alexandria VA",
  "🕌 Prayer Mats & Islamic Items In Stock",
];

// Merge brand products
(products as Product[]).push(
  ...deepFoodsGroceryProducts,
  ...deepFoodsFrozenProducts,
  ...radhuniProducts,
  ...shaanGroceryProducts,
  ...shaanFrozenProducts,
  ...drinksProducts,
  ...freshMeatProducts,
);

// Query utilities
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter((p) => p.brand === brand);
}
