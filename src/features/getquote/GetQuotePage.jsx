import React from "react";

import PageIntroBanner from "../../shared/component/PageIntroBanner";
// import ShareProjectDetailForm from "./ShareProjectDetailForm";
import SimpleCircularCard from "../../shared/component/SimpleCircularCard";

export default function GetQuotePage(){
    return(
        <div className="get-a-quote-main">
            <PageIntroBanner 
                title = "Careers at Elevate Web"
                body = "Build the future with pixels, code, and zero corporate nonsense."
                src = "./public/assets/images/homepageNarr1.jpg"
            />
           {/* <ShareProjectDetailForm /> */}
           <SimpleCircularCard/>
        </div>
    )
}