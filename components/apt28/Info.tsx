import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

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
          APT 28, also known as Fancy Bear, Sofacy, Sednit, and STRONTIUM, is a
          cyber espionage group linked to the Russian government, notably the
          GRU (Main Intelligence Directorate). APT 28, which was first
          discovered around 2007, has carried out several cyber operations
          against a variety of targets around the world, using advanced
          strategies and tools to achieve its goals.
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
        </motion.h1>
      </LampContainer>
    </section>
  );
};

export default Info;
