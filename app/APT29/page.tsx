"use client";

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Hero from "@/components/apt29/Hero";
import Info from "@/components/apt29/Info";
import HandB from "@/components/apt29/HandB";
import FINDINGS from "@/components/apt29/FINDINGS";
import TTPs from "@/components/apt29/TTPs";
import MoreInfo from "@/components/apt29/MoreInfo";
import IMPACT from "@/components/apt29/IMPACT";
import Cdm from "@/components/apt29/Cdm";
import CONCLUSION from "@/components/apt29/CONCLUSION";
import Ref from "@/components/apt29/Ref";

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
