import React from "react";
import { Meteors } from "../ui/meteors";

const FINDINGS = () => {
  const data = [
    {
      id: 1,
      title: "Mandiant Report (2013)",
      description:
        "In 2013, Mandiant released a landmark report titled 'APT1: Exposing One of China’s Cyber Espionage Units,' which detailed the group's extensive cyber espionage activities and connected APT 1 to Unit 61398 of the People's Liberation Army (PLA). This report was pivotal in highlighting the scale and persistence of APT 1's operations across various industries globally.",
      reference: { id: 1, text: "1" },
    },
    {
      id: 2,
      title: "Scope of Operations",
      description:
        "APT 1 conducted sustained campaigns against 141 organizations spanning 20 industries, maintaining access to victim networks for an average of 356 days, with the longest breach lasting 1,764 days.",
      reference: { id: 1, text: "1" },
    },
    {
      id: 3,
      title: "Significance",
      description:
        "The Mandiant report was one of the first public disclosures linking a cyber espionage group to a nation-state, emphasizing the importance of transparency and accountability in cybersecurity.",
      reference: { id: 1, text: "1" },
    },
    {
      id: 4,
      title: "Other Reports and Analysis",
      description:
        "Cyware provides an overview of APT 1, highlighting its methods, targets, and implications for global cybersecurity. SecurityWeek discusses the anatomy of APTs, providing insights into how groups like APT 1 operate and sustain long-term access to compromised networks. MITRE ATT&CK offers a framework for understanding APT 1's tactics and techniques, facilitating better defense strategies.",
      references: [
        { id: 2, text: "2" },
        { id: 6, text: "6" },
        { id: 7, text: "7" },
      ],
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center my-28 relative">
      <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
        KEY FINDINGS AND PUBLIC REPORT
      </h3>
      <div className="flex gap-20 flex-wrap justify-center relative items-start">
        {data.map((item) => (
          <div key={item.id} className="w-full flex relative max-w-xs mb-4">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-purple-900 border border-purple-300 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <h4 className="font-bold text-xl text-white mb-4 relative z-50">
                {item.title}
              </h4>
              <p className="font-normal text-base text-white/70 mb-4 relative z-50">
                {item.description}
                {item.references ? (
                  <span>
                    {item.references.map((ref) => (
                      <a
                        key={ref.id}
                        href={`#cite${ref.id}`}
                        className="text-purple-300"
                      >
                        <sup>{ref.text}</sup>
                      </a>
                    ))}
                  </span>
                ) : (
                  <a
                    href={`#cite${item.reference.id}`}
                    className="text-purple-300"
                  >
                    <sup>{item.reference.text}</sup>
                  </a>
                )}
              </p>
              <Meteors number={25} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FINDINGS;
