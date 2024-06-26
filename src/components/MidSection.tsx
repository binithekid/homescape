import React from "react";
import Image from "next/image";
import Worker from "../../public/worker.jpg";

const MidSection = () => {
  return (
    <div className="flex px-4 md:px-14 py-20 md:gap-0 gap-4 md:py-[7rem] md:h-[40rem] flex-col md:flex-row w-full bg-zinc-200">
      <div className="flex md:w-1/2 justify-between flex-col">
        <h1 className="md:w-4/5 font-medium text-2xl md:text-4xl">
          Our team of skilled artisans and designers collaborates closely to
          bring your vision to life.
        </h1>
        <div className="flex flex-row py-10 gap-4">
          <div className="flex flex-col border-r pr-6 border-gray-400">
            <p className="md:text-sm text-xs font-light text-gray-500">01</p>
            <p className="md:text-base text-sm">Planning</p>
          </div>
          <div className="flex flex-col border-r pr-6 border-gray-400">
            <p className="md:text-sm text-xs font-light text-gray-500">02</p>
            <p className="md:text-base text-sm">Design</p>
          </div>
          <div className="flex flex-col  ">
            <p className="md:text-sm text-xs font-light text-gray-500">03</p>
            <p className="md:text-base text-sm">Excecution</p>
          </div>
        </div>
      </div>
      <div className="flex md:w-1/2">
        <Image src={Worker} alt="worker" className="object-cover rounded" />
      </div>
    </div>
  );
};

export default MidSection;
