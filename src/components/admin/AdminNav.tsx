"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/products/new", label: "Add New Product" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav
      className="w-52 shrink-0 border-r py-6"
      style={{
        background: "#fff",
        borderColor: "var(--color-border, #E5E7EB)",
      }}
    >
      <ul className="space-y-0.5 px-3">
        {links.map((link) => {
          const active = pathname === link.href || (link.href !== "/admin/dashboard" && pathname.startsWith(link.href) && link.href !== "/admin/products/new");
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-2.5 rounded font-nunito text-sm font-medium transition-colors"
                style={{
                  background: active ? "var(--color-surface)" : "transparent",
                  color: active ? "var(--color-red)" : "var(--color-text)",
                  fontWeight: active ? "700" : "500",
                }}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
