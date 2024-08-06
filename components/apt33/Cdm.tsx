import React from "react";
import { Meteors } from "../ui/meteors";

const Cdm = () => {
  const data = [
    {
      id: 1,
      title: "Employee Training and Awareness",
      content:
        "Regularly train employees to recognize and report phishing attempts and other social engineering tactics.",
      reference: "",
    },
    {
      id: 2,
      title: "APatch Management",
      content:
        "Ensure timely patching of software and hardware vulnerabilities to reduce the attack surface.",
      reference: "",
    },
    {
      id: 3,
      title: "Endpoint Security",
      content:
        "Deploy advanced endpoint security solutions that can detect and respond to malware and other threats.",
      reference: "",
    },
    {
      id: 4,
      title: "Threat Intelligence",
      content:
        "Utilize threat intelligence to stay informed about the latest TTPs used by APT33 and other threat actors, enabling proactive defense measures.",
      reference: "",
    },
    {
      id: 5,
      title: "Access Controls",
      content:
        "Implement strict access controls and regularly review user privileges to minimize the risk of unauthorized access.",
      reference: "",
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
