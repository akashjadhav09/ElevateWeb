import React from "react";

import ServicePageIntoBanner from "../../shared/component/ServicePageIntoBanner";
import NarrativeWithText from "../../shared/component/NarrativeWithText";
import ServiceAccordion from "../../shared/component/ServiceAccordion";
import ServicePageHeroSection from "./ServicePageHeroSection";
import ServiceProcessCard from "./ServiceProcessCard";


export default function BrandDesignPage(){
    const narrtiveMainTitle = "Brand Design Differentiators";
    const NarrativeData = [
        {
            title : "Strategic Storytelling",
            body : "We go beyond surface-level visuals to uncover and shape your brand’s unique narrative—turning your story into a strategic asset."
        },
        {
            title : "System Thinking",
            body : "Every brand asset we create is built to scale—consistent, adaptable, and ready to perform across all channels."
        },
         {
            title : "Culture Coding",
            body : "We translate your company’s values, beliefs, and personality into a distinct visual identity. The result? A brand that feels authentic from the inside out."
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
        }
    ]
    
    
    const processCardMainTitle = "Our Brand Design Process";
    const processSteps = [
        {
            title: "1. Discovery",
            description:
            "We learn what makes you and your product unique.",
        },
        {
            title: "2. Conceptualize",
            description:
            "Where creativity meets strategy. Color palette exploration",
        },
        {
            title: "3. Build the System",
            description:
            "Polishing every touchpoint. Mockups & asset templates",
        }
    ];

    return(
        <>
            <ServicePageIntoBanner 
                title = "Brand Design"
                body = "Your brand is more than a logo – it’s your competitive edge. We develop comprehensive visual identities including color systems, typography hierarchies, and design languages that communicate your unique value."
                buttonText = "Let's Rebrand"
                src = "./public/assets/images/homepageNarr1.jpg"
            />

            <ServicePageHeroSection 
                mainTitle = "Branding That Demands Attention"
                subTitle = "Your brand is more than a logo—it’s your story. We build memorable visual identities from the ground up, including logos, color systems, typography, and style guides. Our strategic approach ensures your brand stands out, resonates with your audience, and scales seamlessly as you grow."
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