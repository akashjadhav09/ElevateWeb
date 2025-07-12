import React from "react";

export default function PageIntroBanner({title, body, src}){
    return(
        <div className="page-intro-banner__main">
            <div className="page-intro-banner__outer">
                <div className="navbar-content-section__outer bg-[#12141d] text-white relative z-1 lg:mt-[-10em]  flex flex-col items-center">
                    <div className="navbar-content__section text-center px-4 md:w-1/2 lg:md:w-1/2">
                        <div className="title-text text-6xl mb-4 pt-2">{title}</div>
                        <div className="body-text text-lg">{body}</div>
                    </div>

                    <div className="navbar-image__section top-full -translate-y-1/2 z-20 mt-56 px-4">
                        <img
                        className="navbar-image w-[500px] object-cover rounded-lg shadow-lg"
                        src={src}
                        alt="Hero Visual"
                        />
                    </div>
                </div>
                <div className="navbar-bottom-wapper mt-4 bg-white lg:h-[290px] relative lg:-mt-72"></div>
            </div>
        </div>
    )
}