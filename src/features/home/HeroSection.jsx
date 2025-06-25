import React from "react";

export default function HeroSection(){
    return(
        <div className="home-hero-section__main bg-[#12141d]">
            <div className="home-hero-wrapper__outer">
                <div className="home-hero-wrapper__inner w-full flex flex-col items-center text-center p-4">
                    <div className="hero-section-content-wrapper flex flex-col items-center w-[55%]">
                        <div className="sub-title-wrapper text-white text-xl font-semibold my-4">Top  100  Design  Studios  in  INDIA</div>
                        <div className="title-wrapper text-6xl text-white my-4">Where Stunning Design Meets Flawless Functionality</div>
                        <div className="body-wrapper text-lg text-white my-4 w-[65%]">We craft high-converting websites, apps, and brands for startups, agencies, and businesses that refuse to settle for good enough.</div>
                        <button className="border rounded-full my-8 py-3 px-4 bg-[#b0e600] border-transparent">Book a Meeting</button>
                    </div>

                    <div className="hero-section-image-wrapper my-8 w-[55%]">
                        <div className="hero-image-wrapper__inner">
                            <img className="rounded-3xl w-full object-cover border-[10px] border-gray-600" src="./public/assets/images/homepageNarr1.jpg" alt="hero-section-image" />
                        </div>
                    </div>

                    <div className="hero-section-brand-name-strip__outer my-4 text-white text-4xl flex items-center justify-evenly flex-wrap w-full">
                        <p className="brand-name">Bento</p>
                        <p className="brand-name">Hundai</p>
                        <p className="brand-name">Yahmha</p>
                        <p className="brand-name">Hero</p>
                        <p className="brand-name">Bajaj</p>
                        <p className="brand-name">Kawasaki</p>
                    </div>

                </div>
            </div>
        </div>
    )
}