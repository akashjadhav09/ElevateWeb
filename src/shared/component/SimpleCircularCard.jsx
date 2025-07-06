import React, { useState, useEffect } from "react";

export default function SimpleCircularCard() {
    const title = "The Brains Behind";
    const Data = [
        {
            iconSrc: "./assets/images/prof-avtar-1.png",
            title: "Ronny Jackson",
            subTitle: "Chief Executive Officer",
            whatTheySay:
            "At our core, we believe in pushing boundaries, empowering talent, and leading with purpose. Every decision reflects our mission to drive impactful, lasting innovation.",
        },
        {
            iconSrc: "./assets/images/prof-avtar-1.png",
            title: "Sam Curren",
            subTitle: "Chief Technical Officer",
            whatTheySay:
            "Technology should be intuitive, scalable, and powerful. My focus is on building robust systems that enable teams to execute fast, efficiently, and with precision.",
        },
        {
            iconSrc: "./assets/images/prof-avtar-1.png",
            title: "Taylor Morgan",
            subTitle: "Head of Operations",
            whatTheySay:
            "Efficiency is more than processes—it's culture. I optimize operations to ensure we deliver consistently, exceed expectations, and stay agile in an ever-evolving business landscape.",
        },
        {
            iconSrc: "./assets/images/prof-avtar-1.png",
            title: "Jordan Lee",
            subTitle: "Design Head",
            whatTheySay:
            "Design is how we connect emotionally. I lead our creative vision to craft experiences that are human-centered, bold, and aligned with brand and business goals.",
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if(paused) return;

        const interval = setInterval(() => {
            setIsVisible(false); 

            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % Data.length); 
                setIsVisible(true); 
            }, 500); 
        }, 4000);

        return () => clearInterval(interval);

    }, [paused,Data.length]);

    return (
        <div className="w-full flex flex-col items-center justify-center py-8 px-4">
            <div className="title-text text-6xl mb-8">{title}</div>
            <div className="w-full max-w-2xl flex items-center justify-center min-h-[500px]">
                {Data.map((item, index) => (
                    index === activeIndex && (
                        <div
                            key={index}
                            className={`transition-all duration-500 ease-in-out 
                                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"} 
                                bg-white w-[500px] h-[500px] rounded-full shadow-2xl flex flex-col items-center justify-center text-center px-6`}
                            >
                            <img
                                src={item.iconSrc}
                                alt={item.title}
                                className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 mb-4"
                            />
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <p className="text-lg text-gray-500 mb-4">{item.subTitle}</p>
                            <p className="text-sm text-gray-600 p-3">{item.whatTheySay}</p>
                        </div>
                    )
                ))}
            </div>

            <div className="mt-6 flex justify-center gap-2">
                {Data.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setIsVisible(false);
                                setTimeout(() => {
                                    setActiveIndex(index);
                                    setIsVisible(true);
                                }, 300);
                            }}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
                        ${index === activeIndex ? "bg-black scale-110" : "bg-gray-400"}`}
                    ></div>
                ))}
            </div>
        
            <button
                onClick={() => setPaused((prev) => !prev)}
                className="mt-8 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                >
                {paused ? "Resume" : "Pause"}
            </button>
        </div>
    );
}
