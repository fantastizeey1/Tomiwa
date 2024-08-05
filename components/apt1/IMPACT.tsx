import React from "react";
import { Meteors } from "../ui/meteors";

const Data = [
  {
    id: 1,
    title: "Intellectual Property Theft",
    description:
      "APT 1's operations resulted in substantial intellectual property theft, affecting the competitiveness of targeted organizations and potentially leading to significant economic losses.",
    reference: { id: 9, text: "9" },
  },
  {
    id: 2,
    title: "International Tensions",
    description:
      "The exposure of APT 1 heightened tensions between China and other nations, particularly the United States, highlighting the geopolitical dimensions of cyber espionage.",
    reference: { id: 5, text: "5" },
  },
];

const IMPACT = () => {
  return (
    <section className="flex flex-col justify-center items-center my-28">
      <h3 className="text-center text-gradient text-[30px] w-full mb-10 ">
        IMPACT AND IMPLICATIONS
      </h3>
      <div className="flex gap-20 flex-wrap justify-center items-start">
        {Data.map((Data) => (
          <div key={Data.id} className="w-full flex  relative max-w-xs mb-4">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-purple-900 border border-purple-300 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <h4 className="font-bold text-xl text-white mb-4 relative z-50">
                {Data.title}
              </h4>
              <p className="font-normal text-base text-white/70 mb-4 relative z-50">
                {Data.description}
                <a
                  href={`#cite${Data.reference.id}`}
                  className="text-purple-300"
                >
                  <sup>{Data.reference.text}</sup>
                </a>
              </p>
              <Meteors number={15} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IMPACT;
