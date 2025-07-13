import React from "react";

import ServicePageIntoBanner from "../../shared/component/ServicePageIntoBanner";
import NarrativeWithText from "../../shared/component/NarrativeWithText";
import ServiceAccordion from "../../shared/component/ServiceAccordion";
import ServicePageHeroSection from "./ServicePageHeroSection";
import ServiceProcessCard from "./ServiceProcessCard";


export default function NoCodeDevelopment(){
    const narrtiveMainTitle = "No-Code Development Edge";
    const NarrativeData = [
        {
            title : "Smart Scaffolding",
            body : "We design the architecture with tomorrow in mind—modular, flexible, and built to grow. So your product won’t need a rebuild—just plug and play."
        },
        {
            title : "API Whisperers",
            body : "From third-party tools to custom backends, we make complex integrations feel seamless. So everything just works, behind the scenes."
        },
         {
            title : "Investor-Ready MVPs",
            body : "We craft MVPs that not only function smoothly but look the part—complete with polished demo flows that clearly communicate value."
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
    
    
    const processCardMainTitle = "Our No-Code Process";
    const processSteps = [
        {
            title: "1. Blueprint",
            description:
            "We start by mapping goals, user journeys, and core features.",
        },
        {
            title: "2. Build & Integrate",
            description:
            "Using powerful no-code tools, we bring your product to life.",
        },
        {
            title: "3. 3. Launch & Iterate",
            description:
            "Go live with confidence, then refine based on real user data.",
        }
    ];

    return(
        <>
            <ServicePageIntoBanner 
                title = "No-Code Development"
                body = "Functional MVPs and web apps built in Bubble/FlutterFlow. Validate ideas faster without massive dev budgets. We specialize in Bubble and FlutterFlow development to create investor-ready MVPs with real functionality."
                buttonText = "Let's Code"
                src = "./public/assets/images/homepageNarr1.jpg"
            />

            <ServicePageHeroSection 
                mainTitle = "Launch Faster, Spend Smarter"
                subTitle = "Validate ideas fast with functional, investor-ready MVPs built in Bubble, FlutterFlow, or Softr. We specialize in turning complex business logic into user-friendly no-code solutions, complete with databases, automations, and API integrations—launched in weeks, not months."
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