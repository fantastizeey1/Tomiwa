import React from "react";
import { Meteors } from "../ui/meteors";
import Meteorsdemo from "./Meteorsdemo";

const TTPs = () => {
  return (
    <section className="w-full min-h-screen">
      <h3>TACTICS, TECHNIQUES AND PROCEDURES(TTPs)</h3>
      <p>
        APT 1 utilized a range of sophisticated tactics and techniques to
        infiltrate and exploit target networks.
      </p>
      <Meteorsdemo />
    </section>
  );
};

export default TTPs;
