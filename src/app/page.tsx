"use client"
import BestDeals from "@/pages/home/best-deals";
import ShopWithCategories from "@/pages/home/categories";
import CompAccessories from "@/pages/home/comp-accessories";
import FeaturedProducts from "@/pages/home/featured";
import Hero from "@/pages/home/hero";
import LatestNews from "@/pages/home/latest-news";
import NewsLetter from "@/pages/home/newsletter";
import useHeaderStore from "@/store/header/headerStore";

export default function Home() {
  const { isBlackFridayOpen, isMenuOpen, setisBlackFridayOpen, setIsMenuOpen } = useHeaderStore();

  return (
    <div className={`${isBlackFridayOpen ? "mt-[173px] min-[400px]:mt-[209px] sm:mt-[213px] md:mt-[197px] lg:mt-[213px]" : "mt-[125px] min-[400px]:mt-[153px] min-[500px]:mt-[157px] md:mt-[141px]"}`}>
      <Hero />
      <div className="container mx-auto px-[10px]">
        <BestDeals />
      </div>
      <div className="container mx-auto px-[10px]">
        <ShopWithCategories />
      </div>
      <div className="container mx-auto px-[10px]">
        <FeaturedProducts />
      </div>
      <div className="container mx-auto px-[10px]">
        <CompAccessories />
      </div>
      <div className="bg-gray-100">
        <LatestNews />
      </div>
      <NewsLetter />
    </div>
  );
}
