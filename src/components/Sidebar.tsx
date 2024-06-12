import Link from "next/link";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { IoChevronForward } from "react-icons/io5";
import { Raleway } from "next/font/google";

const relaway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Sidebar = ({
  showSidebar,
  setShowSidebar,
}: {
  setShowSidebar: any;
  showSidebar: boolean;
}) => {
  return (
    <>
      <div
        className={` w-[60vw] lg:w-[20vw] bg-white top-0  shadow-xl text-white fixed h-full z-50 
            ${
              showSidebar ? "-translate-x-0" : "-translate-x-full"
            } ease-in-out duration-500`}
      >
        <button
          className="flex text-3xl text-black items-center cursor-pointer fixed pl-6 top-6 hover:cursor-pointer mb-20"
          onClick={() => setShowSidebar(false)}
        >
          <GrFormClose className="hover:cursor-pointer ease-in-out duration-300 hover:opacity-40" />
        </button>
        <div className="mb-8 text-sm flex flex-col uppercase mt-20">
          <Link className="nounderline" href={"/"}>
            <div
              className="p-3 pl-5 hover:text-[#1b9aa4] ease-in-out duration-300 cursor-pointer"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <div className="flex flex-row">
                <p
                  className="cursor-pointer nounderline font-medium
                 text-zinc-800 ml-3"
                >
                  Home
                </p>
                <IoChevronForward
                  color="black"
                  style={{
                    marginTop: "9px",
                    fontSize: "0.8rem",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                />
              </div>
            </div>
          </Link>
          <Link className="nounderline" href={"/about"}>
            <div
              className="p-3 pl-5 hover:text-[#1b9aa4] ease-in-out duration-300 cursor-pointer"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <div className="flex flex-row">
                <p className="align-middle cursor-pointer font-medium text-zinc-800 ml-3">
                  ABOUT
                </p>
                <IoChevronForward
                  color="black"
                  style={{
                    marginTop: "9px",
                    fontSize: "0.8rem",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                />
              </div>
            </div>
          </Link>
          <Link className="nounderline" href={"/work"}>
            <div
              className="p-3 pl-5 hover:text-[#1b9aa4] ease-in-out duration-300 cursor-pointer"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <div className="flex flex-row">
                <p className="cursor-pointer no-underline font-medium text-zinc-800 ml-3">
                  WORK
                </p>
                <IoChevronForward
                  color="black"
                  style={{
                    marginTop: "9px",
                    fontSize: "0.8rem",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                />
              </div>
            </div>
          </Link>

          <Link className="nounderline" href={"/contact"}>
            <div
              className="p-3 pl-5 hover:text-[#1b9aa4] ease-in-out duration-300 cursor-pointer"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <div className="flex flex-row">
                <p className="cursor-pointer font-medium text-zinc-800 ml-3">
                  CONTACT
                </p>
                <IoChevronForward
                  color="black"
                  style={{
                    marginTop: "9px",
                    fontSize: "0.8rem",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
