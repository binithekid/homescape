import React from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollPosition: any = useScrollPosition();

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }}
      className={classNames(
        "fixed md:block hidden top-0 left-0 w-full z-50 duration-300 transition-all",
        scrollPosition > 20
          ? "bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white"
          : "bg-transparent text-white"
      )}
    >
      <div className="flex px-16 py-8 justify-between h-14 items-center">
        <div className="flex flex-row items-center gap-2">
          <div className="h-5  w-5 rounded-full bg-yellow-300" />
          <p className="text-2xl">Homescape</p>
        </div>
        <div className="flex font-light flex-row gap-5">
          <p className="lg:block hidden">Home</p>
          <p>About</p>
          <p>Work</p>
          <p>Contact</p>
          <p className="lg:block hidden">Socials</p>
          <p>Offers</p>
        </div>
        <button className="flex flex-row border transition-all hover:opacity-70 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full items-center gap-2 border-gray-200 px-3 py-1">
          <div className="h-4  mt-[0.4px] w-4 rounded-full bg-yellow-300" />
          <p className="font-light">Call To Action</p>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
