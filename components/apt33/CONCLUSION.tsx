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
        APT33 represents a significant cyber threat, particularly to industries
        critical to national security and economic stability. The group&#39;s
        activities highlight the need for cybersecurity measures and
        international cooperation to combat state-sponsored cyber espionage. By
        understanding APT33&#39;s history, impact, and TTPs, organizations can
        better prepare and defend against such advanced threats.
      </p>
    </section>
  );
};

export default CONCLUSION;
