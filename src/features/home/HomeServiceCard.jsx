import React from "react";
export default function HomeServiceCard(){
    const HomeServiceCardData = [
        {
            title: "1. UI/UX Design",
            body: "Interfaces that delight users and drive conversions. We design with outcomes in mind.",
            checkPoints: [
                {
                    point: "User flows that boost engagement."
                },
                {
                    point: "Mobile-first, award-worthy interfaces."
                },
                {
                    point: "Prototypes in 72 hours or less."
                }
            ]
        },
        {
            title: "2.Brand Design",
            body: "Visual identities that command attention and build trust. Logos, style guides, and assets crafted to tell your story.",
            checkPoints: [
                {
                    point: "Logos with hidden storytelling."
                },
                {
                    point: "Visual identities built to scale."
                },
                {
                    point: "Style guides even your interns can use."
                }
            ]
        },
        {
            title: "3.Webflow Development",
            body: "Websites that load fast, rank higher, and grow with you. No bloated code—just seamless Webflow experiences.",
            checkPoints: [
                {
                    point: "90+ PageSpeed scores guaranteed."
                },
                {
                    point: "SEO-optimized out of the box."
                },
                {
                    point: "Editable CMS for non-tech teams."
                }
            ]
        },
        {
            title: "4.No-Code Development",
            body: "Launch functional MVPs without engineering headaches. Solutions in weeks, not months.",
            checkPoints: [
                {
                    point: "Bubble/FlutterFlow MVPs in 4 weeks."
                },
                {
                    point: "Complex workflows without engineers."
                },
                {
                    point: "Complex workflows without engineers."
                }
            ]
        },
        {
            title: "4.No-Code Development",
            body: "Launch functional MVPs without engineering headaches. Solutions in weeks, not months.",
            checkPoints: [
                {
                    point: "Bubble/FlutterFlow MVPs in 4 weeks."
                },
                {
                    point: "Complex workflows without engineers."
                },
                {
                    point: "Complex workflows without engineers."
                }
            ]
        }
    ]
    return(
        <div className="bg-[#f3f3f3] py-10 px-4 my-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HomeServiceCardData.map((item, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
                    >
                    <div className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                    </div>
                    <div className="text-gray-600 mb-4">{item.body}</div>
                    <div className="space-y-2">
                        {item.checkPoints.map((point, pointIndex) => (
                        <div
                            key={pointIndex}
                            className="text-sm text-gray-700 flex items-start gap-2"
                        >
                            <span className="text-green-500 mt-1">✔</span>
                            <span>{point.point}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

    )
}