import React from "react";
import AboutImage from "../../public/manworking.png";

const About = () => {
  return (
    <div className="py-20  md:pt-[7rem] gap-20 bg-stone-100 px-4 md:px-14 flex">
      <div className="md:w-1/2 flex justify-center">
        <img src={AboutImage.src} className="w-full h-auto" />
      </div>
      <div className="w-1/2 flex flex-col gap-3">
        <h2 className="font-medium text-xl">InsightEdge Origin Story</h2>
        <p className="text-sm text-gray-500">
          Founded in 2021 by Alex London, InsightEdge was born out of a unique
          blend of expertise in private equity, investor relations, and digital
          marketing. With over 12 years of experience working alongside
          investors and fund managers, Alex developed a deep understanding of
          deal life cycles and the critical role marketing plays in driving
          EBITDA and other key financial performance metrics.
        </p>
        <p className="text-sm text-gray-500">
          Throughout his career, Alex built and nurtured valuable relationships,
          connecting fund managers with investors while gaining insight into the
          pain points surrounding marketing due diligence. He recognized a
          significant gap in how marketing levers were influencing financial
          outcomes but often lacked the in-depth analysis to support value
          creation.
        </p>
        <p className="text-sm text-gray-500">
          Fueled by a passion for finance and digital strategy, Alex leveraged
          his knowledge to create InsightEdge—a consulting firm that bridges the
          gap between marketing performance and financial success, offering
          private equity firms and portfolio companies a powerful new approach
          to unlocking growth and maximising returns.
        </p>
        <h2 className="font-medium pt-2 text-xl">About InsightEdge</h2>
        <p className="text-sm text-gray-500">
          InsightEdge is a digital marketing consulting firm that bridges the
          gap between marketing strategy and financial implications. Rooted in a
          deep understanding of the office of the CMO, InsightEdge works at the
          intersection of marketing and finance to drive strategic value.{" "}
        </p>
        <p className="text-sm text-gray-500">
          Our services encompass the entire marketing function, including
          strategic marketing planning, performance analytics, marketing
          technology integration, and campaign execution. We also offer interim
          leadership and transformation solutions.
        </p>
        <p className="text-sm text-gray-500">
          Across all of InsightEdge services, clients benefit from our expertise
          in data-driven insights, marketing-specific technology, and
          finance-led strategies. InsightEdge is based in London, with a team of
          28 members around the globe.
        </p>
      </div>
    </div>
  );
};

export default About;
