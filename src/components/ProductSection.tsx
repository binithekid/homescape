import React from "react";
import Image from "next/image";
import Sofa from "../../public/sofa.jpg";

const ProductSection = () => {
  return (
    <div className="w-full pt-[7rem] bg-white px-4 md:px-14 flex flex-col">
      <div className="flex mb-4 justify-between gap-20 flex-col md:flex-row">
        <h1 className="md:w-1/2 font-medium text-2xl md:text-4xl">
          Using high-quality materials, we transform raw concepts into stunning,
          custom-made furniture that perfectly complements your home.
        </h1>
        <p className="font-light">
          Custom-designed furniture, tailored just for you.
        </p>
      </div>
      <div className="flex py-[7rem] flex-col">
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
      </div>
      <div className="flex flex-col w-full py-10">
        <div className="flex flex-row justify-between">
          <h1 className="w-2/3 font-medium text-4xl">
            Crafting Dreams, One Detail at a Time
          </h1>
          <button className="rounded-full tracking-wide px-5 py-3 text-white font-medium transition-all hover:opacity-80 bg-gray-800 ">
            Learn More
          </button>
        </div>
        <div className="flex flex-col py-20 w-full">
          <div className="border-t py-16 border-gray-300 flex flex-row justify-between">
            <h1 className="text-5xl w-1/2">01</h1>
            <div className="flex w-1/2 gap-3 flex-col">
              <h1 className="text-2xl tracking-tight font-medium">
                Inspiration Gathering
              </h1>
              <p className="font-light text-gray-500">
                In this initial phase, we delve into your unique style,
                preferences, and functional requirements. Through in-depth
                consultations and mood board exploration, we gather inspiration
                to shape the vision for your space.
              </p>
            </div>
          </div>
          <div className="border-t py-16 border-gray-300 flex flex-row justify-between">
            <h1 className="text-5xl w-1/2">02</h1>
            <div className="flex w-1/2 gap-3 flex-col">
              <h1 className="text-2xl tracking-tight font-medium">
                Conceptualization & Design Development
              </h1>
              <p className="font-light text-gray-500">
                With a clear understanding of your needs, our team translates
                inspiration into tangible concepts. Through sketching, 3D
                modeling, and material selection, we refine ideas to create
                cohesive designs tailored to your aesthetic and lifestyle.
              </p>
            </div>
          </div>
          <div className="border-t py-16 border-gray-300 flex flex-row justify-between">
            <h1 className="text-5xl w-1/2">03</h1>
            <div className="flex w-1/2 gap-3 flex-col">
              <h1 className="text-2xl tracking-tight font-medium">
                Refinement & Implementation
              </h1>
              <p className="font-light text-gray-500">
                In the final stage, we collaborate closely with you to fine-tune
                designs and ensure every detail exceeds expectations. From
                fabric swatches to furniture prototypes, we work diligently to
                refine the vision. Once approved, we oversee the implementation
                phase, bringing your dream space to life with precision and
                care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
