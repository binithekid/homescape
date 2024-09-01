import React from "react";
import Image from "next/image";
import Sofa from "../../public/sofa.jpg";

const ProductSection = () => {
  return (
    <div className="w-full pt-20 md:pt-[7rem] bg-white px-4 md:px-14 flex flex-col">
      {/* <div className="md:flex hidden mb-4 justify-between gap-20 flex-col md:flex-row">
        <h1 className="md:w-1/2 font-medium text-2xl md:text-4xl">
          Using high-quality materials, we transform raw concepts into stunning,
          custom-made furniture that perfectly complements your home.
        </h1>
        <p className="font-light md:block hidden">
          Custom-designed furniture, tailored just for you.
        </p>
      </div>
      <div className="md:flex hidden py-10 md:py-[7rem] flex-col">
        <div className="w-full rounded h-[40rem] object-cover bg-[url('/sofa.jpg')] bg-cover">
          <div className="flex flex-row py-10 justify-between">
            <div />
            <div className="flex -mr-12 flex-col gap-4">
              <h1 className="float-right text-3xl">Pebble</h1>
              <p className="font-light w-2/3 text-sm text-gray-600">
                Elegantly crafted sofa that blends comfort with style
              </p>
              <button className="w-max transition-all hover:opacity-70 text-sm">
                Explore in detail &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-10 h-[40rem] flex flex-row gap-10">
          <div className="w-1/2 px-10 py-10 rounded object-cover bg-[url('/chair1.jpg')] bg-cover">
            <div className="flex -mr-[8rem] flex-col gap-4">
              <h1 className="float-right text-3xl">Haze</h1>
              <p className="font-light w-1/2 text-sm text-gray-600">
                A serene and stylish addition to your living space, perfect for
                unwinding.
              </p>
              <button className="w-max transition-all hover:opacity-70 text-sm">
                Explore in detail &gt;
              </button>
            </div>
          </div>
          <div className="w-1/2 px-10 py-10 rounded object-cover bg-[url('/chair2.jpg')] bg-cover">
            <div className="flex -mr-[8rem] flex-col gap-4">
              <h1 className="float-right text-3xl">Dove</h1>
              <p className="font-light w-1/2 text-sm text-gray-600">
                Experience the perfect balance of sophistication and coziness
              </p>
              <button className="w-max transition-all hover:opacity-70 text-sm">
                Explore in detail &gt;
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col w-full">
        <div className="flex gap-3 md:flex-row flex-col justify-between">
          <h1 className="md:w-2/3 font-medium text-2xl md:text-4xl">
            Our Approach
          </h1>
          <p className="md:text-base text-sm text-gray-500">
            By aligning our expertise with your vision, we craft tailored
            solutions that catalyse growth and ensure the realisation of
            strategic objectives
          </p>
        </div>
        <div className="flex flex-col py-20 w-full">
          <div className="border-t py-12 md:py-16 border-gray-300 gap-5 flex flex-col md:flex-row justify-between">
            <h1 className="md:text-5xl text-3xl w-1/2">01</h1>
            <div className="flex md:w-1/2 gap-1 md:gap-3 flex-col">
              <h1 className="md:text-2xl text-xl tracking-tight font-medium">
                Focus on &apos;Big 5&apos; levers
              </h1>
              <p className="font-light md:text-base text-sm text-gray-500">
                Our analysis unpacks how changes to the 5 major digital
                marketing levers flow through to revenue
              </p>
            </div>
          </div>
          <div className="border-t py-12 md:py-16 border-gray-300 gap-5 flex flex-col md:flex-row justify-between">
            <h1 className="md:text-5xl text-3xl w-1/2">02</h1>
            <div className="flex md:w-1/2 gap-1 md:gap-3 flex-col">
              <h1 className="md:text-2xl text-xl tracking-tight font-medium">
                Define the timeline
              </h1>
              <p className="font-light md:text-base text-sm text-gray-500">
                Depending on the nature of the engagement, projects can range
                from a few weeks for due diligence up to 3 months or more for
                value creation or fractional growth support
              </p>
            </div>
          </div>
          <div className="border-t py-12 md:py-16 border-gray-300 gap-5 flex flex-col md:flex-row justify-between">
            <h1 className="md:text-5xl text-3xl w-1/2">03</h1>
            <div className="flex md:w-1/2 gap-1 md:gap-3 flex-col">
              <h1 className="md:text-2xl text-xl tracking-tight font-medium">
                Crystallise the plan and assess the financial impact
              </h1>
              <p className="font-light md:text-base text-sm text-gray-500">
                We leverage our extensive partner network to build best-in-class
                marketing motions and provide executive-level dashboards and
                models to quantify and monitor the financial impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
