"use client";

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Hero from "@/components/apt28/Hero";
import Info from "@/components/apt28/Info";
import HandB from "@/components/apt28/HandB";
import CONCLUSION from "@/components/apt28/CONCLUSION";
import Cdm from "@/components/apt28/Cdm";
import IMPACT from "@/components/apt28/IMPACT";
import MoreInfo from "@/components/apt28/MoreInfo";
import TTPs from "@/components/apt28/TTPs";
import FINDINGS from "@/components/apt28/FINDINGS";
import Ref from "@/components/apt28/Ref";

const Page = () => {
  return (
    <main className="  bg-[#19011f] max-w-[100vw]">
      <TracingBeam>
        <div className="w-[100%] flex min-h-screen flex-col items-center  text-white">
          <Hero />
          <Info />
          <HandB />
          <FINDINGS />
          <TTPs />
          <MoreInfo />
          <IMPACT />
          <Cdm />
          <CONCLUSION />
          <Ref />
        </div>
      </TracingBeam>
    </main>
  );
};

export default Page;
