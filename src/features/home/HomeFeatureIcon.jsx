import React from "react";
export default function HomeFeatureIcon(){
    const stripContent = [
        {
            iconSrc : "./public/assets/icons/e-commerce-icon.svg",
            title : "72+",
            description : "Hour Prototype Guarantee"
        },
        {
            iconSrc : "./public/assets/icons/e-commerce-icon.svg",
            title : "100+",
            description : "Brands Transformed"
        },
        {
            iconSrc : "./public/assets/icons/e-commerce-icon.svg",
            title : "10+",
            description : "Years of Pixel-Perfect Craft"
        }
    ]
    return(
        <div className="home-strip-wrapper__main">
            <div className="home-strip__outer flex flex-col items-start justify-center gap-8 px-12 sm:flex-row sm:items-center sm:justify-evenly">
                    {stripContent.map((strip,index)=>{
                        return(
                            <div className="home-strip__inner flex items-center gap-4" key={index}>
                                <div className="strip-icon-wrapper bg-[#f3f3f3] p-8 border-transparent rounded-full">
                                    <img className="strip-icon" src={strip.iconSrc} alt="" />
                                </div>
                                <div className="strip-content-wrapper flex flex-col justify-center gap-4">
                                    <div className="strip-title text-4xl font-semibold">{strip.title}</div>
                                    <div className="strip-description">{strip.description}</div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}