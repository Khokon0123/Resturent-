export type ProductCategory =
  | "fresh-meat-fish"
  | "grocery"
  | "frozen-food"
  | "fresh-produce"
  | "appliances"
  | "clothing"
  | "jewelry"
  | "religious";

export type BadgeType = "FRESH" | "HALAL" | "SALE" | "NEW" | "HOT";

export interface Product {
  id: string;
  slug: string;
  name: string;
  namebn?: string;
  category: ProductCategory;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  unit: string;
  badge?: BadgeType;
  description: string;
  image: string;
  featured: boolean;
  inStock: boolean;
}

export interface Category {
  id: ProductCategory;
  slug: string;
  label: string;
  description: string;
  icon: string;
  href: string;
  image: string;
  count: number;
  color: string;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  image: string;
  badge: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  body: string;
  verified: boolean;
}

export interface StoreHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface StoreInfo {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  mapsUrl: string;
  mapsEmbed: string;
  social: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
}
