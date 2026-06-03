"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingBasket } from "lucide-react";
import { storeInfo } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fresh Meat & Fish", href: "/fresh-meat-fish" },
  { label: "Grocery", href: "/grocery" },
  { label: "Frozen Food", href: "/frozen-food" },
  { label: "Drinks", href: "/drinks" },
  { label: "Offers 🔥", href: "/offers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: "#fff",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div className="container-inner">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl font-hind"
            style={{ color: "var(--color-red)" }}
            aria-label="Asia Bazaar Home"
          >
            <ShoppingBasket size={26} />
            <span>
              Asia <span style={{ color: "var(--color-text)" }}>Bazaar</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded text-sm font-medium font-nunito transition-colors duration-150 hover:bg-red-50"
                style={{ color: "var(--color-text)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${storeInfo.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded font-semibold text-sm font-nunito transition-all duration-200"
              style={{
                background: "var(--color-red)",
                color: "#fff",
              }}
              aria-label={`Call ${storeInfo.name}`}
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} style={{ color: "var(--color-text)" }} />
            ) : (
              <Menu size={24} style={{ color: "var(--color-text)" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 shadow-lg"
          style={{ background: "#fff", borderBottom: "1px solid var(--color-border)" }}
        >
          <nav className="container-inner py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded font-medium font-nunito transition-colors"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${storeInfo.phone}`}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded font-bold font-nunito text-center"
              style={{ background: "var(--color-red)", color: "#fff" }}
            >
              <Phone size={16} />
              Call Now: {storeInfo.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
