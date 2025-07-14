import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function HomeStudioSectionCard(){
    const HomeStudioSectionCardData = [
        {
            imgSrc : "./assets/images/homepageNarr1.jpg",
            labelText : "UI/UX Design",
            body : "Boosting Client Conversions by 200% Through Smarter UI/UX Design",
            userName : "Sam Smith",
            timeStamp : "April 23, 2024"
        },
        {
            imgSrc : "./assets/images/homepageNarr1.jpg",
            labelText : "Branding",
            body : "Boosting Client Conversions by 200% Through Smarter UI/UX Design",
            userName : "John Jackson",
            timeStamp : "July 3, 2025"
        },
        {
            imgSrc : "./assets/images/homepageNarr1.jpg",
            labelText : "Web Development",
            body : "WordPress vs Webflow – Our Developers Weigh In on the Debate",
            userName : "Cheris Robbin",
            timeStamp : "May 16, 2022"
        }
    ]
    return(
        <div className="studio-section-card__main bg-[#f3f3f3] pb-24">
            <div className="text-5xl py-16 text-center">The Studio Journal</div>
            <div className="studio-section-card__outer flex flex-col w-full sm:flex-row sm:items-center sm:justify-evenly sm:gap-6 sm:mx-36 md:m-0">
                {HomeStudioSectionCardData.map((item, index)=>
                    (
                        <div className="studio-section-card__inner bg-white" key={index}>

                            <div className="studio-section-card-img__wrapper cursor-pointer overflow-hidden group">
                                <img
                                    className="studio-card-img transform transition-transform duration-300 group-hover:scale-125"
                                    src={item.imgSrc}
                                    alt=""
                                />
                            </div>

                            <div className="studio-card-content__wrapper px-4">  
                                <div className="studio-card-label-wrapper mt-6 mb-4 px-2 py-1 bg-gray-200 w-fit border rounded-full">
                                    <p className="studio-card-label-text">{item.labelText}</p>
                                </div>
                                <div className="studio-card-body__text px-2 text-lg">{item.body}</div>
                            </div>

                            <div className="studio-card-user-details__wrapper px-4 mt-4 mb-8 flex items-center justify-start gap-2">
                                <FaUserCircle className="name-icon"></FaUserCircle>
                                <p className="user-name text-sm">{item.userName}</p>

                                <FaRegCalendarAlt className="calender-icon"></FaRegCalendarAlt>
                                <p className="user-timestamp text-sm">{item.timeStamp} </p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

