import React from "react";
import MasonryGrid from "@/components/MasonryGrid";
import { motion } from "framer-motion";
import Table from "../../public/qualitycheck.jpg";
import Solar from "../../public/aboutImg.webp";
import Image from "next/image";
import Link from "next/link";

const about = () => {
  return (
    <div className="scroll-smooth overflow-hidden">
      <div className="w-full md:pt-10 md:pb-20 px-4 md:px-16 justify-between md:bg-fixed bg-[url('/aboutBg.webp')] bg-cover flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.7, ease: "easeInOut" }}
          className="flex flex-col md:flex-row gap-5 md:gap-10 mt-20 md:pt-[7rem]"
        >
          <h1 className="text-gray-800 font-medium md:w-1/2 tracking-tight text-4xl md:text-5xl">
            {" "}
            We make Interior Design simple and efficient
          </h1>
          <p className="md:w-1/2">
            Welcome to Mersol - your partner for solar panel installations. We
            are passionate about sustainable energy and offer tailored solutions
            for a greener future. Choose us for a smooth and safe solar
            installation.
          </p>
        </motion.div>
        <MasonryGrid />
      </div>
      <div className="w-full px-4 py-20 md:px-16 bg-white flex gap-10">
        <div className="w-1/2 hidden md:flex">
          <Image src={Table} alt="Table" className="rounded-lg" />
        </div>
        <div className="flex flex-col md:w-1/2 w-full gap-10 justify-between">
          <h1 className="text-gray-800 font-medium tracking-tight text-3xl md:text-4xl">
            Your partner for Interior Design installations
          </h1>
          <div className="flex flex-col text-gray-800 gap-4">
            <p>
              As your partner, we strive to provide not only high-quality solar
              panels and installation work, but also a seamless experience from
              start to finish. We take care of everything from the initial
              consultation and design phase to installation and any maintenance
              service. You can rely on us to deliver sustainable and reliable
              solar energy solutions that provide long-term benefits for both
              your wallet and our planet.
            </p>
            <p>
              Our commitment to customer satisfaction extends beyond the
              installation itself. We aim to be your long-term solar partner and
              are always available to answer questions, advise and support you
              throughout your journey towards transforming your energy supply.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex flex-col">
              <p className="text-sm text-gray-500 font-light">Founded</p>
              <p className="text-5xl tracking-tight text-gray-800">2022</p>
            </div>{" "}
            <div className="flex flex-col">
              <p className="text-sm text-gray-500 font-light">Team Members</p>
              <p className="text-5xl tracking-tight text-gray-800">31</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-500 font-light">
                Satisfied Customers
              </p>
              <p className="text-5xl tracking-tight text-gray-800">700+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-20 md:px-16 bg-stone-200 flex flex-col md:flex-row gap-10">
        <div className="flex flex-col md:w-1/2 w-full gap-10 justify-between">
          <h1 className="text-gray-800 font-medium tracking-tight text-3xl md:text-4xl">
            Interior Design solutions for a greener tomorrow
          </h1>
          <div className="flex flex-col text-gray-800 gap-4">
            <p>
              As your partner, we strive to provide not only high-quality solar
              panels and installation work, but also a seamless experience from
              start to finish. We take care of everything from the initial
              consultation and design phase to installation and any maintenance
              service. You can rely on us to deliver sustainable and reliable
              solar energy solutions that provide long-term benefits for both
              your wallet and our planet.
            </p>
            <p>
              Our commitment to customer satisfaction extends beyond the
              installation itself. We aim to be your long-term solar partner and
              are always available to answer questions, advise and support you
              throughout your journey towards transforming your energy supply.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl tracking-tight text-gray-800">
              Sustainability
            </p>
            <p className="text-sm text-gray-500 font-light">
              Sustainable solar energy for a green lifestyle
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:flex">
          <Image src={Solar} alt="Table" className="rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col px-4 md:px-14 py-10 md:py-20 bg-white md:flex-row gap-4 md:gap-10">
        <h1 className="text-gray-800 w-full md:w-1/2 font-medium tracking-tight text-3xl md:text-4xl">
          Join the Homescape Team
        </h1>

        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <p className="text-gray-800">
            We don't just offer a workplace, but an opportunity to be part of
            something bigger. With us, you get the chance to grow both
            professionally and personally while contributing to shaping the
            energy landscape of the future. We believe in investing in our
            people and create an environment where ideas flow and achievements
            are recognized.
          </p>
          <Link href="/work">
            <button className="flex flex-row border text-sm border-gray-400 shadow hover:opacity-70 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full items-center gap-2 px-3 py-2 w-max">
              Available Positions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default about;
