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
          APT 29 (Cozy bear) is an adversary of Russian-origin, assessed as
          likely to be acting on behalf of the Foreign Intelligence Service of
          the Russian Federation.
        </motion.h1>
      </LampContainer>
    </section>
  );
};

export default Info;
