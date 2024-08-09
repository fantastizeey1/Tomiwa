import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-[40rem] w-full rounded-md bg-[#19011f] relative flex flex-col items-center justify-center px-[200px] text-white  ">
      <div className="flex flex-col items-center mb-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to learn more About{" "}
          <span className="text-purple-400">ATP&apos;S</span> ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <a href="mailto:blessingajiboye23@gmail.com">
          <button className=" bg-[#511161] border border-[#ebb6f8] text-purple-300 rounded-2xl py-5 text-[20px] px-8">
            Let&#39;s get in touch
          </button>
        </a>
      </div>

      <div className="w-full">
        <Link href="/" passHref>
          <div className="flex -ml-16 items-center justify-start cursor-pointer">
            <img src="/logo.png" alt="logo" className="w-10 h-10 mr-1" />
            <p className="text-white">Cyphorix</p>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
