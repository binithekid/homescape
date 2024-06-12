import React, { useEffect } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const scrollPosition: any = useScrollPosition();

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const router = useRouter();

  const isHomePage = router.pathname === "/";

  console.log(isHomePage);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }}
      className={classNames(
        "fixed md:block hidden top-0 left-0 w-full z-50 duration-300 transition-all",
        scrollPosition > 20
          ? "bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20"
          : "bg-transparent",
        isHomePage ? "text-white" : "text-gray-900"
      )}
    >
      <div className="flex px-16 py-8 justify-between h-14 items-center">
        <Link href="/">
          <div className="flex flex-row items-center gap-2">
            <div className="h-5  w-5 rounded-full bg-yellow-300" />
            <p className="text-2xl tracking-tight">Homescape</p>
          </div>
        </Link>
        <div className="flex tracking-tight flex-row gap-5">
          <Link href="/">
            <p className="lg:block hidden hover:opacity-80">Home</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <p>Work</p>
          <p>Contact</p>
        </div>
        <button
          className={`flex flex-row border transition-all shadow-xl hover:opacity-70 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full items-center gap-2 px-3 py-1 ${
            isHomePage ? "border-gray-200" : "border-gray-400"
          }`}
        >
          <div className="h-4  mt-[0.4px] w-4 rounded-full bg-yellow-300" />
          <p className="tracking-tight">Book a call</p>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
