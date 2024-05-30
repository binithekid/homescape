import React from "react";
import Image from "next/image";
import Worker from "../../public/worker.jpg";

const MidSection = () => {
  return (
    <div className="flex px-14 py-[7rem] h-[40rem] flex-row w-full bg-zinc-200">
      <div className="flex w-1/2 justify-between flex-col">
        <h1 className="w-4/5 font-medium text-4xl">
          Our team of skilled artisans and designers collaborates closely to
          bring your vision to life.
        </h1>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col border-r pr-6 border-gray-400">
            <p className="text-sm font-light text-gray-500">01</p>
            <p>Planning</p>
          </div>
          <div className="flex flex-col border-r pr-6 border-gray-400">
            <p className="text-sm font-light text-gray-500">02</p>
            <p>Design</p>
          </div>
          <div className="flex flex-col  ">
            <p className="text-sm font-light text-gray-500">03</p>
            <p>Excecution</p>
          </div>
        </div>
      </div>
      <div className="flex w-1/2">
        <Image src={Worker} alt="worker" className="object-cover rounded" />
      </div>
    </div>
  );
};

export default MidSection;
