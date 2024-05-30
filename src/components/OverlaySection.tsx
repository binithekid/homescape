import React from "react";

const OverlaySection = () => {
  return (
    <div className="relative flex items-center  w-full h-[40rem] bg-[url('/table.jpg')] bg-cover">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative px-14 w-[85%] flex flex-col gap-4">
        <h1 className="text-white font-medium tracking-tight text-5xl">
          We believe in the power of design to transform spaces and enrich
          lives.
          <span className="text-gray-400">
            {" "}
            We craft bespoke pieces that resonate with our clients&apos;
            visions.
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
