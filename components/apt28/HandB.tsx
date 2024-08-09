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
          APT28 is a well-known threat group attributed to Russia&#39;s General
          Staff Main Intelligence Directorate (GRU) 85th Main Special Service
          Center (GTsSS), specifically military unit 26165,
          <a href="#cite3" className="text-purple-300">
            <sup>3</sup>
          </a>{" "}
          and its origins have been traced back to Russia by various
          intelligence agencies, including the UK&#39;s National Cyber Security
          Centre (NCSC).
          <a href="#cite2" className="text-purple-300 mr-3">
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
          It is widely believed to be state-sponsored, operating under the
          auspices of the Russian government
          <a href="#cite2" className="text-purple-300">
            <sup>2</sup>
          </a>
          . A 2018 indictment by the United States Special Counsel confirmed
          these suspicions, identifying Fancy Bear as part of the GRU, a Russian
          military unit specializing in state-sponsored cyberattacks and the
          decryption of hacked data.
          <a href="#cite4" className="text-purple-300">
            <sup>4</sup>
          </a>
          In a more recent event, the headquarters of GRU Unit 26165 were
          reportedly targeted by an alleged Ukrainian drone strike on July 24,
          2023, which caused significant damage and collapsed one of the
          buildings.
          <a href="#cite3" className="text-purple-300">
            <sup>3</sup>
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          Significant Operations
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          Notable operations include the targeting of European political
          entities such as Germany&apos;s Christian Democratic Union and the
          Organization for Security and Cooperation in Europe, as well as the
          U.S. Democratic National Committee during the 2016 presidential
          election . APT28 also attacked the World Anti-Doping Agency, leaking
          sensitive information to influence perceptions around doping scandals.
        </p>
      </div>
    </section>
  );
};

export default HandB;
