import React from "react";

import ServicePageIntoBanner from "../../shared/component/ServicePageIntoBanner";
import NarrativeWithText from "../../shared/component/NarrativeWithText";

export default function UiUxDevelopmentPage(){

    const narrtiveMainTitle = "Our UI/UX Design Superpowers ";
    const NarrativeData = [
        {
            title : "Psychology-Driven Design",
            body : "We apply proven principles from behavioral science to create designs that guide user behavior, reduce friction, and drive better outcomes."
        },
        {
            title : "Real-User Testing",
            body : "We validate every prototype with 5–10 real users from target audience, uncovering actionable insights before a single line of code is written."
        },
         {
            title : "Dev-Ready Handoffs",
            body : "Developers receive clean, pixel-perfect Figma files complete with auto-generated specs, assets, and documentation."
        }
    ]
    return(
        <>
            <ServicePageIntoBanner 
                title = "UI/UX Design"
                body = "We craft user experiences that drive action, not just admiration. Whether it’s a conversion-focused SaaS dashboard or a mobile app that users can’t put down, our process blends behavioral psychology with pixel-perfect execution."
                src = "./public/assets/images/homepageNarr1.jpg"
            />

            <NarrativeWithText 
                narrtiveMainTitle = {narrtiveMainTitle}
                narrativeData = {NarrativeData}
                src = "./public/assets/images/homepageNarr1.jpg"
            />
        </>
    )
}

