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
          APT 1, also known as Comment Crew or Shanghai Group, is a
          well-documented cyber espionage group believed to be linked to the
          Chinese government. Identified as one of the most prolific Advanced
          Persistent Threat (APT) groups, APT 1 has been active since at least
          2006 and is thought to be operating from China, primarily targeting
          sectors critical to China's economic and national interests.
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
        </motion.h1>
      </LampContainer>
    </section>
  );
};

export default Info;
