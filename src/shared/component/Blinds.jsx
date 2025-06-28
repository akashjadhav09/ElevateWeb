import React, { useState } from "react";

export default function Blinds() {
  const sectionLabel = "The Brains Behind";

  const blindsData = [
    {
      imageSrc: "./assets/images/blinds-img-1.jpg",
      name: "Alex Chen",
      designation: "Co-Founder",
    },
    {
      imageSrc: "./assets/images/blinds-img-2.jpg",
      name: "Jordan Bennett",
      designation: "Creative Director",
    },
    {
      imageSrc: "./assets/images/blinds-img-3.jpg",
      name: "Ronny Jackson",
      designation: "Delivery Manager",
    },
    {
      imageSrc: "./assets/images/blinds-img-3.jpg",
      name: "Taylor Morgan",
      designation: "Head of Client Strategy",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="blinds-widget__main flex flex-col items-center justify-center cursor-pointer bg-[#f3f3f3]">
      <div className="title-text text-center text-5xl pt-8 mb-8">{sectionLabel}</div>

      <div className="blinds-widget__outer flex items-center justify-center gap-4 w-full max-w-6xl px-4 pb-20">
        {blindsData.map((item, index) => (
          <div
            key={index}
            className={`blinds-widget__inner transition-all duration-500 overflow-hidden rounded-xl border border-gray-300 ${
              hoveredIndex === index
                ? "w-full"
                : "w-[30%]"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="blinds-conter__outer relative">
              <div className="blinds-image-wrapper border rounded-lg overflow-hidden">
                <img
                  className="blinds-image border rounded-lg object-cover w-full h-[400px]"
                  src={item.imageSrc}
                  alt=""
                />
              </div>

              <div
                className={`blinds-content-wrapper__inner absolute bottom-4 left-4 right-4 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="name-text text-gray-900 text-2xl font-semibold">{item.name}</p>
                <p className="designation-text text-gray-900 text-sm">{item.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
