"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/session";
import { createAdminClient } from "@/lib/supabase";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    redirect("/admin/login?error=Invalid+username+or+password.");
  }

  const session = await getSession();
  session.isLoggedIn = true;
  await session.save();

  redirect("/admin/dashboard");
}

export async function createProductAction(formData: FormData) {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  const supabase = createAdminClient();

  const name = formData.get("name") as string;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const id = `admin-${slug}-${Date.now()}`;

  const row = {
    id,
    slug,
    name,
    namebn: (formData.get("namebn") as string) || null,
    category: formData.get("category") as string,
    subcategory: (formData.get("subcategory") as string) || null,
    price: Number(formData.get("price")),
    original_price: formData.get("originalPrice") ? Number(formData.get("originalPrice")) : null,
    unit: formData.get("unit") as string,
    badge: (formData.get("badge") as string) || null,
    description: (formData.get("description") as string) || "",
    image: formData.get("image") as string,
    featured: formData.get("featured") === "true",
    in_stock: true,
    brand: (formData.get("brand") as string) || null,
  };

  const { error } = await supabase.from("admin_products").insert(row);
  if (error) redirect(`/admin/products/new?error=${encodeURIComponent(error.message)}`);

  revalidatePath("/grocery");
  revalidatePath("/frozen-food");
  revalidatePath("/shop");
  revalidatePath("/fresh-meat-fish");

  redirect("/admin/products");
}

export async function updateProductAction(id: string, formData: FormData) {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  const supabase = createAdminClient();

  const isAdminProduct = id.startsWith("admin-");

  if (isAdminProduct) {
    const row = {
      name: formData.get("name") as string,
      namebn: (formData.get("namebn") as string) || null,
      category: formData.get("category") as string,
      subcategory: (formData.get("subcategory") as string) || null,
      price: Number(formData.get("price")),
      original_price: formData.get("originalPrice") ? Number(formData.get("originalPrice")) : null,
      unit: formData.get("unit") as string,
      badge: (formData.get("badge") as string) || null,
      description: (formData.get("description") as string) || "",
      image: formData.get("image") as string,
      featured: formData.get("featured") === "true",
      brand: (formData.get("brand") as string) || null,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase.from("admin_products").update(row).eq("id", id);
    if (error) redirect(`/admin/products/${id}?error=${encodeURIComponent(error.message)}`);
  } else {
    const row: Record<string, unknown> = { id, updated_at: new Date().toISOString() };
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const image = formData.get("image") as string;
    if (name) row.name = name;
    if (price) row.price = Number(price);
    if (image) row.image = image;

    const { error } = await supabase.from("product_overrides").upsert(row);
    if (error) redirect(`/admin/products/${id}?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/grocery");
  revalidatePath("/frozen-food");
  revalidatePath("/shop");
  revalidatePath("/fresh-meat-fish");

  redirect("/admin/products");
}

export async function toggleStockAction(id: string, inStock: boolean) {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  const supabase = createAdminClient();
  const isAdminProduct = id.startsWith("admin-");

  if (isAdminProduct) {
    await supabase.from("admin_products").update({ in_stock: inStock, updated_at: new Date().toISOString() }).eq("id", id);
  } else {
    await supabase.from("product_overrides").upsert({ id, in_stock: inStock, updated_at: new Date().toISOString() });
  }

  revalidatePath("/grocery");
  revalidatePath("/frozen-food");
  revalidatePath("/shop");
  revalidatePath("/fresh-meat-fish");
}

export async function deleteAdminProductAction(id: string) {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  if (!id.startsWith("admin-")) return;

  const supabase = createAdminClient();
  await supabase.from("admin_products").delete().eq("id", id);

  revalidatePath("/grocery");
  revalidatePath("/frozen-food");
  revalidatePath("/shop");
  revalidatePath("/fresh-meat-fish");

  redirect("/admin/products");
}
