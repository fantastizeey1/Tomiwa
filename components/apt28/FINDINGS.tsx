import React from "react";

const FINDINGS = () => {
  return (
    <section className="flex flex-col justify-center items-center my-28 relative">
      <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
        KEY FINDINGS AND PUBLIC REPORT
      </h3>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          Mandiant Report (2013)
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl leading-7 font-light text-[13px]">
          In 2013, Mandiant released a landmark report titled &quot;APT1:
          Exposing One of China&apos;s Cyber Espionage Units,&quot; which
          detailed the group&apos;s extensive cyber espionage activities. The
          report connected APT 1 to Unit 61398 of the People&apos;s Liberation
          Army (PLA), providing evidence of a direct link to the Chinese
          military. This report was pivotal in highlighting the scale and
          persistence of APT 1&apos;s operations across various industries
          globally.{" "}
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
          <br className="mb-5" />
          <span className="font-bold text-[20px]">Scope of Operations: </span>
          APT 1 conducted sustained campaigns against 141 organizations spanning
          20 industries, maintaining access to victim networks for an average of
          356 days, with the longest breach lasting 1,764 days.
          <a href="#cite1" className="text-purple-300">
            <sup>1</sup>
          </a>
          <br className="mb-2" />
          <span className="font-bold text-[20px]">Significance: </span>
          The Mandiant report was one of the first public disclosures linking a
          cyber espionage group to a nation-state, emphasizing the importance of
          transparency and accountability in cybersecurity.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-start text-[30px] w-full mb-10 ">
          Other Reports and Analysis
        </h4>
        <p className=" shadow-lg shadow-purple-700 w-[70%] p-12 rounded-xl leading-7 text-[13px] font-light">
          <span className="font-bold text-[20px]">Cyware </span>provides an
          overview of APT 1, highlighting its methods, targets, and implications
          for global cybersecurity.
          <a href="#cite2" className="text-purple-300">
            <sup>2</sup>
          </a>
          <br className="mb-5" />
          <span className="font-bold text-[20px]">SecurityWeek </span>discusses
          the anatomy of APTs, providing insights into how groups like APT 1
          operate and sustain long-term access to compromised networks.
          <a href="#cite6" className="text-purple-300">
            <sup>6</sup>
          </a>
          <br className="mb-2" />
          <span className="font-bold text-[20px]">MITRE ATT&CK </span>
          offers a framework for understanding APT 1&apos;s tactics and
          techniques, facilitating better defense strategies.{" "}
          <a href="#cite7" className="text-purple-300">
            <sup>7</sup>
          </a>
        </p>
      </div>
    </section>
  );
};

export default FINDINGS;
