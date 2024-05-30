import React from "react";
import Chair2 from "../../public/slider1.jpg";
import Chair1 from "../../public/slider2.jpg";
import Sofa from "../../public/slider3.jpg";
import Table from "../../public/slider4.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { BsDot } from "react-icons/bs";

const images = [Chair2, Sofa, Chair1, Table];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-200 py-20 px-4 md:px-14">
      <h1 className="text-3xl font-medium md:teext-4xl md:w-[65%]">
        We strive to leave a positive impact on both our environament &
        communities we serve
      </h1>
      <div className="relative flex flex-col items-center py-10 md:py-20">
        <div className="overflow-hidden w-[90rem] h-[20rem]">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {images.map((image, index) => (
              <motion.div className="p-2 min-w-[30rem] h-[20rem]" key={index}>
                <img
                  className="w-full h-full object-cover rounded"
                  src={image.src}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-row w-full justify-between mt-6">
          <button
            className="bg-white p-3 rounded-full shadow transition-all hover:opacity-70"
            onClick={prevSlide}
          >
            <HiOutlineArrowSmallLeft className="text-gray-800" />
          </button>
          <div className="flex flex-row ga-1">
            {images.map((_, index) => (
              <BsDot
                key={index}
                className={`cursor-pointer text-2xl ${
                  index === currentIndex ? "text-gray-800" : "text-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button
            className="bg-white p-3 rounded-full shadow transition-all hover:opacity-70"
            onClick={nextSlide}
          >
            <HiOutlineArrowSmallRight className="text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
