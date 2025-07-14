import React from "react";
export default function ClientRating(){
    const ClientRating = [
        {
            ratingPoint : "4.7",
            ratingBody : "We struggled with user drop-offs for months. Web Rocket redesigned our dashboard with intuitive workflows, and our retention skyrocketed by 40% in 30 days. Their team actually listens to users—no ego, just data-driven design.",
            clientThumbail : "./assets/images/homepageNarr1.jpg",
            clientName : "Sarah K.",
            clientDesignation : "CEO of SaaSFlow"
        },
        {
            ratingPoint : "4.3",
            ratingBody : "We struggled with user drop-offs for months. Web Rocket redesigned our dashboard with intuitive workflows, and our retention skyrocketed by 40% in 30 days. Their team actually listens to users—no ego, just data-driven design.",
            clientThumbail : "./assets/images/homepageNarr1.jpg",
            clientName : "Sarah K.",
            clientDesignation : "CEO of SaaSFlow"
        },
        {
            ratingPoint : "4.5",
            ratingBody : "We struggled with user drop-offs for months. Web Rocket redesigned our dashboard with intuitive workflows, and our retention skyrocketed by 40% in 30 days. Their team actually listens to users—no ego, just data-driven design.",
            clientThumbail : "./assets/images/homepageNarr1.jpg",
            clientName : "Sarah K.",
            clientDesignation : "CEO of SaaSFlow"
        }
    ]
    return(
        <div className="client-rating__main">
            <div className="text-center text-5xl pt-16 pb-8">What Our Client Say About Us</div>
            <div className="client-rating__outer flex justify-center m-4 mb-20 flex-wrap gap-6">
                {ClientRating.map((item, index) => (
                <div
                    className="client-rating__inner bg-white border border-gray-200 rounded-xl shadow-md mt-4 m-4 w-full sm:w-[48%] md:w-[31%]"
                    key={index}
                >
                    {/* Rating */}
                    <div className="rating-detail__wrapper flex items-center gap-2 mb-4">
                        <div className="rating-point text-2xl font-bold p-6 text-yellow-500">
                            {item.ratingPoint}
                        </div>
                        <div className="rating-star flex text-yellow-400 text-xl">
                            {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>{i < item.ratingPoint ? '★' : '☆'}</span>
                            ))}
                        </div>
                    </div>

                    {/* Review Body */}
                    <div className="rating-text__wrapper mb-12 p-6">
                        <p className="rating-text text-lg text-gray-700 italic">
                            "{item.ratingBody}"
                        </p>
                    </div>

                    {/* Client Profile */}
                    <div className="client-profile__wrapper flex items-center gap-4 p-6 bg-gray-100 rounded-b-[10px]">
                        <div className="client-profile-icon w-12 h-12 rounded-full overflow-hidden border">
                            <img src={item.clientThumbail} alt={item.clientName} className="w-full h-full object-cover" />
                        </div>
                        <div className="client-name__wrapper">
                            <div className="client-name text-base font-semibold text-gray-800">
                            {item.clientName}
                            </div>
                            <div className="client-designation text-sm text-gray-500">
                            {item.clientDesignation}
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>

    )
}