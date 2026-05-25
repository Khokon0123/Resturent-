import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { getProducts } from "@/lib/getProducts";
import ProductTable from "@/components/admin/ProductTable";
import Link from "next/link";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { brand?: string };
}) {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  const products = await getProducts();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-hind text-3xl font-bold mb-1" style={{ color: "var(--color-text)" }}>
            Products
          </h1>
          <p className="font-nunito text-sm" style={{ color: "var(--color-muted)" }}>
            {products.length} total products in catalog
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="px-6 py-3 rounded font-nunito font-bold text-sm text-white transition-colors"
          style={{ background: "var(--color-red)" }}
        >
          + Add New Product
        </Link>
      </div>

      <ProductTable products={products} initialBrand={searchParams.brand ?? "all"} />
    </div>
  );
}
