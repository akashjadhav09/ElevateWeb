import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { RiArrowDropUpLine } from "react-icons/ri";

export default function Navbar(){
    return(
      <div className="navbar-wrapper__main">
        <div className="navbar-wrapper__outer"> 
          <div className="navbar-wrapper__inner bg-[#12141d] text-white relative pb-56 px-6">
            <div className="navbar-top__section flex items-center justify-center flex-wrap gap-20 pt-6 pb-8">
              <div className="navbar-logo text-2xl font-semibold">ELEVATE WEB</div>

              <div className="navbar-links__section cursor-pointer flex items-center flex-wrap justify-center gap-8 text-lg">
                <p className="link">About</p>
                <p className="link flex items-center justify-center gap-2">Services
                  <RiArrowDropDownLine className="text-2xl"/>
                </p>
                <p className="link">Blog</p>
                <p className="link">Portfolio</p>
                <p className="link">Careers</p>
                <p className="link">Get a Quote</p>
                <p className="link">Contact</p>
              </div>

              <button className="border border-[#d2ff28] rounded-full bg-[#d2ff28] text-gray-900 px-6 py-2 text-lg">
                Schedule a Call Now
              </button>
            </div>

            {/* <div className="navbar-content-section__outer flex flex-col items-center relative mt-10">
              <div className="navbar-content__section z-10 text-center max-w-2xl px-4">
                <div className="title-text text-4xl font-bold mb-4">
                  Crafted Works, Bold Results
                </div>
                <div className="body-text text-base">
                  Showcasing creative projects that deliver impact and inspire growth.
                </div>
              </div>

              <div className="navbar-image__section absolute top-full -translate-y-1/2 z-20 mt-56">
                <img
                  className="navbar-image w-[500px] object-cover rounded-lg shadow-lg"
                  src="./public/assets/images/homepageNarr1.jpg"
                  alt="Hero Visual"
                />
              </div>
            </div> */}
          </div>

          {/* <div className="navbar-bottom-wapper bg-white h-[200px] relative z-10"></div> */}
        </div>
      </div>

    )
}