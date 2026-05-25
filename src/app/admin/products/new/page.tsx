import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { createProductAction } from "@/actions/admin";
import ProductForm from "@/components/admin/ProductForm";

export default async function NewProductPage() {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-hind text-3xl font-bold mb-1" style={{ color: "var(--color-text)" }}>
          Add New Product
        </h1>
        <p className="font-nunito text-sm" style={{ color: "var(--color-muted)" }}>
          New product will appear on the live site within 60 seconds.
        </p>
      </div>

      <ProductForm action={createProductAction} />
    </div>
  );
}
