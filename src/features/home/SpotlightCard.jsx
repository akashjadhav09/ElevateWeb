import React from "react";

export default function SpotlightCard() {

  const SpotlightCardData = [
        {
            imgSrc: "./assets/images/homepageNarr1.jpg",
            Title: "AI Analytics Platform",
            label: [
                { text: "Machine Learning" },
                { text: "Predictive Insights" },
            ],
        },
        {
            imgSrc: "./assets/images/homepageNarr1.jpg",
            Title: "HealthTech SaaS Dashboard",
            label: [
                { text: "Medical UX" },
                { text: "HIPAA Compliant" },
            ],
        },
        {
            imgSrc: "./assets/images/homepageNarr1.jpg",
            Title: "EdTech Learning Portal",
            label: [
                { text: "Gamified Learning" },
                { text: "Progress Tracking" },
            ],
        },
        {
            imgSrc: "./assets/images/homepageNarr1.jpg",
            Title: "E-commerce Mobile App",
            label: [
                { text: "UI/UX Design" },
                { text: "Conversion Optimized" },
            ],
        }
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-6 xl:gap-20 p-4 bg-[#12141d]">
            {SpotlightCardData.map((item, index) => (
                <div
                key={index}
                className={`w-full sm:w-[48%] md:w-[40%] md:h-[40%] xl:w-[35%] bg-white rounded-xl overflow-hidden transition ${index %2 !== 0 ? 'mt-20' : ''}`}
                >
                <img
                    src={item.imgSrc}
                    alt={item.Title}
                    className="w-full h-full object-cover"
                />
                <div className="py-6 bg-[#12141d] text-white">
                    <h3 className="text-lg font-semibold mb-2">{item.Title}</h3>
                    <div className="flex flex-wrap gap-2">
                    {item.label.map((label, labelIndex) => (
                        <span
                        key={labelIndex}
                        className="px-3 py-1 text-sm rounded-full border border-white"
                        >
                        {label.text}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
            ))}
        </div>
    );
}
