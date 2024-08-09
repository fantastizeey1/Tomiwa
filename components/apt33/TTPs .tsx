import React from "react";
import { Meteors } from "../ui/meteors";

const TTPs = () => {
  const data = [
    {
      id: 1,
      title: "Phishing",
      description:
        "APT33 targeted workers with aviation-related employment with spear phishing emails. These emails featured links to malicious HTML application (.hta) files along with recruitment-themed baits. The job descriptions and links to genuine job advertisements on well-known employment websites that would be pertinent to the targeted persons were contained in the .hta files.",
      reference: { id: 7, text: "7" },
    },
    {
      id: 2,
      title: "Custom Malware",
      description:
        "APT33 used custom-developed malware, such as the Shamoon wiper and ShapeShift (also known as StoneDrill ) malware, to conduct espionage and disruptive operations. These tools are designed to evade detection and persist within target networks.",
      reference: { id: 2, text: "2" },
    },
    {
      id: 3,
      title: "Data Exfiltration",
      description:
        "The group employs various methods to exfiltrate data, including the use of encrypted channels and staging data on compromised servers before transfer.",
      reference: { id: 4, text: "4" },
    },
    {
      id: 4,
      title: "Publicly Available Exploits",
      description:
        "Whenever possible, APT33 uses publicly available exploits and tools such as Mimikatz, Procdump, and Ruler.",
      reference: { id: 3, text: "3" },
    },
    {
      id: 5,
      title: "Custom Tools",
      description:
        "APT33 developed several custom tools. For instance, TurnedUp is a backdoor that can download and upload files, report information on the targeted system, and create a reverse shell. DropShot is a dropper that can drop and launch tools such as TurnedUp and ShapeShift. Powerton is a PowerShell-based implant that uses encrypted C2 and a full suite of persistence mechanisms.",
      reference: { id: 4, text: "4" },
    },
  ];

  return (
    <section className="w-full min-h-screen flex  flex-col justify-center items-center my-10">
      <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
        TACTICS, TECHNIQUES AND PROCEDURES(TTPs)
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
                {data.description}
                <a
                  href={`#cite${data.reference.id}`}
                  className="text-purple-300"
                >
                  <sup>{data.reference.text}</sup>
                </a>
              </p>
              <Meteors number={40} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TTPs;
