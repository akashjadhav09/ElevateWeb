import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

export default function HowWeWork(){

    const howWeWorkCardData = [
        {
            title : "Discover",
            body : "We dive deep into your goals, and 'must-haves' to craft a battle plan.",
            buttonText : "Step 1"
        },
        {
            title : "Design & Build",
            body : "You’ll see real work fast—with checkpoints to refine every detail.",
            buttonText : "Step 2"
        },
        {
            title : "Launch & Grow",
            body : "We don’t just deliver—we optimize it for the long-term success.",
            buttonText : "Step 3"
        }
    ]
    return(
        <div className="how-we-work-wrapper__main">
            <div className="title-text text-3xl md:text-5xl px-4 md:px-0 text-center mb-4">
                How We Work: Painless, Proven, Pixel-Perfect
            </div>

            <div className="how-we-work-wrapper__outer flex flex-wrap justify-center gap-6 my-16">
                {howWeWorkCardData.map((item,index)=>
                    (
                        <div className="how-we-work-wrapper__inner flex flex-col items-center gap-4 bg-white p-6 rounded-xl border border-gray-300 shadow-sm w-80" key={index}>
                            <div className="icon-wrapper bg-gray-900 text-white p-6 rounded-full">
                                <FaStarOfLife className="text-2xl text-violet-300" />
                            </div>
                            <div className="content-wrapper flex flex-col items-center text-center">
                                <p className="title-text text-2xl mb-2">{item.title}</p>
                                <p className="body-text text-lg text-gray-600">
                                    {item.body}
                                </p>
                            </div>
                            <button className="mt-2 text-base text-violet-300 font-medium bg-gray-900 px-6 py-1 rounded-full">
                               {item.buttonText}
                            </button>
                        </div>
                    )
                )} 
            </div>
        </div>

    )
}