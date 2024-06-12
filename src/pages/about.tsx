import React from "react";
import MasonryGrid from "@/components/MasonryGrid";
import { motion } from "framer-motion";

const about = () => {
  return (
    <div className="w-full px-4 md:px-16 justify-between md:bg-fixed bg-[url('/aboutBg.webp')] bg-cover flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.7, ease: "easeInOut" }}
        className="flex flex-col md:flex-row gap-5 md:gap-10 mt-20 md:pt-[7rem]"
      >
        <h1 className="text-gray-800 font-medium md:w-1/2 tracking-tight text-4xl md:text-5xl">
          {" "}
          We make solar energy simple and efficient
        </h1>
        <p className="md:w-1/2">
          Welcome to Mersol - your partner for solar panel installations. We are
          passionate about sustainable energy and offer tailored solutions for a
          greener future. Choose us for a smooth and safe solar installation.
        </p>
      </motion.div>
      <MasonryGrid />
    </div>
  );
};

export default about;
