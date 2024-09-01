import React, { useEffect } from "react";
import { useState } from "react";
import Support from "../../public/support.png"; // Make sure to update the path
import QualityCheck from "../../public/qualitycheck.png"; // Make sure to update the path
import Installation from "../../public/istallation.jpg"; // Make sure to update the path
import manworking from "../../public/manworking.png"; // Make sure to update the path
import Analyst from "../../public/analyst.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      question: "01  Due Diligence",
      answer:
        "Uncover hidden growth levers. Our due diligence support goes beyond the surface to identify the highest-impact marketing opportunities for investment targets. We also are skilled at putting on our detective hats and helping you separate fact from spin.",
      image: QualityCheck,
    },
    {
      question: "02 Value Creation",
      answer:
        "We work hand-in-hand with your portfolio companies to develop and execute data-driven marketing strategies that drive rapid and sustainable growth. InsightEdge helps audit, plan and guide execution on a digital and revenue growth acceleration plans.",
      image: manworking,
    },
    {
      question: "03 Marketing Analytics",
      answer:
        "We transform data into clear insights, enabling smarter decisions and more effective marketing strategies. InsightEdge delivers transformative insights through marketing analytics.",
      image: Installation,
    },
    {
      question: "04 AI & Automation",
      answer:
        "We leverage the power of artificial intelligence and marketing automation to streamline operations, improve efficiency, and maximise ROI. InsightEdge leverages AI & Automation to supercharge your marketing efforts.",
      image: Support,
    },
    {
      question: "05  Fractional Growth Lead",
      answer:
        "Quickly build, staff, and execute a transferable Growth Marketing operation within the business. InsightEdge Fractional Growth Leads maximise speed-to-value and set clients up for autonomous long-term success",
      image: Analyst,
    },
  ];
  return (
    <div className="w-full py-[7rem] md:py-40 px-4 md:px-14">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex lg:w-1/2 justify-between flex-col">
          <div>
            <h1 className="font-medium text-2xl md:text-3xl">
              Amplify your portfolio growth with InsightEdge Anaytics
            </h1>
            {/* <p className="text-sm py-2 text-gray-500">
              At InsightEdge, we don't just advise on growth, we engineer it.
              Our team of data-driven marketers and seasoned operators work
              hand-in-hand with your companies to drive revenue, optimise
              performance, and maximise valuations.
            </p> */}
          </div>
          <div className="lg:mt-0 mt-10">
            {faqItems.map((item, index) => (
              <div
                className={`mb-4 border-b pb-1 ${
                  activeIndex === index ? "border-black" : "border-gray-200"
                }`}
                key={index}
              >
                <h2
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer pb-2 font-light text-xl ${
                    activeIndex === index ? "text-black" : "text-gray-400"
                  }`}
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
          </div>
        </div>
        <div className="md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                className="rounded"
                src={faqItems[activeIndex].image}
                alt="Timeline Image"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
