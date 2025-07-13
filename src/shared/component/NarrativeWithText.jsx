import React from "react";

export default function NarrativeWithText({narrtiveMainTitle, narrativeData, src}){
    return(
        <div className="narrative-with-text__main py-12">
            <div className="narrative-with-text__outer">
                <div className="narrative-with-text__inner md:flex justify-between">

                    <div className="poster-wrapper__outer m-2 md:m-0 md:w-[50%]">
                        <img
                            className="navbar-image w-[500px] md:w-full object-cover shadow-lg"
                            src={src}
                            alt="Hero Visual"
                        />
                    </div>

                     <div className="content-wrapper__outer px-4 md:w-[45%] md:mx-4 md:mt-8">
                        <div className="title-text text-3xl md:text-4xl mb-4 pt-2 text-start">{narrtiveMainTitle}</div>
                        <div className="content-wrapper-inner">
                            {narrativeData.map((item, index)=>(
                                <div className="content-wrapper border-b border-gray-500 pb-4 mb-4" key={index}>
                                    <div className="title-text text-base font-semibold md:text-2xl mb-1 pt-2 text-left md:text-start">{item.title}</div>
                                    <div className="body-text text-base text-left text-gray-500 md:text-lg">{item.body}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}