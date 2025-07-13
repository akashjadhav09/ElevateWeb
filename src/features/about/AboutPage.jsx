import React from "react";

import PageIntroBanner from "../../shared/component/PageIntroBanner";
import HowWeWork from "./HowWeWorkCard";
import Narrative from "../../shared/component/Narrative";
import AboutUsNarrative from "./AboutUsNarrative";
import Blinds from "../../shared/component/Blinds";

export default function AboutUsPage(){
    return(
        <>
            <PageIntroBanner 
                title = "Crafted Works, Bold Results"
                body = "Showcasing creative projects that deliver impact and inspire growth."
                src = "./public/assets/images/homepageNarr1.jpg"
            />
            <HowWeWork />
            <Narrative />
            <AboutUsNarrative />
            <Blinds />
        </>
    )
}