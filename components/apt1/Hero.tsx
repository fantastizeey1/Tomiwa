import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="h-[40rem] w-full rounded-md bg-[#19011f] relative flex flex-col items-start justify-start antialiased text-white  ">
      <div className="z-10 px-[3%]">
        <header className="w-full  flex -mt[60px] justify-start items-center py-6  navbar">
          <Link href="/" passHref>
            <div className="flex -ml-16 items-center justify-start cursor-pointer">
              <img src="/logo.png" alt="logo" className="w-10 h-10 mr-1" />
              <p className="text-white">Cyphorix</p>
            </div>
          </Link>
        </header>
        <h1 className="text-start text-gradient text-[40px] w-full mb-5 -ml-10">
          APT 1 (COMMENT CREW)
        </h1>
        <div className="max-w-full max-h-[70vh]">
          <Image
            src="/hackerapt1.png"
            alt="hackers Group"
            height={600}
            width={900}
            className="min-w-[900px] h-[70vh]"
          />
        </div>
        <div className="absolute z-[0] w-[25%] h-[25%] left-20 top-20 blue__gradient " />
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Hero;
