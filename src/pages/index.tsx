import MidSection from "@/components/MidSection";
import ProductSection from "@/components/ProductSection";
import OverlaySection from "@/components/OverlaySection";
import Timeline from "@/components/Timeline";
import Slider from "@/components/Slider";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Head from "next/head";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      {" "}
      <Head>
        <meta name="description" />
        <title>
          Innovative Solutions for Entrepreneurs | Insight Edge Analytics
        </title>
      </Head>
      <div className="scroll-smooth overflow-hidden">
        <Hero />
        {/* <MidSection /> */}
        <Timeline />
        <About />
        <ProductSection />
        <OverlaySection />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}
