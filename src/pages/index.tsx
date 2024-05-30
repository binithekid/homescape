import Image from "next/image";
import Navbar from "@/components/Navbar";
import { IoIosStar } from "react-icons/io";
import icons1 from "../../public/icons1.png";
import icons2 from "../../public/icons2.png";
import icons3 from "../../public/icons3.png";
import { motion } from "framer-motion";
import MidSection from "@/components/MidSection";
import ProductSection from "@/components/ProductSection";
import OverlaySection from "@/components/OverlaySection";
import Timeline from "@/components/Timeline";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNav";

export default function Home() {
  return (
    <main className="scroll-smooth overflow-hidden">
      <MobileNavBar />
      <Navbar />
      <div className="w-full px-4 md:px-16 MobileHero md:h-screen justify-between md:bg-fixed bg-[url('/bgmain.jpg')] bg-cover flex flex-col">
        <div className="h-20" />
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-2/3">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.7, ease: "easeInOut" }}
            className="text-white font-medium tracking-tight text-5xl md:text-7xl"
          >
            Transforming Houses into Homes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
            className="md:w-3/4 text-white md:text-base text-sm font-light"
          >
            We specialize in turning houses into homes. With our expert design
            team, we transform living spaces into personalized sanctuaries that
            reflect your unique style and aspirations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
            className="flex flex-row gap-4"
          >
            <button className="bg-yellow-300 text-sm transition-all hover:opacity-70 text-black py-2 px-4 rounded-full">
              Book a call
            </button>
            <button className="bg-gray-400 border transition-all hover:opacity-70 border-gray-300 text-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white py-2 px-4 rounded-full">
              Find out more
            </button>
          </motion.div>
        </div>
        <div className="w-full border-t flex justify-between items-center py-6 border-gray-600">
          <div className="flex flex-row gap-12">
            <div className="flex flex-col">
              <p className="md:text-sm text-xs font-light text-gray-400">
                Ryan Keny
              </p>
              <p className="text-gray-200 w-max md:text-base text-sm">
                Good communication
              </p>
              <div className="flex mt-2 flex-row gap-1 items-center">
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="md:text-sm text-xs font-light text-gray-400">
                Edwin Ibrhiam
              </p>
              <p className="text-gray-200 w-max md:text-base text-sm">
                A wonderful company
              </p>
              <div className="flex mt-2 flex-row gap-1 items-center">
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
              </div>
            </div>
            <div className="md:flex hidden flex-col">
              <p className="md:text-sm text-xs font-light text-gray-400">
                Adam Roller
              </p>
              <p className="text-gray-200 w-max md:text-base text-sm">
                Fast delivery and assembly
              </p>
              <div className="flex mt-2 flex-row gap-1 items-center">
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
                <IoIosStar className="text-gray-300 text-xs" />
              </div>
            </div>
          </div>
          <div className="md:flex hidden flex-row gap-6">
            <Image alt="icon1" src={icons1} className="w-16 h-auto" />
            <Image alt="icon2" src={icons2} className="w-16 h-auto" />
            <Image alt="icon3" src={icons3} className="w-16 h-auto" />
          </div>
        </div>
      </div>
      <MidSection />
      <ProductSection />
      <OverlaySection />
      <Timeline />
      <Slider />
      <Footer />
    </main>
  );
}
