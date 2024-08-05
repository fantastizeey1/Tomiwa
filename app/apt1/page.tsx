"use client";

import HandB from "@/components/apt1/HandB";
import Hero from "@/components/apt1/Hero";
import Info from "@/components/apt1/Info";
import Ref from "@/components/apt1/Ref";
import TTPs from "@/components/apt1/TTPs";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="  bg-[#19011f] max-w-[100vw]">
      <TracingBeam>
        <div className="w-[100%] flex min-h-screen flex-col items-center  text-white">
          <Hero />
          <Info />
          <HandB />
          <TTPs />
          <Ref />
        </div>
      </TracingBeam>
    </main>
  );
};

export default Page;
