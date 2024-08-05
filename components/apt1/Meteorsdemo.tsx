import React from "react";
import { Meteors } from "../ui/meteors";
import { points } from "@/constants";

const Meteorsdemo = () => {
  return (
    <div className="flex gap-20 flex-wrap justify-center items-start">
      {points.map((point) => (
        <div key={point.id} className="w-full flex  relative max-w-xs mb-4">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-purple-900 border border-purple-300 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h4 className="font-bold text-xl text-white mb-4 relative z-50">
              {point.title}
            </h4>
            <p className="font-normal text-base text-white mb-4 relative z-50">
              {point.description}
              <a
                href={`#cite${point.reference.id}`}
                className="text-purple-300"
              >
                <sup>{point.reference.text}</sup>
              </a>
            </p>
            <Meteors number={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meteorsdemo;
