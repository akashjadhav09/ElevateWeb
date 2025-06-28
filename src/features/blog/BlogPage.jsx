import React from "react";

import PageIntroBanner from '../../shared/component/PageIntroBanner';
import BlogCard from "./BlogCard";

export default function BlogPage(){
    return(
        <div className="blog-page__main">
             <PageIntroBanner 
                title = "Design & No-Code Insights"
                body = "Get actionable tips and war stories—no fluff, just fuel. Join 5,000+ builders."
                src = "./public/assets/images/blog-page-1.jpg"
            />
            <BlogCard />
        </div>
    )
}