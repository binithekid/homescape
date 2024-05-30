import React from "react";
import Chair2 from "../../public/slider1.jpg";
import Chair1 from "../../public/slider2.jpg";
import Sofa from "../../public/slider3.jpg";
import Table from "../../public/slider4.jpg";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="pt-20 px-14 bg-gray-200">
      <h1 className="text-4xl w-[65%]">
        We strive to leave a positive impact on both our environment &
        communities we serve
      </h1>
      <div className="relative flex flex-col items-center py-20">
        <div className="overflow-hidden w-[90rem] h-[20rem]">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                className="min-w-[30rem] h-[20rem] p-2"
              >
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-row items-center justify-between w-full mt-4">
          <button
            onClick={prevSlide}
            className="bg-white p-3 rounded-full shadow-sm"
          >
            <HiOutlineArrowSmallLeft className="text-gray-800" />
          </button>
          <div className="flex flex-row gap-1">
            {images.map((_, index) => (
              <BsDot
                key={index}
                className={`text-2xl cursor-pointer ${
                  index === currentIndex ? "text-gray-800" : "text-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="bg-white p-3 rounded-full shadow-sm"
          >
            <HiOutlineArrowSmallRight className="text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
