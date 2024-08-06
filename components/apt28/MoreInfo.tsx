import React from "react";

const MoreInfo = () => {
  return (
    <section className="flex flex-col gap-20 justify-center items-center relative my-28 pt-10 ">
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
          TARGETED INDUSTRIES
        </h3>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT 28&#39;s targeted government agencies, military organizations,
          defense missions, media outlets, political organizations, energy
          companies and financial institutions since 2007. Their strategies,
          which included gathering intelligence on NATO and EU activities,
          influencing political events, and weakening the capacities of
          opponents, frequently coincide with Russian geopolitical aims. The
          group&#39;s emphasis on the defense and key infrastructure sectors
          draws attention to their involvement in both conventional espionage
          and cyber warfare.
          <a href="#cite4" className="text-purple-300">
            <sup>4</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default MoreInfo;
