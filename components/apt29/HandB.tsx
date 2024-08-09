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
          APT29, also known as Cozy Bear, The Dukes, or Yttrium, is widely
          believed to be linked to the Russian government, specifically the
          Russian Foreign Intelligence Service (SVR){" "}
          <a href="#cite6" className="text-purple-300">
            <sup>6</sup>
          </a>
          . The group has been active since at least 2008 and is known for its
          sophisticated cyber espionage campaigns.
          <a href="#cite10" className="text-purple-300 mr-3">
            <sup>10</sup>
          </a>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          Sponsorship and Motivation
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT29 is believed to be state-sponsored, with a primary focus on
          espionage and intelligence gathering. Their motivation aligns with
          national interests, targeting government, military, and security
          organizations to gain strategic information.
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          Significant Operations
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT 29 has been involved in several high-profile cyberattacks,
          including the Democratic National Committee (DNC) hack in 2016, which
          led to significant data leaks and political repercussions{" "}
          <a href="#cite4" className="text-purple-300">
            <sup>4</sup>
          </a>
          . In 2020, they were linked to the SolarWinds cyberattack, where they
          allegedly compromised SolarWinds&#39; Orion software updates to
          distribute malware to numerous government and private sector
          organizations.{" "}
          <a href="#cite5" className="text-purple-300">
            <sup>5</sup>
          </a>{" "}
          During the same year, APT 29 was reported to be targeting
          organizations involved in COVID-19 vaccine research and development{" "}
          <a href="#cite9" className="text-purple-300">
            <sup>9</sup>
          </a>
          . Additionally, they have consistently targeted various U.S.
          government agencies to gather intelligence and disrupt operations.
          <a href="#cite8" className="text-purple-300">
            <sup>8</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default HandB;
