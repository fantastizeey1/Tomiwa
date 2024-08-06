import React from "react";

const FINDINGS = () => {
  return (
    <section className="flex flex-col justify-center items-center my-28 relative">
      <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
        KEY FINDINGS AND PUBLIC REPORT
      </h3>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          National Cyber Security Centre (NSNC)
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl leading-7 font-light text-[13px]">
          The UK National Cyber Security Centre (NCSC), the US National Security
          Agency (NSA), US Cybersecurity and Infrastructure Security Agency
          (CISA) and US Federal Bureau of Investigation (FBI) released a joint
          advisory to provide details of tactics, techniques and procedures
          (TTPs) associated with APT28&apos;s exploitation of Cisco routers in
          2021.
          <a href="#cite2" className="text-purple-300">
            <sup>2</sup>
          </a>
          APT28 exploited the vulnerability CVE-2017-6742 (Cisco Bug ID:
          CSCve54313) [T1190]. This vulnerability was first announced by Cisco
          on 29 June 2017, and patched software was made available.{" "}
          <a href="#cite5" className="text-purple-300">
            <sup>5</sup>
          </a>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          CrowdStrike Analysis
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl leading-7 text-[13px] font-light">
          CrowdStrike&apos;s detailed analysis linked APT28 to the breach of the
          Democratic National Committee (DNC), identifying sophisticated malware
          and techniques consistent with the group&apos;s operations.
          <a href="#cite3" className="text-purple-300">
            <sup>3</sup>
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          FireEye Investigation
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl leading-7 text-[13px] font-light">
          FireEye&apos;s research provided evidence suggesting APT28&apos;s
          involvement in various global cyberattacks, including efforts to
          disrupt the Winter Olympics in Pyeongchang.
          <a href="#cite6" className="text-purple-300">
            <sup>6</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default FINDINGS;
