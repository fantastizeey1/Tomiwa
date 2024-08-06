import React from "react";
import { Meteors } from "../ui/meteors";

const Cdm = () => {
  const data = [
    {
      id: 1,
      title: "Enhanced Cyber Hygiene",
      content:
        "Enhanced Cyber Hygiene: To reduce initial infection vectors, regularly patch and update systems, use multi-factor authentication, and train staff on phishing attacks",
      reference: "",
    },
    {
      id: 2,
      title: "Advanced Threat Detection",
      content:
        "Advanced Threat Detection: APT 28 actions can be found and addressed by using advanced threat detection and response techniques, such as endpoint detection and response (EDR) and security information and event management (SIEM) systems.",
      reference: "",
    },
    {
      id: 3,
      title: "Threat Intelligence Sharing",
      content:
        "Threat Intelligence Sharing: Information about APT 28 techniques and indicators of compromise (IOCs) can be obtained promptly by working with other organizations and taking part in threat intelligence sharing efforts.",
      reference: "",
    },
    {
      id: 4,
      title: "Incident Response Planning",
      content:
        "Incident Response Planning: Creating and testing incident response procedures on a regular basis guarantees that companies are ready to address and recover from APT 28 incursions (NIST, 2018).",
      reference: "",
    },
    // {
    //   id: 5,
    //   title: "Employee Training",
    //   content:
    //     "Employee Training: Providing training and awareness programs to educate employees about phishing tactics and cybersecurity best practices.",
    //   reference: "",
    // },
  ];

  return (
    <section className="flex flex-col justify-center items-center my-28">
      <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
        COUNTERMEASURES AND DEFENSE MECHANISMS{" "}
      </h3>
      <div className="flex gap-20 flex-wrap justify-center items-start">
        {data.map((data) => (
          <div key={data.id} className="w-full flex  relative max-w-xs mb-4">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-purple-900 border border-purple-300 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <h4 className="font-bold text-xl text-white mb-4 relative z-50">
                {data.title}
              </h4>
              <p className="font-normal text-base text-white mb-4 relative z-50">
                {data.content}
                {data.reference}
              </p>
              <Meteors number={30} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cdm;
