import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import FeaturedDeal from "@/components/sections/FeaturedDeal";
import ShopByCategory from "@/components/sections/ShopByCategory";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LocationContact from "@/components/sections/LocationContact";
import CustomerReviews from "@/components/sections/CustomerReviews";

export const metadata: Metadata = {
  title: "Asia Bazaar | Fresh Desi Grocery & Halal Meat – Alexandria, VA",
  description:
    "Shop fresh halal meat, Ilish fish, Basmati rice, Bangladeshi spices & frozen food at Asia Bazaar, 7864 Richmond Hwy, Alexandria, VA. Same-day pickup available.",
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedDeal />
      <ShopByCategory />
      <FeaturedProducts />
      <WhyChooseUs />
      <LocationContact />
      <CustomerReviews />
    </>
  );
}
