import React from "react";

const HandB = () => {
  return (
    <section className="flex flex-col justify-center items-center -mt-40 mb-28 z-10">
      <h3 className="text-center text-gradient text-[40px] w-full mb-10 ">
        HISTORY AND BACKGROUND
      </h3>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">Origin</h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT1, also known as Comment Crew, Comment Group and Shanghai Group, is
          a prominent APT group attributed to China&apos;s People&apos;s
          Liberation Army Unit 61398. APT1&apos;s operations have been active
          since at least 2006, focusing on a wide range of industries, including
          technology, telecommunications, and government sectors.
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
          APT1 is significant due to its extensive targeting of Western
          industries, particularly for intellectual property theft and
          government espionage .
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          Sponsorship and Motivation
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT1 is believed to be state-sponsored, with a primary focus on
          acquiring intellectual property and sensitive government information
          to advance China&apos;s strategic interests. Their targeting patterns
          suggest a focus on English-speaking countries, with Mandiant reporting
          that 87% of the victims were in countries where English is the primary
          language.{" "}
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          Significant Operations
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT1&apos;s operations are characterized by their vast scale and
          sophistication. They control thousands of systems, with over 900
          command and control (C&C) servers spread across multiple countries,
          demonstrating their significant operational capabilities and
          resources.
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default HandB;
