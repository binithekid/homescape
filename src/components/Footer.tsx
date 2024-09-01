import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col pt-10 md:pt-[7rem] px-4 md:px-14 w-full bg-stone-800">
      <div className="flex justify-between flex-col md:flex-row pb-20">
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="md:text-4xl text-2xl text-white tracking-tight">
            Join Our Insider List
          </h1>
          <p className="text-gray-200 md:text-base text-sm font-thin">
            Join our community and receive the latest news, inspiration, tips,
            and trends straight to your inbox.
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

      <div className="md:py-14 py-6 border-t md:mt-0 mt-20 flex flex-col md:gap-0 gap-4 md:flex-row justify-between w-full border-gray-500">
        <div className="flex flex-row gap-2">
          <p className="text-gray-400 text-sm">
            © 2024 InsightEdge Analytics | All Rights Reserved
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
