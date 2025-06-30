import React from "react";

export default function ImageSlider()
{   
    const imageSliderData = [
        {
            src : "./assets/images/blinds-img-2.jpg",
            label : "UI/UX Design"
        },
        {
            src : "./assets/images/blinds-img-2.jpg",
            label : "Template Design"
        },
        {
            src : "./assets/images/blinds-img-2.jpg",
            label : "Template Design"
        },
        {
            src : "./assets/images/blinds-img-2.jpg",
            label : "UI/UX Design"
        }
    ]
    return(
        <div className="image-slider__main">
            <div className="content-wrapper w-full flex items-center justify-center">
                <div className="content-wrapper-inner w-1/2">
                    <div className="title-text text-5xl text-center mb-4"> 
                        Explore Our Creative Work and Success Stories
                    </div>
                    <p className="body-text text-xl text-center">
                        Browse through a curated selection of our finest projects across industries. Each design showcases our commitment to innovation, strategy, and excellence to elevate brands and deliver measurable results that leave a lasting impression.
                    </p>
                </div>
            </div>
           
            <div className="image-slider-outer flex justify-evenly">
                {imageSliderData.map((item, index)=>
                    (
                        <div className="image-slider-inner relative w-[25%] mb-8" key={index}>
                            <div className="image-box-wrapper w-full">
                                <img src={item.src} alt="" className="image-box w-full" />
                                <div className="labet-text-wrapper absolute bottom-0 p-3 w-full bg-black opacity-60 text-center text-lg text-white">
                                    <p className="label-text">{item.label}</p>
                                </div>
                            </div>
                        </div>
                    )
                )}
                
            </div>
            <div className="pagination-wrapper flex justify-center gap-2 mb-8">
                {imageSliderData.map((_, idx) => (
                <div
                    key={idx}
                    className="pagination-dot w-3 h-3 rounded-full bg-gray-400"
                ></div>
                ))}
            </div>
        </div>
    )
}
