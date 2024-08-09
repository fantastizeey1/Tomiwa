import React from "react";
import styles from "../style";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row w-full px-[5%] -mt-[20px] gap-10 flex-col ${styles.paddingY} max-h-[80%]`}
    >
      <div
        className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative `}
      >
        {/* <div className="flex flex-row items-center py-[6px] px4  rounded-[10px] mb2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white ">20% </span>Discounted for{" "}
            <span className="text-white ">1 Month </span>Account
          </p>
        </div> */}

        <div className="absolute z-[2] w-[50%] h-[50%] -left-20 -top-20 blue__gradient " />

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Insights into <br className="sm:block hidden" />{" "}
            <span className="text-gradient">
              {" "}
              Advanced Persistent Threats Groups
            </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>
        {/* <h1 className=" font-poppins font-semibold ss:text-[60px] text-[45px] w-full text-white ss:leading-[100px] leading-[75px]">
          Advanced Persistent Threats
        </h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Explore the Secrets of APT with Expert Analysis and the Latest
          Intelligence Reports
        </p>
      </div>
      <div
        className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}
      >
        <Image
          height={500}
          width={500}
          layout="responsive"
          src={"/hero.png"}
          alt={"hero"}
          className="inline-block w-full h-[500px] cursor-pointer"
        />

        <div className="absolute z-[2] w-[40%] h-[35%] top-50 pink__gradient white__gradient" />
      </div>
    </section>
  );
};

export default Hero;
