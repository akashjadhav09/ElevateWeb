import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ServiceProcessCard({processCardMainTitle, data}) {
  return (
    <div className="bg-[#f3f3f3] px-4 py-12 text-center">
      <div className="text-4xl md:text-6xl mb-4 font-semiboldtext-[#0f0f0f]">{processCardMainTitle}</div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto">
        {data.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-8 flex-1 text-center border border-gray-200"
          >
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-[#0f0f0f] rounded-full flex items-center justify-center">
                <FaCheck className="text-lime-400 text-lg" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#0f0f0f]">
              {step.title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}