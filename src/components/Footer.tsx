import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col pt-20 md:pt-[7rem] px-4 md:px-14 w-full bg-stone-800">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="md:text-4xl text-2xl text-white ">
            Join Our Design Insider List
          </h1>
          <p className="text-gray-200 md:text-base text-sm font-thin">
            Join our community and receive the latest in interior design
            inspiration, tips, and trends straight to your inbox.
          </p>
        </div>
        <div className="flex gap-5 mt-6 w-2/3 md:w-1/3 flex-col">
          <input
            placeholder="Sign up to our newsletter"
            className="py-2 bg-transparent border px-2 text-sm text-gray-300 border-gray-300 rounded"
          />
          <button className="bg-yellow-300 w-max text-sm transition-all hover:opacity-70 text-black py-2 px-4 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      <div className="mt-20 border-t hidden md:flex flex-row justify-between w-full border-gray-500 py-20">
        <div className="flex flex-row gap-2">
          <div className="h-5 w-5 mt-[0.3rem] rounded-full bg-yellow-300" />
          <p className="text-2xl text-white">Homescape</p>
        </div>
        <div className=" flex gap-20 pr-2 flex-row">
          <div className="flex flex-col gap-3">
            <p className="text-white text-sm">Homescape</p>
            <p className="text-gray-400 text-sm">Home</p>
            <p className="text-gray-400 text-sm">About</p>
            <p className="text-gray-400 text-sm">Products</p>
            <p className="text-gray-400 text-sm">Catalogue</p>
            <p className="text-gray-400 text-sm">Contact</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-sm">Contact us</p>
            <p className="text-gray-400 text-sm">Homescape</p>
            <p className="text-gray-400 text-sm">
              23 Titchfield Road, London SW8 8UY
            </p>
            <p className="text-gray-400 text-sm">0208 12405326</p>
            <p className="text-gray-400 text-sm">info@homescape.com</p>
          </div>
        </div>
      </div>

      <div className="py-14 border-t md:mt-0 mt-20 flex flex-col md:gap-0 gap-4 md:flex-row justify-between w-full border-gray-500">
        <div className="flex flex-row gap-2">
          <p className="text-gray-400 text-sm">
            © 2024 Homescape | All Rights Reserved
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <FaFacebook className="text-white text-xl" />
          <FaInstagram className="text-white text-xl" />
          <FaLinkedin className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
