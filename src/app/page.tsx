import BestDeals from "@/pages/home/best-deals";
import ShopWithCategories from "@/pages/home/categories";
import FeaturedProducts from "@/pages/home/featured";
import Hero from "@/pages/home/hero";

export default function Home() {
  return (
    <div className="container mx-auto px-[10px]">
      <Hero />
      <BestDeals />
      <ShopWithCategories />
      <FeaturedProducts />
    </div>
  );
}
