import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="h-[40rem] w-full rounded-md bg-[#19011f] relative flex flex-col items-start justify-start antialiased text-white  ">
      <div className="z-10 px-[3%] w-full">
        <header className="w-full  flex -mt[60px] justify-start items-center py-6  navbar">
          <Link href="/" passHref>
            <div className="flex -ml-16 items-center justify-start cursor-pointer">
              <img src="/logo.png" alt="logo" className="w-10 h-10 mr-1" />
              <p className="text-white">Cyphorix</p>
            </div>
          </Link>
        </header>
        <h1 className="text-start text-gradient text-[40px] w-full mb-5 -ml-10">
          APT 28 (FANCY BEAR)
        </h1>
        <div className="max-w-full w-[90%] flex justify-center items-center mx-auto max-h-[70vh]">
          <img
            src="/apt28hero.png"
            alt="hackers Group"
            className="min-w-[500px] h-[70vh]"
          />
        </div>
        <div className="absolute z-[0] w-[25%] h-[25%] left-20 top-20 blue__gradient " />
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Hero;
