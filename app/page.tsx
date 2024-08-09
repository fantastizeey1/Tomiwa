import Atp from "@/components/Atp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="  bg-[#19011f] max-w-[100vw]">
      <div className=" w-[100%] flex min-h-screen flex-col items-center  text-white">
        <Header />
        <Hero />
        <Stats />
        <Atp />
        <Footer />
      </div>
    </main>
  );
}
