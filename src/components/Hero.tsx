import { motion } from "framer-motion";
import React from "react";
import icons4 from "../../public/blackrock.png";
import icons5 from "../../public/prequin.png";
import icons6 from "../../public/HSBC.png";
import icons7 from "../../public/barings.svg";
import icons8 from "../../public/triat.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="w-full relative h-screen justify-between md:bg-fixed bg-[url('/bgmain.jpg')] bg-cover flex flex-col">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="h-20 " />
      <div className="flex px-4 md:px-16 relative flex-col gap-4 md:gap-6 w-full md:w-[90%]">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.7, ease: "easeInOut" }}
          className="text-white opacity-100 font-medium tracking-tight text-5xl md:text-7xl"
        >
          We Turn Portfolio Companies Into Digital Powerhouses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
          className="md:w-3/4 text-white md:text-base text-sm font-light"
        >
          Insight Edge Analytics is your embedded C-suite partner We're fluent
          in both marketing and finance, bridging the gap that others can't. Our
          expertise transforms marketing strategies into tangible revenue growth
          and EBITDA impact.
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
      <div className="w-full bg-slate-900 opacity-70 relative border-t flex justify-between items-center py-6 border-gray-600">
        <div className="md:flex hidden flex-row gap-6">
          <Marquee
            speed={20}
            delay={0}
            gradientColor="#0f172a"
            autoFill={false}
            pauseOnHover={true}
            gradient={true}
          >
            <Image alt="icon4" src={icons4} className="w-28 mx-4 h-auto" />
            <Image alt="icon5" src={icons5} className="w-20 mx-4 h-auto" />
            <Image alt="icon6" src={icons6} className="w-16 mx-4 h-auto" />
            <Image alt="icon1" src={icons7} className="w-20 mx-4 h-auto" />
            <Image alt="icon1" src={icons8} className="w-36 mx-4 h-auto" />
            <Image alt="icon4" src={icons4} className="w-28 mx-4 h-auto" />
            <Image alt="icon5" src={icons5} className="w-20 mx-4 h-auto" />
            <Image alt="icon6" src={icons6} className="w-16 mx-4 h-auto" />
            <Image alt="icon1" src={icons7} className="w-20 mx-4 h-auto" />
            <Image alt="icon1" src={icons8} className="w-36 mx-4 h-auto" />
            <Image alt="icon4" src={icons4} className="w-28 mx-4 h-auto" />
            <Image alt="icon5" src={icons5} className="w-20 mx-4 h-auto" />
            <Image alt="icon6" src={icons6} className="w-16 mx-4 h-auto" />
            <Image alt="icon1" src={icons7} className="w-20 mx-4 h-auto" />
            <Image alt="icon1" src={icons8} className="w-36 mx-4 h-auto" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
