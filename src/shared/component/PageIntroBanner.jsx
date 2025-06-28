import React from "react";

export default function PageIntroBanner(){
    return(
        <div className="page-intro-banner__main">
            <div className="page-intro-banner__outer">
                <div className="navbar-content-section__outer bg-[#12141d] text-white relative z-1 mt-[-10em]  flex flex-col items-center">
                    <div className="navbar-content__section text-center px-4">
                        <div className="title-text text-6xl mb-4">
                        Crafted Works, Bold Results
                        </div>
                        <div className="body-text text-lg">
                        Showcasing creative projects that deliver impact and inspire growth.
                        </div>
                    </div>

                    <div className="navbar-image__section top-full -translate-y-1/2 z-20 mt-56">
                        <img
                        className="navbar-image w-[500px] object-cover rounded-lg shadow-lg"
                        src="./public/assets/images/homepageNarr1.jpg"
                        alt="Hero Visual"
                        />
                    </div>
                </div>
                <div className="navbar-bottom-wapper bg-white h-[200px] relative -mt-72"></div>
            </div>
        </div>
    )
}