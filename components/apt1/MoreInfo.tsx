import React from "react";

const MoreInfo = () => {
  return (
    <section className="flex flex-col gap-20 justify-center items-center relative my-28 pt-10 ">
      <div className="flex flex-col justify-center items-center mb-10">
        <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
          ATTRIBUTION CHALLENGES
        </h3>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          Attributing cyberattacks to APT 1 and linking them to the Chinese
          government is challenging due to the group&apos;s advanced operational
          security measures. While the Mandiant report provides compelling
          evidence connecting APT 1 to Unit 61398 of the PLA, the complexities
          of cyber attribution, such as false flag operations and the use of
          proxy servers, continue to pose difficulties.{" "}
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
          Political Implications: Attribution can be politicized, complicating
          efforts to definitively identify state-sponsored actors.
          <a href="#cite" className="text-purple-300">
            <sup>5</sup>
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
          TARGETED INDUSTRIES
        </h3>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT 1 targeted a range of industries aligned with China&apos;s
          strategic interests. The group frequently attacked the information
          technology sector to access sensitive technological advancements and
          intellectual property. They also infiltrated telecommunications
          companies to intercept communications and gather intelligence. In
          aerospace, APT 1 sought to acquire technology related to defense and
          commercial aviation. Additionally, they targeted public administration
          to access government information, the energy industry for intelligence
          on production and distribution, and the financial services sector to
          obtain financial data and potentially disrupt economic stability.
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default MoreInfo;
