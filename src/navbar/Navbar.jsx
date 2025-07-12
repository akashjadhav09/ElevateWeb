import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-wrapper__main">
      <div className="navbar-wrapper__outer">
        <div className="navbar-wrapper__inner bg-[#12141d] text-white relative pb-56 px-6">
          <div className="navbar-top__section flex items-center justify-center flex-wrap gap-20 pt-6 pb-8">
            <div className="navbar-logo text-2xl font-semibold">ELEVATE WEB</div>

            <div className="navbar-links__section cursor-pointer flex items-center flex-wrap justify-center gap-8 text-lg">
              <Link to="/about" className="link cursor-pointer">About</Link>

              <Link to="/services" className="link cursor-pointer flex items-center justify-center gap-2">
                Services
                <RiArrowDropDownLine className="text-2xl" />
              </Link>

              <Link to="/blog" className="link cursor-pointer">Blog</Link>
              <Link to="/portfolio" className="link cursor-pointer">Portfolio</Link>
              <Link to="/careers" className="link cursor-pointer">Careers</Link>
              <Link to="/quote" className="link cursor-pointer">Get a Quote</Link>
              <Link to="/contact" className="link cursor-pointer">Contact</Link>
            </div>

            <button className="border border-[#d2ff28] rounded-full bg-[#d2ff28] text-gray-900 px-6 py-2 text-lg">
              Schedule a Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
