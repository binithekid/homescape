import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="w-full gap-10 py-20 md:py-40 px-4 md:px-16 md:bg-fixed bg-[url('/aboutBg.webp')] bg-cover flex md:flex-row flex-col">
      <div className="md:w-1/2 w-full justify-between flex flex-col gap-5 md:gap-10">
        <div>
          <h1 className="text-gray-800 font-medium md:w-1/2 tracking-tight text-4xl md:text-5xl">
            Contact Us
          </h1>
          <div className="md:w-3/4">
            <p className="font-light text-sm mt-2 text-gray-700">
              Our goal is to help companies build relationships with their
              customers online through great design and technical.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="mailto:info@onecloudmedia.uk"
                className="font-light flex flex-row gap-2 items-center cursor-pointer transition-all hover:opacity-70 text-gray-700 "
              >
                <span>
                  <IoIosMail className="text-xl" />{" "}
                </span>
                info@homescape.com
              </a>

              <p className="font-light flex flex-row gap-3 items-center cursor-pointer transition-all hover:opacity-70 text-gray-700 ">
                <span>
                  <FaPhoneAlt />{" "}
                </span>
                0797 9396 084
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] md:flex hidden gap-10">
          <div className="w-1/3">
            <p className="text-gray-800">Support</p>
            <p className="font-light text-gray-700 text-sm">
              Send us a message if you need support with a service we have
              provided
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-gray-800">Feedback </p>
            <p className="font-light text-gray-700 text-sm">
              If you have any feedback on our work we would love to hear from
              you{" "}
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-gray-800">Enquiry</p>
            <p className="font-light text-gray-700 text-sm">
              Drop us a message if you have an enquiry about a service we offer{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 flex-col gap-3">
        <form className="flex gap-6 flex-col">
          <select
            required
            className="w-full appearance-none bg-white font-light border border-gray-400 md:p-3 text-sm md:text-base p-2 rounded custom-select text-gray-700"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          >
            <option value="">Select a topic</option>
            <option value="Support">Support</option>
            <option value="Enquiry">Enquiry</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full bg-white text-gray-700 font-light border border-gray-400 md:p-3 text-sm md:text-base p-2 rounded"
            placeholder="Name"
          />
          <input
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full bg-white text-gray-700 font-light border border-gray-400 md:p-3 text-sm md:text-base p-2 rounded"
            placeholder="Email"
          />
          <textarea
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={6}
            className="w-full bg-white text-gray-700 font-light border border-gray-400 md:p-3 text-sm md:text-base p-2 rounded"
            placeholder="How can we help?"
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
    </div>
  );
};

export default Contact;
