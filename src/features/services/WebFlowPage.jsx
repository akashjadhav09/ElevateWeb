import React from "react";

import ServicePageIntoBanner from "../../shared/component/ServicePageIntoBanner";
import NarrativeWithText from "../../shared/component/NarrativeWithText";
import ServiceAccordion from "../../shared/component/ServiceAccordion";
import ServicePageHeroSection from "./ServicePageHeroSection";
import ServiceProcessCard from "./ServiceProcessCard";


export default function WebFlowPage(){
    const narrtiveMainTitle = "Webflow Development Advantages";
    const NarrativeData = [
        {
            title : "Speed-Obsessed",
            body : "We engineer every page with performance in mind—minimal code, optimized assets, and smart caching - 90+ PageSpeed scores."
        },
        {
            title : "SEO-Built In",
            body : "From semantic HTML to structured schema, we build your site with SEO baked in from the start—not added later."
        },
         {
            title : "Migration Magic",
            body : "Our process ensures a smooth transition with careful URL mapping, redirects, and content preservation."
        }
    ]

    const accordionMainTitle = "Your Guide to Common Questions & Solutions";
    const accordionData = [
        {
            title : "How many revisions are included",
            body : "All projects include 3 rounds of revisions at key milestones. Need more? Additional revisions are billed at $95/hour (we’ll always get your approval first)."
        },
        {
            title : "What are your charges?",
            body : "We offer fixed-price packages (starting at 7,500 for MVPs) or Weekly Sprints (7,500 for MVPs) or Weekly Sprints (2,500/week). You’ll get a detailed quote after our free strategy call."
        },
        {
            title : "What is your MVP process",
            body : "Developers receive clean, pixel-perfect Figma files complete with auto-generated specs, assets, and documentation."
        },
        {
            title : "How many revisions are included",
            body : "All projects include 3 rounds of revisions at key milestones. Need more? Additional revisions are billed at $95/hour (we’ll always get your approval first)."
        }
    ]
    
    
    const processCardMainTitle = "Our Webflow Process";
    const processSteps = [
        {
            title: "1. Plan & Architect",
            description:
            "From initial strategy to flawless execution, we build scalable solutions.",
        },
        {
            title: "2. Build & Optimize",
            description:
            "From pixel-perfect interfaces to scalable architectures.",
        },
        {
            title: "3. Launch & Scale",
            description:
            "We design and develop high-conversion digital experiences.",
        }
    ];

    return(
        <>
            <ServicePageIntoBanner 
                title = "Webflow Development"
                body = "Modern businesses deserve modern websites. We build lightning-fast Webflow sites with custom CMS architectures, animations that enhance storytelling, and SEO-optimized structures. Say goodbye to WordPress bloat."
                buttonText = "Build my website"
                src = "./public/assets/images/homepageNarr1.jpg"
            />

            <ServicePageHeroSection 
                mainTitle = "Websites Built for Speed & Results"
                subTitle = "Say goodbye to slow, clunky websites. We build lightning-fast, SEO-optimized Webflow sites with custom CMS architectures, sleek animations, and editor-friendly interfaces. Whether you need a marketing site or a scalable web app, we deliver performance and polish without bloated code."
                src = "./public/assets/images/blog-page-1.jpg"
            />

            <ServiceProcessCard 
                processCardMainTitle = {processCardMainTitle}
                data = {processSteps}
            />

            <NarrativeWithText 
                narrtiveMainTitle = {narrtiveMainTitle}
                narrativeData = {NarrativeData}
                src = "./public/assets/images/homepageNarr1.jpg"
            />

            <ServiceAccordion 
                accordionMainTitle = {accordionMainTitle}
                accordionData = {accordionData}
            />
        </>
    )
}