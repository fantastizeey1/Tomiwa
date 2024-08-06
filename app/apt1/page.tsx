"use client";

import Cdm from "@/components/apt1/Cdm";
import CONCLUSION from "@/components/apt1/CONCLUSION";
import FINDINGS from "@/components/apt1/FINDINGS";
import HandB from "@/components/apt1/HandB";
import Hero from "@/components/apt1/Hero";
import IMPACT from "@/components/apt1/IMPACT";
import Info from "@/components/apt1/Info";
import MoreInfo from "@/components/apt1/MoreInfo";
import Ref from "@/components/apt1/Ref";
import TTPs from "@/components/apt1/TTPs";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";

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
