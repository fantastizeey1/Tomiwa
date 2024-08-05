"use client";

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Hero from "@/components/apt28/Hero";

const Page = () => {
  return (
    <main className="  bg-[#19011f] max-w-[100vw]">
      <TracingBeam>
        <div className="w-[100%] flex min-h-screen flex-col items-center  text-white">
          <Hero />
        </div>
      </TracingBeam>
    </main>
  );
};

export default Page;
