"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { toggleStockAction, deleteAdminProductAction } from "@/actions/admin";
import type { Product } from "@/types";

const BRAND_TABS = [
  { id: "all", label: "All" },
  { id: "Deep", label: "Deep" },
  { id: "Radhuni", label: "Radhuni" },
  { id: "Shaan", label: "Shaan" },
  { id: "mine", label: "My Products" },
];

interface ProductTableProps {
  products: Product[];
  initialBrand?: string;
}

export default function ProductTable({ products, initialBrand = "all" }: ProductTableProps) {
  const [activeBrand, setActiveBrand] = useState(initialBrand);
  const [search, setSearch] = useState("");
  const [, startTransition] = useTransition();

  const filtered = products.filter((p) => {
    const brandMatch =
      activeBrand === "all" ||
      (activeBrand === "mine" ? p.id.startsWith("admin-") : p.brand === activeBrand);
    const searchMatch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    return brandMatch && searchMatch;
  });

  function handleToggleStock(id: string, current: boolean) {
    startTransition(() => {
      toggleStockAction(id, !current);
    });
  }

  function handleDelete(id: string, name: string) {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    startTransition(() => {
      deleteAdminProductAction(id);
    });
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex gap-1 rounded border overflow-hidden" style={{ borderColor: "var(--color-border, #E5E7EB)" }}>
          {BRAND_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveBrand(tab.id)}
              className="px-4 py-2 font-nunito text-sm font-semibold transition-colors"
              style={{
                background: activeBrand === tab.id ? "var(--color-text)" : "#fff",
                color: activeBrand === tab.id ? "#fff" : "var(--color-muted)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded border font-nunito text-sm outline-none"
          style={{
            borderColor: "var(--color-border, #E5E7EB)",
            color: "var(--color-text)",
            background: "var(--color-surface)",
            minWidth: 220,
          }}
        />
        <span className="font-nunito text-sm" style={{ color: "var(--color-muted)" }}>
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="rounded border overflow-hidden" style={{ borderColor: "var(--color-border, #E5E7EB)" }}>
        <table className="w-full" style={{ borderCollapse: "collapse" }}>
          <thead style={{ background: "var(--color-surface)" }}>
            <tr>
              {["Image", "Name", "Brand", "Category", "Price", "In Stock", "Actions"].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left font-nunito text-xs font-bold uppercase tracking-wide"
                  style={{ color: "var(--color-muted)", borderBottom: "1px solid var(--color-border, #E5E7EB)" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr
                key={p.id}
                style={{
                  background: i % 2 === 0 ? "#fff" : "var(--color-surface)",
                  borderBottom: "1px solid var(--color-border, #E5E7EB)",
                }}
              >
                <td className="px-4 py-3">
                  <div className="relative w-10 h-10 rounded overflow-hidden" style={{ border: "1px solid var(--color-border, #E5E7EB)" }}>
                    <Image src={p.image} alt={p.name} fill className="object-contain" sizes="40px" />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="font-nunito text-sm font-medium" style={{ color: "var(--color-text)" }}>
                    {p.name}
                  </span>
                  {p.unit && (
                    <span className="ml-2 font-nunito text-xs" style={{ color: "var(--color-muted)" }}>
                      {p.unit}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 font-nunito text-sm" style={{ color: "var(--color-muted)" }}>
                  {p.brand ?? "—"}
                </td>
                <td className="px-4 py-3 font-nunito text-sm" style={{ color: "var(--color-muted)" }}>
                  {p.category}
                </td>
                <td className="px-4 py-3 font-nunito text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                  ${p.price.toFixed(2)}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleToggleStock(p.id, p.inStock)}
                    className="relative inline-flex items-center w-10 h-5 rounded-full transition-colors"
                    style={{ background: p.inStock ? "var(--color-halal)" : "#D1D5DB" }}
                    title={p.inStock ? "Click to mark out of stock" : "Click to mark in stock"}
                  >
                    <span
                      className="absolute w-4 h-4 bg-white rounded-full transition-transform shadow"
                      style={{ transform: p.inStock ? "translateX(22px)" : "translateX(2px)" }}
                    />
                  </button>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/products/${p.id}`}
                      className="font-nunito text-xs font-semibold"
                      style={{ color: "var(--color-red)" }}
                    >
                      Edit
                    </Link>
                    {p.id.startsWith("admin-") && (
                      <button
                        onClick={() => handleDelete(p.id, p.name)}
                        className="font-nunito text-xs font-semibold"
                        style={{ color: "var(--color-muted)" }}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-12 text-center font-nunito text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
