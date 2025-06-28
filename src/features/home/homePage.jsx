import React from "react";

import HeroSection from "../home/HeroSection";
import HomePageNarrative from "../home/HomePageNarrative";
import HomeFeatureIcon from "../home/HomeFeatureIcon";
import HomeServiceCard from "../home/HomeServiceCard";
import SpotlightCard from "../home/SpotlightCard";
import ClientRating from "../home/ClientRatingCard";
import HomeStudioSectionCard from "../home/HomeStudioSectionCard";

export default function HomePage(){
    let title = "Unforgettable, Websites, Brands & Visuals for Bold Visionaries.";
    let body = "We’re not your typical design agency. Founded in 2014, we’re a collective of designers, developers, and strategists who believe great digital experiences should be beautiful, functional, and human-centered. From startups to global brands, we help ambitious businesses stand out.We’re not your typical design agency. Founded in 2014, we’re a collective of designers, developers, and strategists who believe great digital experiences should be beautiful, functional, and human-centered. From startups to global brands, we help ambitious businesses stand out.";
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