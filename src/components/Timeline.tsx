import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import manworking from "../../public/manworking.jpg"; // Make sure to update the path
import Support from "../../public/support.jpg"; // Make sure to update the path
import Chair2 from "../../public/chair2.jpg"; // Make sure to update the path
import QualityCheck from "../../public/qualitycheck.jpg"; // Make sure to update the path
import Installation from "../../public/istallation.jpg"; // Make sure to update the path

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqItems = [
    {
      question: "01 Design Development",
      answer:
        "We begin by understanding your unique style, preferences, and functional needs through an in-depth consultation. Together, we explore inspirations and discuss your vision for the space.",
      image: manworking,
    },
    {
      question: "02 Quality Check",
      answer:
        "Using insights from our initial session, we conceptualize designs tailored to your aesthetic and lifestyle. Through sketches, mood boards, and 3D renderings, we refine ideas to create a cohesive vision.",
      image: QualityCheck,
    },
    {
      question: "03 Installation",
      answer:
        "With the design finalized, we guide you through selecting materials, furniture, and accessories that bring the vision to life. We ensure quality and style alignment every step of the way.",
      image: Installation,
    },
    {
      question: "04 Support",
      answer:
        "Our expert team manages the installation process with meticulous attention to detail. From furniture arrangement to final décor placement, we ensure every element is executed flawlessly.",
      image: Support,
    },
  ];

  return (
    <div className="w-full pt-40 pb-40 px-14">
      <div className="flex gap-20 flex-row">
        <div className="flex w-1/2 justify-between flex-col">
          <div>
            <h1 className="font-medium text-3xl">
              Four simple steps to bring your dream space to life{" "}
            </h1>
          </div>
          <div>
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`mb-4 border-b pb-1 ${
                  activeIndex === index ? "border-black" : "border-gray-200"
                }`}
              >
                <h2
                  className={`cursor-pointer pb-2 font-light text-2xl ${
                    activeIndex === index ? "text-black" : "text-gray-400"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.question}
                </h2>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    height: activeIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm pb-2 text-gray-500">{item.answer}</p>
                </motion.div>
              </div>
            ))}
            <button className="rounded-full mt-4 text-sm px-4 w-max py-2 text-white font-medium transition-all hover:opacity-80 bg-gray-800 ">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={faqItems[activeIndex].image}
              alt="chair"
              className="rounded"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
