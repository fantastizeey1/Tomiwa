import React from "react";
import { Meteors } from "../ui/meteors";
import Meteorsdemo from "./Meteorsdemo";

const TTPs = () => {
  return (
    <section className="w-full min-h-screen flex  flex-col justify-center items-center my-10">
      <h3 className="text-center text-gradient text-[30px] w-full mb-5 ">
        TACTICS, TECHNIQUES AND PROCEDURES(TTPs)
      </h3>

      <Meteorsdemo />
    </section>
  );
};

export default TTPs;
