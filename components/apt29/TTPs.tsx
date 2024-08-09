import React from "react";
import { Meteors } from "../ui/meteors";

const TTPs = () => {
  const data = [
    {
      id: 1,
      title: "Spear-Phishing Emails",
      description:
        "AAPT29 often uses highly targeted spear-phishing emails to gain initial access, tricking victims into revealing credentials or downloading malicious attachments.",
      reference: { id: 1, text: "1" },
    },
    {
      id: 2,
      title: "Custom Malware Tools",
      description:
        "TThey utilized sophisticated malware frameworks such as CozyDuke and SeaDuke to maintain persistence and conduct surveillance on compromised networks.",
      reference: { id: 10, text: "10" },
    },
    {
      id: 3,
      title: "Hammertoss",
      description:
        "APT29 employs Hammertoss, which uses legitimate services like Twitter and GitHub for command and control (C2) communications, aiding in evasion of detection. ",
      reference: { id: 3, text: "3" },
    },
    {
      id: 4,
      title: "PowerShell-Based Backdoors (ADVSTORESHELL)",
      description:
        "They use PowerShell-based backdoors like ADVSTORESHELL to execute commands and maintain access on compromised systems.",
      reference: { id: 5, text: "5" },
    },
    {
      id: 5,
      title: "Network Tunneling (XTunnel)",
      description:
        "APT29 employs tools like XTunnel for network tunneling and data exfiltration, securely transferring stolen data back to their command and control infrastructure.",
      reference: { id: 6, text: "6" },
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
              <Meteors number={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TTPs;
