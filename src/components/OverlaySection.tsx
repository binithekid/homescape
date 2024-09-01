import React from "react";

const OverlaySection = () => {
  return (
    <div className="relative flex items-center w-full md:py-0 py-[6rem] md:h-[40rem] bg-[url('/table.jpg')] bg-cover">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative px-4 md:px-14 md:w-[85%] flex flex-col gap-4">
        <h1 className="text-white font-medium tracking-tight text-3xl md:text-5xl">
          We don't just build reports, we deliver results.
          <span className="text-gray-400">
            {" "}
            Our data-driven analyses provide a clear roadmap for growth.
          </span>
        </h1>
        <button className="flex w-max flex-row border transition-all hover:opacity-70 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full items-center gap-2 border-gray-200 px-4 py-2">
          <p className="font-medium text-sm tracking-wide text-white">
            Learn More
          </p>
        </button>
      </div>
    </div>
  );
};

export default OverlaySection;
