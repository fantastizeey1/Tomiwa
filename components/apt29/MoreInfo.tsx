import React from "react";

const MoreInfo = () => {
  return (
    <section className="flex flex-col gap-20 justify-center items-center relative my-28 pt-10 ">
      <div className="flex flex-col justify-center items-center mb-10">
        <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
          ATTRIBUTION CHALLENGES
        </h3>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          <span className="font-bold">Sophistication and OpSec:</span> APT29 is
          known for its advanced operational security (OpSec) practices, which
          include the use of sophisticated obfuscation techniques, encrypted
          communications, and meticulous operational planning. These practices
          make it challenging to detect and attribute their activities
          accurately.
          <a href="#cite12" className="text-purple-300">
            <sup>12</sup>
          </a>
        </p>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          <br className="mb-3" />
          <span className="font-bold">Infrastructure Obfuscation:</span> The
          group frequently used a variety of infrastructure, such as compromised
          servers, proxy networks, and anonymization services like Tor, to hide
          their origins and make tracing their activities back to their source
          difficult.
          <a href="#cite5" className="text-purple-300">
            <sup>5</sup>
          </a>
        </p>

        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          <span className="font-bold">Overlap with Other Threat Actors:</span>{" "}
          APT29&#39;s operations may overlap with those of other APT groups,
          particularly other Russian-affiliated threat actors. This overlap can
          complicate efforts to definitively attribute specific attacks solely
          based on targeting or technical indicators.
          <a href="#cite3" className="text-purple-300">
            <sup>3</sup>
          </a>
        </p>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          <span className="font-bold">Technical Challenges:</span> While
          technical indicators such as malware signatures, network traffic
          patterns, and behavioral analysis can provide insights into
          APT29&#39;s activities, they do not always provide definitive proof of
          attribution. Sophisticated threat actors continuously evolve their
          techniques to evade detection and attribution.
          <a href="#cite3" className="text-purple-300">
            <sup>3</sup>
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
          TARGETED INDUSTRIES
        </h3>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl">
          APT29 targeted various industries, including U.S. and European
          government agencies, as noted in the APT Compromise report by CISA
          <a href="#cite8" className="text-purple-300">
            <sup>8</sup>
          </a>{" "}
          . The healthcare sector was also a significant focus, particularly
          during the COVID-19 pandemic, with APT29 targeting vaccine research.
          <a href="#cite9" className="text-purple-300">
            <sup>9</sup>
          </a>{" "}
          Furthermore, the group aimed its cyber activities at critical
          infrastructure sectors, such as energy and utilities.
        </p>
      </div>
    </section>
  );
};

export default MoreInfo;
