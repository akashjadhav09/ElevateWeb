import React, { useEffect, useRef, useState } from "react";

export default function ImageSlider() {
  const images = [
    { src: "./assets/images/blog-page-1.jpg", label: "UI/UX Design" },
    { src: "./assets/images/blinds-img-2.jpg", label: "Template Design" },
    { src: "./assets/images/hori-card-1.jpg", label: "Creative Concept" },
    { src: "./assets/images/blinds-img-2.jpg", label: "Web Solutions" },
    { src: "./assets/images/blinds-img-2.jpg", label: "UI/UX Excellence" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  const totalSlides = images.length;
  const extendedImages = [...images, images[0]];

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (currentIndex === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
          setCurrentIndex(1);
        }, 20);
      }, 1600);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalSlides]);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  };

  return (
    <div className="image-slider__main px-4">
      <div className="content-wrapper w-full flex items-center justify-center">
        <div className="content-wrapper-inner my-8 w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-4">
            Explore Our Creative Work and Success Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-700">
            Browse through a curated selection of our finest projects across industries.
          </p>
        </div>
      </div>

      <div className="image-slider-outer overflow-x-hidden whitespace-nowrap scroll-smooth">
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedImages.map((item, index) => (
            <div
              key={index}
              className="image-slider-inner relative min-w-full flex-shrink-0 mb-8"
            >
              <div className="image-box-wrapper w-full">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-64 sm:h-96 md:h-[550px] object-cover rounded-lg"
                />
                <div className="absolute bottom-0 p-3 w-full bg-black bg-opacity-60 text-center text-white text-sm sm:text-lg">
                  <p>{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination-wrapper flex justify-center gap-2 mb-8">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex % totalSlides === idx ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
