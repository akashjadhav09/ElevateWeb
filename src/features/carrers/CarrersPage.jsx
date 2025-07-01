import React from "react";

import PageIntroBanner from "../../shared/component/PageIntroBanner";
import ImageCard from "./ImageCard";
import CarrersCard from "./CarrerCard";

export default function CarrersPage(){
    return(
        <div className="portfolio-page__main">
            <PageIntroBanner 
                title = "Careers at Elevate Web"
                body = "Build the future with pixels, code, and zero corporate nonsense."
                src = "./public/assets/images/homepageNarr1.jpg"
            />
            <ImageCard />
            <CarrersCard />
        </div>
    )
}