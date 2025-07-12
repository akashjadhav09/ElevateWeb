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
        <div className="content-wrapper-inner my-8 md:w-1/2">
          <div className="title-text text-5xl text-center mb-4">
            Explore Our Creative Work and Success Stories
          </div>
          <p className="body-text text-xl text-center">
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
            <div key={index} className="image-slider-inner relative min-w-full flex-shrink-0 mb-8">
              <div className="image-box-wrapper w-full">
                <img
                  src={item.src}
                  alt={item.label}
                  className="image-box w-full h-[550px] object-cover rounded-lg"
                />
                <div className="labet-text-wrapper absolute bottom-0 p-3 w-full bg-black opacity-60 text-center text-lg text-white">
                  <p className="label-text">{item.label}</p>
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
            className={`pagination-dot w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex % totalSlides === idx ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}




// import React, { useEffect, useRef, useState } from "react";

// export default function ImageSlider() {
//   const imageSliderData = [
//     { src: "./assets/images/blog-page-1.jpg", label: "UI/UX Design" },
//     { src: "./assets/images/blinds-img-2.jpg", label: "Template Design" },
//     { src: "./assets/images/hori-card-1.jpg", label: "Template Design" },
//     { src: "./assets/images/blinds-img-2.jpg", label: "UI/UX Design" },
//     { src: "./assets/images/blinds-img-2.jpg", label: "UI/UX Design" },
//   ];

//   const numberOfDisplayImageInitial = 1;
//   const totalGroups = Math.ceil(imageSliderData.length / numberOfDisplayImageInitial);

//   const sliderRef = useRef(null);
//   const [groupIndex, setGroupIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const container = sliderRef.current;
//       if (!container) return;

//       const containerWidth = container.offsetWidth;
//       const nextGroup = (groupIndex + 1) % totalGroups;

//       container.scrollTo({
//         left: containerWidth * nextGroup,
//         behavior: "smooth",
//       });

//       setGroupIndex(nextGroup);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [groupIndex, totalGroups]);

//   return (
//     <div className="image-slider__main px-4">
//       {/* Header Section */}
//       <div className="content-wrapper w-full flex items-center justify-center">
//         <div className="content-wrapper-inner my-8 w-1/2">
//           <div className="title-text text-5xl text-center mb-4">
//             Explore Our Creative Work and Success Stories
//           </div>
//           <p className="body-text text-xl text-center">
//             Browse through a curated selection of our finest projects across industries. Each design showcases our commitment to innovation, strategy, and excellence to elevate brands and deliver measurable results that leave a lasting impression.
//           </p>
//         </div>
//       </div>

//       {/* Auto-scrolling image slider */}
//       <div
//         ref={sliderRef}
//         className="image-slider-outer overflow-x-hidden whitespace-nowrap scroll-smooth"
//       >
//         <div className="flex">
//           {imageSliderData.map((item, index) => (
//             <div
//               key={index}
//               className="image-slider-inner relative min-w-full flex-shrink-0 mb-8"
//             >
//               <div className="image-box-wrapper w-full">
//                 <img
//                   src={item.src}
//                   alt=""
//                   className="image-box w-full h-[550px] object-cover rounded-lg"
//                 />
//                 <div className="labet-text-wrapper absolute bottom-0 p-3 w-full bg-black opacity-60 text-center text-lg text-white">
//                   <p className="label-text">{item.label}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="pagination-wrapper flex justify-center gap-2 mb-8">
//         {Array.from({ length: totalGroups }).map((_, idx) => (
//           <div
//             key={idx}
//             className={`pagination-dot w-3 h-3 rounded-full transition-colors duration-300 ${
//               groupIndex === idx ? "bg-black" : "bg-gray-400"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
