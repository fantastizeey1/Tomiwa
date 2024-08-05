import React from "react";
import styles from "../style";
import { stats } from "../constants";
const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} w-full px-[5%] flex-row flex-wrap sm:mb-20 mb-6  gap-10`}
    >
      {stats.map((stats) => (
        <div
          key={stats.id}
          className={`  flex justify-start items-center flex-row m-1`}
        >
          <h4 className="font-poppins font-semibold xs:leading-[53px] xs:text-[40px] text-30px leading-[43px] text-white ">
            {stats.value}
          </h4>
          <p className="font-poppins font-normal xs:leading-[26px] xs:text-[20px] text-15px leading-[21px] text-gradient uppercase ml-3 ">
            {stats.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
