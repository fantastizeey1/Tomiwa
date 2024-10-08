import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

const Info = () => {
  return (
    <section className="w-full">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-purple-300 to-purple-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-[16px]"
        >
          APT33 is a suspected Iranian threat group that has been in operation
          since at least 2013, largely concentrating on the Middle East, the US,
          and South Korea. It targets companies in a variety of industries, such
          as aerospace and energy.
        </motion.h1>
      </LampContainer>
    </section>
  );
};

export default Info;
