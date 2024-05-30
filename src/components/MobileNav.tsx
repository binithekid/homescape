import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const MobileNavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const ref: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSidebar]);

  return (
    <>
      <div className="md:hidden flex shadow z-50 w-full bg-white flex-col">
        <div className="pt-2 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full flex py-2 items-center justify-between"
          >
            <Link href="/">
              <div className="flex -mt-3 flex-row items-center gap-2">
                <div className="md:h-5 md:w-5 w-4 h-4 rounded-full bg-yellow-300" />
                <p className="md:text-2xl text-xl">Homescape</p>
              </div>
            </Link>
            <div ref={ref}>
              <button
                onClick={() => setShowSidebar(true)}
                className="text-black"
              >
                <RxHamburgerMenu className="md:text-2xl text-xl" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default MobileNavBar;
