import BestDeals from "@/pages/home/best-deals";
import ShopWithCategories from "@/pages/home/categories";
import CompAccessories from "@/pages/home/comp-accessories";
import FeaturedProducts from "@/pages/home/featured";
import Hero from "@/pages/home/hero";
import LatestNews from "@/pages/home/latest-news";

export default function Home() {
  return (
    <div className="container mx-auto px-[10px]">
      <Hero />
      <BestDeals />
      <ShopWithCategories />
      <FeaturedProducts />
      <CompAccessories />
      <LatestNews />
    </div>
  );
}
