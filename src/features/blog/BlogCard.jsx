import React from "react";

export default function BlogCard(){

    const blogCardData = [
        {
            "imgSrc": "./public/assets/images/hori-card-1.jpg",
            "label": [{ "text": "Design" }, { "text": "UI/UX" }],
            "body": "Revamped the dashboard interface for better usability and accessibility.",
            "date": "2024-12-10",
            "subText": "Case study on redesigning enterprise tools"
        },
        {
            "imgSrc": "./public/assets/images/hori-card-1.jpg",
            "label": [{ "text": "Development" }, { "text": "React" }],
            "body": "Built a reusable component library using React and Tailwind CSS.",
            "date": "2024-11-22",
            "subText": "Frontend scalability project"
        },
        {
            "imgSrc": "./public/assets/images/hori-card-1.jpg",
            "label": [{ "text": "Branding" }, { "text": "Marketing" }],
            "body": "Created a visual identity for a new startup including logo, colors, and fonts.",
            "date": "2025-01-15",
            "subText": "Startup launch branding package"
        },
        {
            "imgSrc": "./public/assets/images/hori-card-1.jpg",
            "label": [{ "text": "Data" }, { "text": "Visualization" }],
            "body": "Developed interactive dashboards with D3.js and custom animations.",
            "date": "2024-10-05",
            "subText": "Bringing clarity to data"
        },
        {
            "imgSrc": "./public/assets/images/hori-card-1.jpg",
            "label": [{ "text": "Animation" }, { "text": "GSAP" }],
            "body": "Implemented smooth page transitions and micro-interactions.",
            "date": "2024-08-30",
            "subText": "Motion-driven user experience"
        },
        {
            "imgSrc": "./public/assets/images/hori-card-1.jpg",
            "label": [{ "text": "E-commerce" }, { "text": "Next.js" }],
            "body": "Developed a high-performance e-commerce platform with SSR.",
            "date": "2024-07-12",
            "subText": "Online retail with speed and SEO"
        },
        {
            "imgSrc": "./public/assets/images/hori-card-1.jpg",
            "label": [{ "text": "Accessibility" }, { "text": "WCAG" }],
            "body": "Enhanced site accessibility to meet WCAG 2.1 AA standards.",
            "date": "2024-09-17",
            "subText": "Inclusive design improvements"
        },
        {
            "imgSrc": "./public/assets/images/hori-card-1.jpg",
            "label": [{ "text": "Backend" }, { "text": "Node.js" }],
            "body": "Created scalable REST APIs with Node.js and MongoDB.",
            "date": "2024-11-01",
            "subText": "Server-side power for frontend teams"
        },
        {
            "imgSrc": "./public/assets/images/hori-card-1.jpg",
            "label": [{ "text": "Mobile" }, { "text": "Flutter" }],
            "body": "Released a cross-platform mobile app for event management.",
            "date": "2024-10-25",
            "subText": "Hybrid mobile development"
        }
        ]

    return(
        <div className="blog-card__main">
            <div className="blog-card__outer flex flex-wrap items-start justify-evenly cursor-pointer mb-4">
                {blogCardData.map((card, index) => (
                <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
                    <div className="blog-card__inner flex flex-col sm:flex-row gap-4 p-2 lg:m-2 border border-gray-300 rounded w-full">
                    {/* Image section */}
                    <div className="image-wrapper__main w-full sm:w-1/2">
                        <img
                        src={card.imgSrc}
                        alt=""
                        className="horiz-card-image rounded w-full h-full object-cover"
                        />
                    </div>

                    {/* Text content */}
                    <div className="hori-card-content-wrapper flex flex-col justify-between w-full sm:w-1/2">
                        <div className="card-label-wrapper flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                        {card.label.map((label, labelIndex) => (
                            <div
                            className="label-text border border-gray-300 rounded-full px-2 py-1 text-sm"
                            key={labelIndex}
                            >
                            {label.text}
                            </div>
                        ))}
                        </div>

                        <div className="body-text-wrapper mb-2">
                        {card.title && (
                            <p className="card-title-text font-semibold text-lg">
                            {card.title}
                            </p>
                        )}
                        {card.body && (
                            <p className="card-body-text text-sm text-gray-600">
                            {card.body}
                            </p>
                        )}
                        </div>

                        <div className="button-time-stamp-wrapper flex flex-wrap items-center gap-2 text-xs text-gray-500">
                        {card.date && <p className="time-stamp-wrapper">{card.date}</p>}
                        {card.subText && <p className="sub-text">{card.subText}</p>}
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

    )
}