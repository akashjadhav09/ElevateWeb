import React from "react";
import { FaHeart } from "react-icons/fa"; // Like icon

export default function CarrersCard() {
    const heading = "What We Offer"
    const cardData = [
        {
        title: "Bold & Benefit-Driven",
        body: "Competitive salaries, flexible hours, and a culture that values your growth as much as your output."
        },
        {
        title: "Passion & Purpose",
        body: "Work that excites you with projects that make a real-world difference and creative freedom."
        },
        {
        title: "Team & Culture",
        body: "Collaborate with diverse, talented individuals in an environment built on support and learning."
        },
        {
        title: "Learning & Growth",
        body: "We invest in your growth through learning budgets, mentorship, and new challenges."
        },
        {
        title: "Flexibility & Freedom",
        body: "Remote-friendly schedules and flexibility that adapts to your lifestyle."
        },
        {
        title: "Recognition & Rewards",
        body: "Get rewarded for what you bring to the table—great work deserves great recognition."
        }
    ];

  return (
    <div className="carrer-card-main py-8 px-4 bg-[#f3f3f3]">
        <div className="title-text text-center text-6xl my-8">{heading}</div>
      <div className="carrer-card-outer flex flex-wrap gap-6 justify-center">

        {cardData.map((item, index) => (
          <div
            key={index}
            className="carrer-card-inner w-full sm:w-[48%] md:w-[30%] bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="icon-wrapper text-red-500 text-2xl">
              <FaHeart />
            </div>
            <div className="text-content">
              <h3 className="text-xl font-semibold my-4">{item.title}</h3>
              <p className="text-gray-700 text-sm my-4">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
