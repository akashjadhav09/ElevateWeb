import React from "react";

export default function HiringStrip(){
    const hireRoleContent = [
        {
            id : "01",
            title : "UI/UX Designer",
            location : "remote",
            availblePosition : "2 Position",
            buttonLabel : "Apply Now"
        },
        {
            id : "02",
            title : "Front-End Engineer",
            location : "remote",
            availblePosition : "2 Position",
            buttonLabel : "Apply Now"
        },
        {
            id : "03",
            title : "Content Strategist",
            location : "remote",
            availblePosition : "2 Position",
            buttonLabel : "Apply Now"
        },
        {
            id : "04",
            title : "Growth Marketing Lead",
            location : "remote",
            availblePosition : "2 Position",
            buttonLabel : "Apply Now"
        }
    ]
    return(
        <div className="hiring-strip-main">
            <div className="title-text text-center text-6xl my-8">"We're Hiring!"</div>
            <div className="hiring-strip-outer">
                <div className="hiring-strip-inner">

                </div>
            </div>
        </div>
    )
}