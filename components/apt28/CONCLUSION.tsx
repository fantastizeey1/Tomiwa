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
        APT 28 is a persistent and sophisticated cyber espionage threat, driven
        mainly by Russian state goals. Their activities highlight how crucial it
        is to have strong cybersecurity procedures and international
        collaboration in order to combat state-sponsored cyberthreats. To reduce
        the hazards posed by organizations such as APT 28, strategic
        cooperation, advanced defensive measures, and constant monitoring are
        necessary.
      </p>
    </section>
  );
};

export default CONCLUSION;
