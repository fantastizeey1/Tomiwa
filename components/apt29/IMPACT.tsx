import React from "react";

const IMPACT = () => {
  return (
    <section className="flex flex-col gap-20 justify-center items-center relative my-28 pt-10 ">
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
          IMPACT AND IMPLICATIONS
        </h3>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          The activities of APT29 posed significant threats to national security
          by accessing sensitive government information as evidenced by reports
          such as GRIZZLY STEPPE
          <a href="#cite13" className="text-purple-300">
            <sup>13</sup>
          </a>
          . Their espionage activities also led to substantial economic impacts,
          including the loss of intellectual property that can adversely affect
          businesses and economies
          <a href="#cite3" className="text-purple-300">
            <sup>3</sup>
          </a>
          . Additionally, APT29&#39;s targeting of healthcare and vaccine
          research during the COVID-19 pandemic raised serious concerns about
          public health and safety, highlighting the broader implications of
          their cyber activities.
          <a href="#cite11" className="text-purple-300">
            <sup>11</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default IMPACT;
