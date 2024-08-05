import React from "react";
import Link from "next/link";
import { atps } from "../constants";
import styles from "../style";

const Atp = () => {
  return (
    <section
      id="apts"
      className="w-full mx-auto  px-[5%] relative overflow-x-hidden"
    >
      <div className=" absolute z-[0] w-[60%] h-[60%] rounded-full -right-[50%] blue__gradient pb-9 mb-32" />
      <div className="flex justify-center items-center flex-col gap-10 px-10 p-5 text-center">
        <h2 className="text-purple-300 text-[50px] text-gradient">
          Take Full control of your Defense{" "}
        </h2>
        <p className={`${styles.paragraph} max-w-[770px]  mb-10 mt-5`}>
          Utilize Advanced Intelligence Solutions to Gain Strategic Insights
          into Emerging Threats and Enhance Your Organization’s Cyber Defense
          Posture Against Advanced Persistent Threats.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-16  mx-auto justify-center  items-center feedback-container relative z-[1] mb-16">
        {atps.map((atp) => (
          <Link href={`/${atp.link}`} key={atp.id}>
            <div className="flex justify-center items-center flex-col gap-2 w-[300px] h-[150px] shadow-lg mx-auto rounded-xl shadow-purple-700 relative p-5 cursor-pointer hover:scale-110 hover:transition-shadow">
              <img src={atp.img} alt={atp.name} className="w-16 h-16 -mt-10" />
              <div className="w-[50%]  z-[2] absolute left-50 top-0 h-[50%] new__gradient  bg-purple-300/30"></div>
              <h3 className=" text-purple-300 text-[30px]">{atp.name}</h3>
              <p className="text-purple-300 text-[16px]">{atp.title}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>a</div>
    </section>
  );
};

export default Atp;
