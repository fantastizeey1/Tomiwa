import React from "react";
import { Meteors } from "../ui/meteors";

const Cdm = () => {
  const data = [
    {
      id: 1,
      title: "Patch Management",
      content:
        "Regularly apply security patches and updates to all systems and software to mitigate vulnerabilities that could be exploited by APT 29. Vulnerability management programs should be robust and proactive.",
      reference: { id: 13, text: "13" },
    },
    {
      id: 2,
      title: "Email Security",
      content:
        "Deploy email filtering and anti-phishing solutions to detect and block spear-phishing attempts, which are commonly used by APT 29 for initial access. Conduct regular security awareness training to educate employees about phishing threats.",
      reference: { id: 8, text: "8" },
    },
    {
      id: 3,
      title: "Monitoring and Detection",
      content:
        "Implement robust monitoring tools and establish Security Operations Centers (SOCs) to detect unauthorized activities and anomalies in real-time. Use Security Information and Event Management (SIEM) systems for centralized log analysis and correlation.",
      reference: { id: "", text: "" },
    },
    {
      id: 4,
      title: "Credential Management",
      content:
        "Enforce strong password policies, implement multi-factor authentication (MFA) across all systems and services, and regularly rotate credentials to minimize the risk of credential theft by APT 29.",
      reference: { id: 14, text: "14" },
    },
    {
      id: 5,
      title: "Threat Intelligence",
      content:
        "Subscribe to threat intelligence services to stay updated on APT 29 tactics, techniques, and procedures (TTPs). Use this intelligence to enhance detection capabilities and adjust defensive strategies accordingly.",
      reference: { id: 7, text: "7" },
    },
    {
      id: 6,
      title: "Legal and Policy Measures",
      content:
        "Ensure compliance with relevant data protection laws and regulations. Implement policies and procedures for handling sensitive information and responding to data breaches caused by APT 29.",
      reference: { id: "", text: "" },
    },
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
                <a
                  href={`#cite${data.reference.id}`}
                  className="text-purple-300"
                >
                  <sup>{data.reference.text}</sup>
                </a>
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
