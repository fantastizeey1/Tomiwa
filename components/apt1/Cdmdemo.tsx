import React from "react";
import { cdmapti1 } from "@/constants";
import { Meteors } from "../ui/meteors";

const Cdmdemo = () => {
  return (
    <div className="flex gap-20 flex-wrap justify-center items-start">
      {cdmapti1.map((cdmapti1) => (
        <div key={cdmapti1.id} className="w-full flex  relative max-w-xs mb-4">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-purple-900 border border-purple-300 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h4 className="font-bold text-xl text-white mb-4 relative z-50">
              {cdmapti1.title}
            </h4>
            <p className="font-normal text-base text-white mb-4 relative z-50">
              {cdmapti1.content}
              {cdmapti1.reference}
            </p>
            <Meteors number={30} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cdmdemo;
