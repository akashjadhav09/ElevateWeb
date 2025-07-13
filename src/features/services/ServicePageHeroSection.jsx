import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function ServicePageHeroSection({mainTitle, subTitle, src}) {
  return (
    <div className="py-16 px-4 flex flex-col items-center">
      <div className="text-center max-w-3xl mb-12 px-4">
        <div className="text-4xl md:text-6xl mb-4">
          {mainTitle}
        </div>
        <p className="text-lg md:text-xl leading-relaxed">
            {subTitle}
        </p>
      </div>

      <div className="w-full max-w-6xl rounded-2xl overflow-hidden mb-10">
        <img
          src={src}
          alt="Team discussing design"
          className="w-full object-cover"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 md:gap-36 text-center">
        {[
          "Fixed Pricing",
          "2-Week Shipment",
          "Money Back Guarantee",
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-2 text-lg">
            <FaCheckCircle className="text-lime-400 text-xl" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
