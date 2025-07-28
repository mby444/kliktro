import HeroCarousel from "@/components/HeroCarousel";
import CategorySlider from "@/components/CategorySlider";
import BestSelling from "@/components/BestSelling";
import Banner from "@/components/Banner";
import ServiceHighlights from "@/components/ServiceHighlights";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <CategorySlider />
      <BestSelling />
      <Banner />
      <ServiceHighlights />
    </>
  );
}
