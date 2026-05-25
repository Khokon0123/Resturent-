import { getSession } from "@/lib/session";
import { createAdminClient } from "@/lib/supabase";
import { products as hardcodedProducts } from "@/lib/data";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  const supabase = createAdminClient();
  const [overridesResult, adminResult] = await Promise.all([
    supabase.from("product_overrides").select("id, in_stock"),
    supabase.from("admin_products").select("id, in_stock"),
  ]);

  const totalHardcoded = hardcodedProducts.length;
  const totalAdmin = (adminResult.data ?? []).length;
  const totalProducts = totalHardcoded + totalAdmin;

  const overrideMap = new Map(
    (overridesResult.data ?? []).map((o) => [o.id, o.in_stock])
  );
  const outOfStockHardcoded = hardcodedProducts.filter((p) => {
    const ov = overrideMap.get(p.id);
    return ov === false || (ov === undefined && p.inStock === false);
  }).length;
  const outOfStockAdmin = (adminResult.data ?? []).filter((r) => !r.in_stock).length;
  const outOfStock = outOfStockHardcoded + outOfStockAdmin;

  const stats = [
    { label: "Total Products", value: totalProducts, href: "/admin/products" },
    { label: "Admin-Added Products", value: totalAdmin, href: "/admin/products?brand=mine" },
    { label: "Out of Stock", value: outOfStock, href: "/admin/products" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-hind text-3xl font-bold mb-1" style={{ color: "var(--color-text)" }}>
          Dashboard
        </h1>
        <p className="font-nunito text-sm" style={{ color: "var(--color-muted)" }}>
          Overview of your product catalog
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="block rounded border p-6 hover:shadow-md transition-shadow"
            style={{ background: "#fff", borderColor: "var(--color-border, #E5E7EB)" }}
          >
            <div
              className="font-hind text-4xl font-bold mb-1"
              style={{ color: "var(--color-red)" }}
            >
              {s.value}
            </div>
            <div className="font-nunito text-sm" style={{ color: "var(--color-muted)" }}>
              {s.label}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex gap-4">
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 px-6 py-3 rounded font-nunito font-bold text-sm text-white transition-colors"
          style={{ background: "var(--color-red)" }}
        >
          + Add New Product
        </Link>
        <Link
          href="/admin/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded border font-nunito font-bold text-sm transition-colors hover:bg-gray-50"
          style={{ borderColor: "var(--color-border, #E5E7EB)", color: "var(--color-text)" }}
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}
