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
          Advanced Persistent Threat 33, also known by aliases such as Elfin,
          Magnalium, Refined Kitten, Holmium, and Peach Sandstorm, is a cyber
          espionage group attributed to the Iranian government. Active since at
          least 2013, APT33 is recognized as part of Iran&apos;s state-sponsored
          cyber operations.
          <a href="#cite2" className="text-purple-300">
            <sup>2</sup>
          </a>
          <a href="#cite8" className="text-purple-300">
            <sup>8</sup>
          </a>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          Sponsorship and Motivation
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT33 is believed to be state-sponsored by Iran, with activities that
          align with the country&apos;s strategic goals. The group is motivated
          by the desire to enhance Iran&apos;s technological and industrial
          capabilities by reducing reliance on foreign technology and gaining
          insights into adversaries&apos; military and industrial developments.
          This motivation drives APT33 to focus on information gathering,
          intellectual property theft, and the potential disruption of critical
          infrastructure.
          <a href="#cite3" className="text-purple-300">
            <sup>3</sup>
          </a>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          Significant Operations
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT33&#39;s known operations began with a focus on the Middle Eastern
          region, particularly targeting Saudi Arabia&#39;s critical
          infrastructure. One of the notable incidents attributed to APT33 was
          the 2016 attack on Saudi Arabia&#39;s General Authority of Civil
          Aviation, where the Shamoon malware was used to wipe data and disrupt
          operations.{" "}
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
          In addition to its regional focus, APT33 has also targeted
          organizations in the United States and South Korea, particularly those
          involved in the aerospace and defense sectors. These attacks are
          believed to be aimed at acquiring technological and strategic
          information that could benefit Iran&#39;s domestic industries and
          military capabilities. {7}
          <a href="#cite7" className="text-purple-300">
            <sup>7</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default HandB;
