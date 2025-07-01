import React from "react";

import PageIntroBanner from "../../shared/component/PageIntroBanner";
import ImageSlider from "../../shared/component/ImageSlider";

export default function PortfolioPage(){
    return(
        <div className="portfolio-page__main">
            <PageIntroBanner 
                title = "We Design & Build Digital Experiences That Move the Needle"
                body = "We’re not your average design shop. We’re a strategic creative studio that blends jaw-dropping aesthetics with ruthless functionality. Since 2017, we’ve helped 100+ startups, agencies, and scale-ups transform their ideas into high-performing websites, apps, and brands that stand out and convert."
                src = "./public/assets/images/homepageNarr1.jpg"
            />
            <ImageSlider />
        </div>
    )
}