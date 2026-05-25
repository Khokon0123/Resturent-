import { products as hardcodedProducts } from "./data";
import { createAdminClient } from "./supabase";
import type { Product, ProductCategory, BadgeType } from "@/types";

export async function getProducts(): Promise<Product[]> {
  try {
    const supabase = createAdminClient();

    const [overridesResult, adminResult] = await Promise.all([
      supabase.from("product_overrides").select("*"),
      supabase.from("admin_products").select("*"),
    ]);

    // Build override map keyed by product id
    const overrideMap = new Map<string, Record<string, unknown>>(
      (overridesResult.data ?? []).map((o) => [o.id, o])
    );

    // Apply overrides to hardcoded products (only non-null fields win)
    const merged: Product[] = hardcodedProducts.map((p) => {
      const ov = overrideMap.get(p.id);
      if (!ov) return p;
      return {
        ...p,
        ...(ov.name != null ? { name: ov.name as string } : {}),
        ...(ov.price != null ? { price: Number(ov.price) } : {}),
        ...(ov.image != null ? { image: ov.image as string } : {}),
        ...(ov.in_stock != null ? { inStock: ov.in_stock as boolean } : {}),
      };
    });

    // Map Supabase snake_case rows to Product interface
    const adminProducts: Product[] = (adminResult.data ?? []).map((row) => ({
      id: row.id,
      slug: row.slug,
      name: row.name,
      namebn: row.namebn ?? undefined,
      category: row.category as ProductCategory,
      subcategory: row.subcategory ?? undefined,
      price: Number(row.price),
      originalPrice: row.original_price != null ? Number(row.original_price) : undefined,
      unit: row.unit,
      badge: row.badge as BadgeType | undefined,
      description: row.description,
      image: row.image,
      featured: row.featured,
      inStock: row.in_stock,
      brand: row.brand ?? undefined,
    }));

    return [...merged, ...adminProducts];
  } catch {
    // If Supabase is not configured, fall back to hardcoded products
    return hardcodedProducts;
  }
}
