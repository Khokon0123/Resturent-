"use client";

import { useRef } from "react";
import ImageUpload from "./ImageUpload";
import type { Product, ProductCategory, BadgeType } from "@/types";

const CATEGORIES: { value: ProductCategory; label: string }[] = [
  { value: "grocery", label: "Grocery" },
  { value: "frozen-food", label: "Frozen Food" },
  { value: "fresh-meat-fish", label: "Fresh Meat & Fish" },
  { value: "fresh-produce", label: "Fresh Produce" },
];

const BADGES: { value: BadgeType | ""; label: string }[] = [
  { value: "", label: "None" },
  { value: "NEW", label: "New" },
  { value: "HOT", label: "Hot" },
  { value: "SALE", label: "Sale" },
  { value: "HALAL", label: "Halal" },
  { value: "FRESH", label: "Fresh" },
];

const BRANDS = ["", "Deep", "Radhuni", "Shaan"];

interface ProductFormProps {
  action: (formData: FormData) => Promise<void>;
  product?: Partial<Product>;
  isEdit?: boolean;
}

export default function ProductForm({ action, product, isEdit }: ProductFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const inputClass =
    "w-full px-4 py-2.5 rounded border font-nunito text-sm outline-none focus:ring-1";
  const inputStyle = {
    borderColor: "var(--color-border, #E5E7EB)",
    color: "var(--color-text)",
    background: "var(--color-surface)",
  };
  const labelClass = "block font-nunito text-sm font-semibold mb-1.5";
  const labelStyle = { color: "var(--color-text)" };

  return (
    <form ref={formRef} action={action} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} style={labelStyle}>Product Name *</label>
          <input name="name" required defaultValue={product?.name} className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Bengali Name</label>
          <input name="namebn" defaultValue={product?.namebn} className={inputClass} style={inputStyle} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label className={labelClass} style={labelStyle}>Price (USD) *</label>
          <input name="price" type="number" step="0.01" min="0" required defaultValue={product?.price} className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Original Price</label>
          <input name="originalPrice" type="number" step="0.01" min="0" defaultValue={product?.originalPrice} className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Unit *</label>
          <input name="unit" required placeholder="e.g. 200g, 1 lb, each" defaultValue={product?.unit} className={inputClass} style={inputStyle} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label className={labelClass} style={labelStyle}>Category *</label>
          <select name="category" required defaultValue={product?.category ?? "grocery"} className={inputClass} style={inputStyle}>
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Subcategory</label>
          <input name="subcategory" placeholder="e.g. spices, masala" defaultValue={product?.subcategory} className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Brand</label>
          <select name="brand" defaultValue={product?.brand ?? ""} className={inputClass} style={inputStyle}>
            {BRANDS.map((b) => (
              <option key={b} value={b}>{b || "None (Own product)"}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} style={labelStyle}>Badge</label>
          <select name="badge" defaultValue={product?.badge ?? ""} className={inputClass} style={inputStyle}>
            {BADGES.map((b) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-3 pt-7">
          <label className="font-nunito text-sm font-semibold" style={{ color: "var(--color-text)" }}>
            Featured product?
          </label>
          <input type="hidden" name="featured" value="false" />
          <input type="checkbox" name="featured" value="true" defaultChecked={product?.featured} className="w-4 h-4" />
        </div>
      </div>

      <div>
        <label className={labelClass} style={labelStyle}>Description</label>
        <textarea name="description" rows={3} defaultValue={product?.description} className={`${inputClass} resize-none`} style={inputStyle} />
      </div>

      <div>
        <label className={labelClass} style={labelStyle}>Product Image *</label>
        <ImageUpload name="image" defaultValue={product?.image} />
      </div>

      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          className="px-8 py-3 rounded font-nunito font-bold text-sm text-white transition-colors"
          style={{ background: "var(--color-red)" }}
        >
          {isEdit ? "Save Changes" : "Create Product"}
        </button>
        <a
          href="/admin/products"
          className="px-8 py-3 rounded border font-nunito font-bold text-sm transition-colors hover:bg-gray-50"
          style={{ borderColor: "var(--color-border, #E5E7EB)", color: "var(--color-text)" }}
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
