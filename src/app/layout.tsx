import type { Metadata } from "next";
import "./globals.css";
import { hindSiliguri, nunito } from "@/lib/fonts";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://asiabazaarak.com"),
  title: {
    default: "Asia Bazaar | Fresh Desi Grocery & Halal Meat – Alexandria, VA",
    template: "%s | Asia Bazaar",
  },
  description:
    "Shop fresh halal meat, Ilish fish, Basmati rice, Bangladeshi spices & frozen food at Asia Bazaar, 7864 Richmond Hwy, Alexandria, VA. Same-day pickup available.",
  keywords: [
    "halal meat Alexandria VA",
    "Bangladeshi grocery Virginia",
    "Ilish fish DC",
    "desi grocery store Richmond Highway",
    "halal butcher Alexandria",
    "South Asian grocery Alexandria",
    "Pakistan grocery Virginia",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Asia Bazaar",
    title: "Asia Bazaar | Fresh Desi Grocery & Halal Meat – Alexandria, VA",
    description:
      "Fresh halal meat, Ilish fish, Basmati rice, desi spices & frozen food. 7864 Richmond Hwy, Alexandria, VA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asia Bazaar | Desi Grocery & Halal Meat – Alexandria, VA",
    description: "Fresh halal meat, Ilish fish & desi groceries in Alexandria.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hindSiliguri.variable} ${nunito.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <AnnouncementBar />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
