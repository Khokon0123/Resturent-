import type { Metadata } from "next";
import AdminNav from "@/components/admin/AdminNav";

export const metadata: Metadata = {
  title: "Admin — Asia Bazaar",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-surface)" }}>
      <header
        className="flex items-center justify-between px-6 py-4"
        style={{ background: "var(--color-text)", color: "#fff" }}
      >
        <span className="font-hind text-lg font-bold tracking-wide">Asia Bazaar Admin</span>
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="font-nunito text-sm px-4 py-1.5 rounded border border-white/30 hover:bg-white/10 transition-colors"
          >
            Logout
          </button>
        </form>
      </header>
      <div className="flex" style={{ minHeight: "calc(100vh - 64px)" }}>
        <AdminNav />
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
