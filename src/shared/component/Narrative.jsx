import React from "react";

export default function Narrative(){

    const narrativeData = [
        {
            imgSrc : "./assets/images/homepageNarr1.jpg",
            content : [
                {
                    title : "Awwwards FWA",
                    body : "Site of the Day for LawLex’s innovative Webflow build",
                    year : "2024"
                },
                {
                    title : "CSS Design Awards",
                    body : "Ranked among world’s top global B2B design studios.",
                    year : "2024"
                },
                {
                    title : "CSS Design Awards",
                    body : "Globally ranked top B2B design and branding a studio.",
                    year : "2024"
                },
                {
                    title : "Adobe Design Achievement Awards",
                    body : "Ranked globally as the premier B2B to design agency.",
                    year : "2024"
                }
        ]
        }
    ]
    return(
        <div className="narrative-wrapper__main bg-[#f3f3f3] p-4">
            <div className="text-5xl text-center pt-8 pb-16">Recognitions & Awards</div>
            <div className="narrative-wrapper__outer mb-20">
                {narrativeData.map((item, index)=>
                    (
                        <div className="narrative-wrapper__inner flex items-center justify-center gap-20" key={index}>
                            <div className="image-section-wrapper">
                                <img className="border rounded-2xl" src={item.imgSrc} alt="" />
                            </div>

                            <div className="narative-content-wrapper__outer flex flex-col gap-4">
                            {item.content.map((content, contIndex)=>
                                    (
                                        <div className="flex border-b border-gray-500 pb-4">
                                           <div className="narative-content-wrapper__inner flex items-center justify-between" key={contIndex}>
                                                <div className="content-wrapper flex flex-col">
                                                    <p className="title-text text-2xl mb-2">{content.title}</p>
                                                    <p className="title-text text-gray-500">{content.body}</p>
                                                </div>

                                                {content.year && (
                                                    <p className="year-text ml-4 whitespace-nowrap">{content.year}</p>
                                                )}
                                                </div>
                                                <hr />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}