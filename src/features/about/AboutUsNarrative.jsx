import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUsNarrative({narrativeData}){

    const data = [
        {
            imgSrc : "./assets/images/homepageNarr1.jpg",
            content :
                {
                    title : "From Garage Dreams to Pixel-Perfect Reality.",
                    body : "We didn’t start Web Rocket to follow design trends—we started it to blow them up. Back in 2018, our founders - Two Caffeine Fueled Dev & Design hybrids were sick of agencies overpromising and underdelivering. So we built our own damn studio.",
                    checkpoints : {
                        checkpointText : "Today? We’re a squad of 15 designers, developers, and no-code wizards who still operate like a startup:",
                        checkpointLabel : [
                            {
                                text : "Turning complex problems into intuitive interfaces.",
                            },
                            {
                                text : "Building brands that people remember.",
                            },
                            {
                                text : "Pushing no-code tools to their absolute limits.",
                            }
                        ]
                    }
                }
            
        }
    ]

    return(
       <div className="narrative-des-wrapper__main">
        <div className="narrative-des-wrapper__outer w-full">
            <div className="narrative-des-wrapper__inner">
                {data.map((item, index) => (
                    <div className="narrative-inner flex flex-col lg:flex-row items-center justify-center" key={index}>
                    
                        <div className="narrative-image-wrapper lg:w-[40%]">
                            <img className="narative-image" src={item.imgSrc} alt="" />
                        </div>

                        <div className="narrative-content-wrapper__outer lg:w-[60%]">
                            <div className="content-inner">
                            <p className="title-text text-center text-4xl lg:text-5xl pt-8 lg:w-[75%]">{item.content.title}</p>
                            <p className="body-text px-5 text-lg my-8 lg:w-[70%]">{item.content.body}</p>
                            </div>

                            <div className="checkpoint-wrapper__outer pb-8">
                            <p className="checkpoint-label-text text-lg mb-2 px-5 lg:w-[70%]">
                                {item.content.checkpoints.checkpointText}
                            </p>
                            {item.content.checkpoints.checkpointLabel.map((checkpoint, i) => (
                                <div
                                    className="check-point-label flex mb-2 px-2"
                                    key={i}
                                >
                                    <div className="check-point-label__inner flex items-center gap-x-2 text-center">
                                    <FaCheckCircle className="text-green-600" />
                                    <div>{checkpoint.text}</div>
                                    </div>
                                </div>
                            ))}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>

    )
}