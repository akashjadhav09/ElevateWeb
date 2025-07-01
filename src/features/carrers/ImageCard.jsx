import React from "react";

export default function ImageCard(){
    const title = "A Team That’s Out to Disrupt, Not Just Design";
    const body = "We’re not just another design shop – we’re a tight-knit crew of rebels, makers, and problem-solvers obsessed with extraordinary experiences. If you thrive on autonomy, hate red tape, and want your work to actually matter, you’ll fit right in."

    const numberAddMargin = [0,2]
    const images = [
        { src: "./assets/images/blinds-img-1.jpg" },
        { src: "./assets/images/blog-page-1.jpg" },
        { src: "./assets/images/blinds-img-2.jpg" }
    ];

    return(
        
        <div className="carrer-image-card-wrapper__main">
            <div className="carrer-image-card-wrapper__outer flex flex-col items-center">
                
                <div className="title-text text-center text-6xl mb-4 w-1/2">{title}</div>
                <div className="body-text text-center text-lg w-1/2">{body}</div>
                
                <div className="carrer-image-card-wrapper__outer flex items-center gap-4 w-[85%]">
                    {images.map((img, index)=>(
                        <div className={`carrer-image-card-wrapper__inner border rounded-xl ${numberAddMargin.includes(index) ? 'm-4' : ''}`} key={index}>
                            <img className={`${index === 2 ? 'max-w-[91%]' : ''}border rounded-xl`} src={img.src} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}