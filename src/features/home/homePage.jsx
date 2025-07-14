import React from "react";

import HeroSection from "../home/HeroSection";
import HomePageNarrative from "../home/HomePageNarrative";
import HomeFeatureIcon from "../home/HomeFeatureIcon";
import HomeServiceCard from "../home/HomeServiceCard";
import SpotlightCard from "../home/SpotlightCard";
import ClientRating from "../home/ClientRatingCard";
import HomeStudioSectionCard from "../home/HomeStudioSectionCard";

export default function HomePage(){
    let title = "Striking Websites, Brands, and Visuals for Fearless Visionaries.";
    let body = "We’re not your average design agency. Since 2014, our team of designers, developers, and strategists has been crafting digital experiences that are not only visually striking but also functional and centered around real human needs. Whether working with startups or global enterprises, we empower bold brands to make a lasting impression.";
    let imgsrc = "./public/assets/images/homepageNarr1.jpg"

    return(
      <>
        <HeroSection />
        <HomePageNarrative titleText={title} bodyText={body} imgSrc={imgsrc}/>
        <HomeFeatureIcon />
        <HomeServiceCard />
        <SpotlightCard />
        <ClientRating />
        <HomeStudioSectionCard/>
      </>
    )
}