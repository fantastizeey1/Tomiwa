import React from "react";
import { Meteors } from "../ui/meteors";

const TTPs = () => {
  const data = [
    {
      id: 1,
      title: "Spear Phishing",
      description:
        "APT28 used highly targeted spear-phishing campaigns to deliver malware, often using themes related to geopolitical events to lure targets. These attacks frequently involved malicious email attachments or links.s Fancy Bear is known to frequently use Zebrocy to assist in this task, a trojan malware containing a set of downloaders, droppers, and backdoors. ",
      reference: { id: 11, text: "11" },
    },
    {
      id: 2,
      title: "Zero-Day Exploits",
      description:
        "The group employed custom malware families such as BACKDOOR.BARKIOFDOG and BACKDOOR.DOGCALL, designed to establish persistent access and facilitate data exfiltration.",
      reference: { id: 1, text: "1" },
    },
    {
      id: 3,
      title: "Custom Malware",
      description:
        "Custom malware was a powerful tool for APT28. They deployed malware, tailored to evade traditional security measures. Their arsenal included X-Agent (CHOPSTICK) and X-Tunnel . X-Agenh was used as a versatile backdoor to maintain continuous remote access to compromised systems.{10} X-Tunnel was used as a network tunneling tool for secure data exfiltration. ",
      reference: { id: 8, text: "8" },
    },
    {
      id: 4,
      title: "Watering Hole Attacks",
      description:
        "APT28 employed the watering hole attack, compromising websites frequented by their intended targets. They injected malicious scripts into the site’s code to deliver malware via drive-by downloads.",
      reference: { id: 9, text: "9" },
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
