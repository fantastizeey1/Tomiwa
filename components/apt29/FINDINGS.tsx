import React from "react";

const FINDINGS = () => {
  return (
    <section className="flex flex-col justify-center items-center my-28 relative">
      <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
        KEY FINDINGS AND PUBLIC REPORT
      </h3>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          F-SECURE (2015)
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl leading-7 font-light text-[13px]">
          F-Secure documented the tactics, techniques and procedures (TTPs)
          employed by APT 29, as well as the threat vectors. Their report
          included the technical breakdowns of malware families associated with
          the group, such as Sofacy and CozyDuke. This covered how the malware
          operates, its infection vectors, and its persistence mechanisms. Their
          research also highlighted the other sophisticated methods used by the
          group, such as spear-phishing emails and exploitation of software
          vulnerabilities.
          <a href="#cite10" className="text-purple-300">
            <sup>10</sup>
          </a>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          MITRE ATT&amp;CK
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl leading-7 text-[13px] font-light">
          APT 29&apos;s tactics and techniques are extensively documented in the
          MITRE ATT&amp;CK knowledge base, which provides a comprehensive
          overview of their methods and helps organizations understand and
          defend against their attacks.
          <a href="#cite5" className="text-purple-300">
            <sup>5</sup>
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          Federal Bureau of Investigation (FBI) &amp; Department of Homeland
          Security (DHS)
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl leading-7 text-[13px] font-light">
          After the Democratic National Committee (DNC) hack in 2016, the
          Federal Bureau of Investigation (FBI), with the Department of Homeland
          Security (DHS), released an analysis report regarding APT 29&apos;s
          activities, particularly in the context of election interference and
          political espionage. They provided technical details regarding the
          tools and infrastructure used by the Russian civilian and military
          Intelligence Services (RIS) to compromise and exploit networks and
          endpoints associated with the U.S. election. This helped raise
          awareness about the group&apos;s activities and potential impacts.
          <a href="#cite13" className="text-purple-300">
            <sup>13</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default FINDINGS;
