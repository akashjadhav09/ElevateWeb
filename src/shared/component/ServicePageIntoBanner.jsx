import React from "react";

export default function ServicePageIntoBanner({title, body, buttonText, src}){
    return(
        <div className="service-page-into-banner__main bg-[#12141d] text-white">
            <div className="service-page-intro-banner__outer">
                <div className="service-page-intro-banner__inner md:flex items-center justify-center w-full p-4 md:p-8 md:px-40">

                    <div className="content-wrapper__outer px-4 md:w-[45%] md:mx-4">
                        <div className="title-text text-4xl md:text-6xl mb-4 pt-2 text-center md:text-start">{title}</div>
                        <div className="body-text text-lg">{body}</div>
                        <div className="btn-wrapper text-center md:text-start">
                            <button className="border rounded-full my-8 py-3 px-4 bg-[#b0e600] text-gray-950 border-transparent">{buttonText}</button>
                        </div>
                    </div>
                    <div className="poster-wrapper__outer m-2">
                        <img
                            className="navbar-image w-[500px] object-cover rounded-lg shadow-lg"
                            src={src}
                            alt="Hero Visual"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}