import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Team from "../../public/team.webp";
import Image from "next/image";

const work = () => {
  const scrollDuration = 1000;

  const handleButtonClick = () => {
    const section = document.getElementById("target-section");
    if (section) {
      const targetPosition = section.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const scrollStep = (timestamp: number) => {
        const currentTime = timestamp - startTime;
        const scrollPosition =
          easeInOutQuad(currentTime / scrollDuration) * distance +
          startPosition;
        window.scrollTo(0, scrollPosition);
        if (currentTime < scrollDuration) {
          window.requestAnimationFrame(scrollStep);
        }
      };

      window.requestAnimationFrame(scrollStep);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const targetSection = document.getElementById("target-section");
      const navbar = document.getElementById("navbar");
      if (targetSection && navbar) {
        const topBorder = targetSection.getBoundingClientRect().top;
        topBorder >= 0
          ? navbar.classList.remove("fixed")
          : navbar.classList.add("fixed");
      }
    });
  }, []);

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
            Want to work with us?
          </h1>
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <p>
              Below you will find all available positions at Mersol. We are
              constantly looking to expand the competence of our company with
              talent in all different departments.
            </p>

            <button
              onClick={handleButtonClick}
              className="flex flex-row border text-sm border-gray-400 shadow hover:opacity-70 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full items-center gap-2 px-3 py-2 w-max"
            >
              Available Positions
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
          className="md:py-20 py-10"
        >
          <Image src={Team} alt="Team" className="rounded-lg" />
        </motion.div>
      </div>
      <div
        id="target-section"
        className="flex flex-col gap-6 py-20 px-4 md:px-14"
      >
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <h1 className="text-gray-800 font-medium md:w-1/2 tracking-tight text-2xl md:text-4xl">
            {" "}
            Available Positions
          </h1>
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <p>
              Take the chance and look for a job with good development
              opportunities, high competence among employees and a really nice
              working environment.
            </p>
          </div>
        </div>
        <div className="w-full py-3 px-3 bg-stone-200 rounded-sm">
          <p className="text-black text-sm">No Jobs Currently Available</p>
        </div>
      </div>
    </div>
  );
};

export default work;
