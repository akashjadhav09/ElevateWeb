import React from "react";

export default function HomePageNarrative({titleText, bodyText, imgSrc}){
    return(
        <div className="home-narrative-wrapper__main">
            <div className="home-narrative-wrapper__outer">
                <div className="home-narrative-wrapper__inner w-full py-8 px-20">
                    <div className="narrative-content-wrapper__outer flex gap-28 border-b border-gray-400 py-16">
                        <div className="narrative-content-wrapper md:w-1/2">
                            <div className="title-text text-5xl">{titleText}</div>
                            <div className="body-text text-lg mt-8">{bodyText}</div>
                            <button className="border border-black rounded-full mt-8 p-4 hover:bg-[#b0e600] hover:border-transparent">Know More About Us</button>
                        </div>

                        <div className="narrative-image-wrapper w-[40%]">
                            <div className="image-wrapper__inner w-[95%]">
                                <img className="h-full w-full rounded-3xl" src={imgSrc} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}