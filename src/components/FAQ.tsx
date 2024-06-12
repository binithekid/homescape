import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FAQ = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");

  const [faqItems, setFaqItems] = useState([
    {
      question: "What services do you offer?",
      answer:
        "Discover our exceptional web design and development services at One Cloud Media. We specialise in creating custom-tailored websites, meticulously crafted to address the unique needs of our clients. Our expertise extends to the development of intricate web applications and software solutions, delivering robust functionality and seamless user experiences. What sets us apart is our unwavering commitment to detail and our dedication to delivering flawless design and performance, ensuring that each project exceeds expectations and stands out in the digital landscape.",
      isAnswerVisible: false,
    },
    {
      question: "How about if I am not happy with the product?",
      answer:
        "Cultivate extraordinary user experiences and intuitive interfaces with One Cloud Media's UX and UI design services. We specialise in crafting user-centric designs that seamlessly blend aesthetics with functionality. Our team meticulously tailors each interface to align with your brand identity and user expectations, ensuring a cohesive and engaging digital experience. With an emphasis on usability and accessibility, we elevate your digital presence to new heights, setting your brand apart in an ever-evolving digital landscape.",
      isAnswerVisible: false,
    },
    {
      question: "Do you offer installation?",
      answer:
        "Transform your brand's narrative with One Cloud Media's comprehensive content creation services. From captivating videos that resonate with your audience to cohesive branding strategies that elevate your identity, we craft compelling content tailored to your unique vision. Our expertise extends beyond visuals to encompass content marketing materials such as newsletters, email campaigns, and informative articles. With a focus on storytelling and engagement, we empower your brand to connect authentically with your audience across diverse digital channels, driving meaningful interactions and lasting impressions.",
      isAnswerVisible: false,
    },
    {
      question: "Is delivery included in the price?",
      answer:
        "Elevate your digital capabilities with One Cloud Media's full-stack development expertise. From front-end interfaces to back-end infrastructure, our team delivers comprehensive solutions tailored to your specific needs. With proficiency in a wide range of programming languages and frameworks, we craft scalable and efficient applications that meet the demands of today's dynamic digital landscape. Whether it's creating robust web applications, designing intricate databases, or implementing secure APIs, we ensure every aspect of your project is meticulously developed to achieve optimal performance and functionality.",
      isAnswerVisible: false,
    },
    {
      question: "How often do you update your catalogue?",
      answer:
        "Accelerate your vision to market with One Cloud Media's MVP app development services. We specialise in rapidly prototyping and launching Minimum Viable Products (MVPs) that showcase your core features and functionality. Our agile development approach allows for swift iteration and refinement, enabling you to gather valuable feedback from users and stakeholders early in the development process. With a focus on delivering essential features efficiently, we help you validate your concept, minimise risk, and lay a solid foundation for future growth and expansion.",
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
      <div className="md:w-1/2 flex justify-center gap-1 flex-col">
        <p className="font-light md:pr-10 text-sm text-gray-700">
          Frequently Asked Questions
        </p>
        <h1 className="text-gray-800 font-medium tracking-tight text-2xl md:text-4xl">
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
            className="text-white text-sm hover:opacity-70 bg-black rounded-full px-3 py-2 w-max"
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
      <div className="w-full md:w-1/2">
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
              info@homescape.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
