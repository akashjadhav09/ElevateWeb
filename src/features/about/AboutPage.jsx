import React from "react";

import PageIntroBanner from "../../shared/component/PageIntroBanner";
import HowWeWork from "./HowWeWorkCard";
import Narrative from "../../shared/component/Narrative";
import AboutUsNarrative from "./AboutUsNarrative";

export default function AboutUsPage(){
    return(
        <>
            <PageIntroBanner 
                title = "We Design & Build Digital Experiences That Move the Needle"
                body = "We’re not your average design shop. We’re a strategic creative studio that blends jaw-dropping aesthetics with ruthless functionality. Since 2017, we’ve helped 100+ startups, agencies, and scale-ups transform their ideas into high-performing websites, apps, and brands that stand out and convert."
                src = "./public/assets/images/homepageNarr1.jpg"
            />
            <HowWeWork />
            <Narrative />
            <AboutUsNarrative />
        </>
    )
}