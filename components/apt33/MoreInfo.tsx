import React from "react";

const MoreInfo = () => {
  return (
    <section className="flex flex-col gap-20 justify-center items-center relative my-28 pt-10 ">
      <div className="flex flex-col justify-center items-center mb-10">
        <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
          ATTRIBUTION CHALLENGES
        </h3>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          <span className="font-bold">Use of Common Tools:</span> APT33 often
          used widely available hacking tools and malware, making it difficult
          to distinguish their activities from those of other cybercriminals or
          state-sponsored groups.
          <a href="#cite2" className="text-purple-300">
            <sup>2</sup>
          </a>
        </p>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          <br className="mb-3" />
          <span className="font-bold">Infrastructure Overlap:</span> The
          group&#39;s infrastructure, including command-and-control servers and
          domains, overlapped with those used by other threat actors,
          complicating the attribution process.
          <a href="#cite7" className="text-purple-300">
            <sup>7</sup>
          </a>
        </p>

        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          <span className="font-bold">False Flag:</span> APT33, like other
          advanced threat actors employed false flag operations to mislead
          investigators and obscure their true origin.
          <a href="#cite2" className="text-purple-300">
            <sup>2</sup>
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
          TARGETED INDUSTRIES
        </h3>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT33 primarily targeted the aerospace, energy, and petrochemical
          sectors, reflecting Iran&#39;s strategic interests in enhancing its
          domestic capabilities and economic competitiveness.
          <a href="#cite5" className="text-purple-300">
            <sup>5</sup>
          </a>{" "}
          The group&#39;s attacks on aerospace entities, including those with
          military and commercial ties, aim to gather intelligence that could
          support Iran&#39;s aviation industry. Additionally, APT33&#39;s
          focused on energy and petrochemical companies, particularly in Saudi
          Arabia and South Korea, this highlights an effort to gain insights
          into regional rivals and bolster Iran&#39;s petrochemical industry.
          <a href="#cite7" className="text-purple-300">
            <sup>7</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default MoreInfo;
