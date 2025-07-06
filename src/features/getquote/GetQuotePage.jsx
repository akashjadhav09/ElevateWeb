import React from "react";

import PageIntroBanner from "../../shared/component/PageIntroBanner";
import ShareProjectDetailForm from "./ShareProjectDetailForm";
// import SimpleCircularCard from "../../shared/component/SimpleCircularCard";

export default function GetQuotePage(){
    return(
        <div className="get-a-quote-main">
            <PageIntroBanner 
                title = "Let’s Bring Ideas to Life"
                body = "Get a custom quote tailored to your unique project needs."
                src = "./public/assets/images/homepageNarr1.jpg"
            />
           <ShareProjectDetailForm />
           {/* <SimpleCircularCard/> */}
        </div>
    )
}