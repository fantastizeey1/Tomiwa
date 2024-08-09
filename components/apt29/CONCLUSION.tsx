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
        Cozy Bear, also known as APT29, is a prime example of how
        state-sponsored espionage and sophisticated criminality may conflate.
        They provide a diverse and persistent threat due to their dual
        involvement in financially driven attacks and traditional espionage
        efforts. To effectively mitigate the dangers posed by this formidable
        group and build cybersecurity measures, it is imperative to have an
        understanding of their key members, operations, and methodologies.
      </p>
    </section>
  );
};

export default CONCLUSION;
