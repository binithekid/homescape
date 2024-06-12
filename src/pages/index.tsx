import MidSection from "@/components/MidSection";
import ProductSection from "@/components/ProductSection";
import OverlaySection from "@/components/OverlaySection";
import Timeline from "@/components/Timeline";
import Slider from "@/components/Slider";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="scroll-smooth overflow-hidden">
      <Hero />
      <MidSection />
      <Timeline />
      <ProductSection />
      <OverlaySection />
      <Slider />
    </div>
  );
}
