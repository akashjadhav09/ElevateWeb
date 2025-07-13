import React, { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

export default function ServiceAccordion({ accordionMainTitle, accordionData }) {
  const [currentOpenIndex, setIsCurrentOpenIndex] = useState(null);

  const handleTitleClick = (index) => {
    setIsCurrentOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="service-accordion__main bg-[#f1f1f1]">
      <div className="service-accordion__outer py-8">
        <div className="title-text text-3xl text-center mb-6 md:text-4xl">
          {accordionMainTitle}
        </div>

        <div className="service-accordion__inner">
          {accordionData.map((item, index) => (
            <div className={`content-wrapper bg-white transition-all duration-500 ease-in-out overflow-hidden mx-4 md:mx-64 border border-gray-200 mb-4
                             ${currentOpenIndex === index ? 'pb-4 h-[185px] md:h-[135px]' : 'h-[65px]'}`} key={index}>
              <div
                className="flex items-center justify-between p-4 cursor-pointer transition-all"
                onClick={() => handleTitleClick(index)}
              >
                <div className="title-text text-lg md:text-xl text-left">
                  {item.title}
                </div>
                {currentOpenIndex === index ? (
                  <RiSubtractLine className="text-2xl" />
                ) : (
                  <RiAddLine className="text-2xl" />
                )}
              </div>

              <div
                className={`body-text text-base text-left transition-all duration-500 ease-in-out overflow-hidden text-gray-700 px-4 ${
                  currentOpenIndex === index
                    ? "max-h-[500px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
