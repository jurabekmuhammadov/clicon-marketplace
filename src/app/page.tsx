import BestDeals from "@/components/home/best-deals";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <div className="container mx-auto px-[10px]">
      <Hero />
      <BestDeals />
    </div>
  );
}
