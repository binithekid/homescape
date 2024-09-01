import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FAQ = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");

  const [faqItems, setFaqItems] = useState([
    {
      question:
        "What types of private equity firms do you typically work with?",
      answer:
        "We collaborate with a diverse range of private equity firms. Many of our clients have limited in-house marketing expertise, and we become their go-to partner for marketing diligence and value creation initiatives. We also work alongside firms with established marketing Centers of Excellence, providing fresh insights and complementary perspectives to augment their strategies.",
      isAnswerVisible: false,
    },
    {
      question: "How do you measure and track results?",
      answer:
        "We prioritize establishing robust marketing analytics infrastructure to accurately measure outcomes. Our team coaches client personnel to facilitate knowledge transfer and build sustainable capabilities. We also develop executive dashboards that clearly demonstrate the financial impact of implemented initiatives, ensuring transparency and accountability throughout the engagement.",
      isAnswerVisible: false,
    },
    {
      question:
        "What differentiates InsightEdge from traditional management consulting firms?",
      answer:
        "InsightEdge combines the intellectual rigor of top-tier management consulting with the practical expertise of a world-class marketing agency. As seasoned practitioners and operators, we deliver strategies that are not only ambitious but also realistic, achievable, and battle-tested. This unique blend ensures our clients receive actionable insights that drive real-world results.",
      isAnswerVisible: false,
    },
    {
      question:
        "How do you tailor your approacg to different portfolio companies?",
      answer:
        "Our process begins with a comprehensive outside-in analysis to identify opportunities and quick wins. This initial assessment shapes the project scope, which we continuously refine in partnership with client leadership. Our flexible approach ensures that each engagement delivers tangible impact, tailored to the unique needs of each portfolio company.",
      isAnswerVisible: false,
    },
    {
      question: "How long is a typical engagement?",
      answer:
        "We avoid a one-size-fits-all approach, instead tailoring our engagements to meet your specific business needs. While durations vary, due diligence projects typically span less than a month, value creation initiatives often run for about 3 months, and fractional growth lead roles can range from a few months to a year or more, depending on your requirements.",
      isAnswerVisible: false,
    },
  ]);

  const toggleAnswer = (index: any) => {
    setFaqItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, isAnswerVisible: !item.isAnswerVisible } : item
      )
    );
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.7, ease: "easeInOut" },
    },
  };

  const itemTwo = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.7, duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full gap-8 bg-stone-100 flex flex-col md:flex-row py-20 px-4 md:px-20">
      <div className="md:w-[40%] flex justify-center gap-1 flex-col">
        <p className="font-light md:pr-10 text-sm text-gray-700">
          Frequently Asked Questions
        </p>
        <h1 className="text-gray-800 font-medium tracking-tight text-2xl">
          Do you have any questions?
        </h1>

        <p className="font-light md:pr-10 text-sm text-gray-700">
          If you have any questions regarding any topic please submit your email
          and we will be happy to deal your request
        </p>
        <form className="flex mt-2 flex-row gap-2">
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="bg-white text-white w-full md:w-1/2 text-sm font-light border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="text-white text-sm hover:opacity-70 bg-black rounded px-3 py-2 w-max"
          >
            {!status ? (
              <p>Submit</p>
            ) : status === "loading" ? (
              <p>Sending ...</p>
            ) : status === "done" ? (
              <p>Sent!</p>
            ) : null}
          </button>
        </form>
      </div>
      <div className="w-full md:w-[60%]">
        <div className="flex-1 md:ml-4 flex flex-col relative overflow-hidden">
          <div className="flex font-uncut  flex-col mt-9 px-0 flex-wrap">
            {faqItems.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row items-center w-full justify-between">
                  <p
                    onClick={() => toggleAnswer(index)}
                    className="flex flex-row gap-2 text-lg md:text-xl items-center cursor-pointer text-gray-700"
                  >
                    {item.question}
                  </p>
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{
                      rotate: item.isAnswerVisible ? 90 : 0,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {" "}
                    <AiOutlinePlus className="text-gray-500 text-[13px] sm:text-lg m-4" />
                  </motion.span>
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: item.isAnswerVisible ? "auto" : 0,
                    opacity: item.isAnswerVisible ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="flex text-gray-500 font-light text-sm sm:text-md flex-wrap mt-1 mb-3">
                    {item.answer}
                  </p>
                </motion.div>
                <hr className="my-2" />
              </div>
            ))}
            <p className="text-sm font-light text-gray-500 mt-4 mb-4">
              Other questions or requests? Send us an email to:
              info@insightedgeanalytics.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
