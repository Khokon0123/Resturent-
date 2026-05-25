import { getSession } from "@/lib/session";
import { redirect, notFound } from "next/navigation";
import { getProducts } from "@/lib/getProducts";
import { updateProductAction } from "@/actions/admin";
import ProductForm from "@/components/admin/ProductForm";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  const products = await getProducts();
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  const isHardcoded = !product.id.startsWith("admin-");

  async function handleUpdate(formData: FormData) {
    "use server";
    await updateProductAction(params.id, formData);
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-hind text-3xl font-bold mb-1" style={{ color: "var(--color-text)" }}>
          Edit Product
        </h1>
        <p className="font-nunito text-sm" style={{ color: "var(--color-muted)" }}>
          {product.name}
          {isHardcoded && (
            <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-nunito" style={{ background: "var(--color-surface-2)", color: "var(--color-text)" }}>
              Hardcoded product — only name, price, and image can be changed
            </span>
          )}
        </p>
      </div>

      <ProductForm
        action={handleUpdate}
        product={product}
        isEdit
      />
    </div>
  );
}
