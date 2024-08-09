import React from "react";

const FINDINGS = () => {
  return (
    <section className="flex flex-col justify-center items-center my-28 relative">
      <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
        KEY FINDINGS AND PUBLIC REPORT
      </h3>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          The Symantec Report (2019)
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl leading-7 font-light text-[13px]">
          The Symantec report provides a comprehensive analysis of APT33, It was
          known to target more than fifty organizations in the aerospace, oil,
          petrochemical, financial, and IT sectors, mostly in the United States,
          Saudi Arabia, and South Korea. Since 2015, the organization has been
          active, infiltrating target networks and maintaining long-term access
          via spear-phishing techniques using industry-specific lures and
          bespoke malware such as the Remexi backdoor. The actions of APT33 are
          supported by a vast command and control network, which demonstrates
          their ability to adjust and continuously strike high-value targets.
          The group&#39;s strategic focus, which aims to improve domestic
          technology capabilities and gather intelligence on adversaries, is in
          line with Iran&#39;s geopolitical aspirations. Their actions reveal a
          more comprehensive Iranian cyber campaign.
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          FireEye Report (2017)
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl leading-7 text-[13px] font-light">
          The 2017 FireEye Report states the group predominantly leveraged
          spear-phishing emails to gain access to target networks; to boost
          their success rate, they frequently use baits relating to aviation and
          energy. The group was well-known for using cutting-edge malware
          programs like DropShot and StoneDrill, which have complex evasion
          mechanisms that can get past firewalls. FireEye verifies that
          APT33&#39;s operations are linked with Iranian national goals,
          principally focusing on espionage and the theft of intellectual
          property to boost Iran&#39;s technological and industrial
          capabilities.
          <a href="#cite7" className="text-purple-300">
            <sup>7</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default FINDINGS;
