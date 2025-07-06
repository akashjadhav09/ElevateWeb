import React from "react";

export default function HiringStrip(){
    const hireRoleContent = [
        {
            id : "01",
            title : "UI/UX Designer",
            location : "Remote",
            availblePosition : "2 Position",
            buttonLabel : "Apply Now"
        },
        {
            id : "02",
            title : "Front-End Engineer",
            location : "Remote",
            availblePosition : "2 Position",
            buttonLabel : "Apply Now"
        },
        {
            id : "03",
            title : "Content Strategist",
            location : "Remote",
            availblePosition : "2 Position",
            buttonLabel : "Apply Now"
        },
        {
            id : "04",
            title : "Growth Marketing Lead",
            location : "Remote",
            availblePosition : "2 Position",
            buttonLabel : "Apply Now"
        }
    ]
    const mlOffsets = ["", "-ml-[2em]", "-ml-[1.7em]", "-ml-[4em]"];
    return(
        <div className="hiring-strip-main">
            <div className="title-text text-center text-6xl my-8">We're Hiring!</div>
            <div className="hiring-strip-outer w-full flex flex-col items-center justify-center mb-16">
                {hireRoleContent.map((item, index)=>(
                    <div className="hiring-strip-inner w-[70%]" key={index}>
                        <div className="hiring-strip-content-wrapper border-b border-gray-300 p-4 flex items-center justify-between">
                            <div className="title-id-wrapper flex items-center justify-center gap-3">
                                <div className="content-id">{item.id}</div>
                                <div className="content-title">{item.title}</div>
                            </div>
                            <div className={`location-wrapper flex items-center justify-center gap-8 ${mlOffsets[index] || ''}`}>
                                <div className="content-loctaion">{item.location}</div>
                                <div className="content-availble-position">{item.availblePosition}</div>
                            </div>
                            <button className="border border-gray-300 rounded p-2">{item.buttonLabel}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}