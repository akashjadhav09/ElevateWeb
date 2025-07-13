import React from "react";

// import PageIntroBanner from "../../shared/component/PageIntroBanner";
// import HowWeWork from "./HowWeWorkCard";
// import Narrative from "../../shared/component/Narrative";
// import AboutUsNarrative from "./AboutUsNarrative";
// import Blinds from "../../shared/component/Blinds";

// import UiUxDevelopmentPage from "../services/UiUxDevelopmentPage";
// import BrandDesignPage from "../services/BrandDesignPage";
// import WebFlowPage from "../services/WebFlowPage";
import NoCodeDevelopment from "../services/NoCodeDevelopment";

export default function AboutUsPage(){
    return(
        <>
            {/* <UiUxDevelopmentPage /> */}
            {/* <BrandDesignPage /> */}
            {/* <WebFlowPage /> */}
            <NoCodeDevelopment />

            {/* <PageIntroBanner 
                title = "Crafted Works, Bold Results"
                body = "Showcasing creative projects that deliver impact and inspire growth."
                src = "./public/assets/images/homepageNarr1.jpg"
            /> */}
            {/* <HowWeWork />
            <Narrative />
            <AboutUsNarrative /> */}
            {/* <Blinds /> */}
        </>
    )
}