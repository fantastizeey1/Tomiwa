import React from "react";
import { Spotlight } from "../ui/spotlight";

const CONCLUSION = () => {
  return (
    <section className="flex flex-col justify-center items-center relative my-28 pt-10 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-48"
        fill="#d24ef3"
      />
      <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
        CONCLUSION
      </h3>
      <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
        APT1 is a well-known cyberthreat because of its potent TTPs, which
        include spear phishing and zero-day exploits. Cyber espionage is
        complicated, as demonstrated by the difficulties in linking assaults to
        APT1. APT threats must be defeated with effective defenses, such as
        improved network security measures and threat intelligence exchange.
      </p>
    </section>
  );
};

export default CONCLUSION;
