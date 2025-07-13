import React, { useEffect, useState, useRef } from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

export default function Navbar() {

  const [isTabsOpen, setIsTabOpen] = useState(false);
  const [isServiceTabsOpen, setIsServiceTabsOpen] = useState(false);
  const [isServiceTabsOpenForLarge, setIsServiceTabsOpenForLarge] = useState(false);
  const [isAddPadding, setIsAddPadding] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        isServiceTabsOpenForLarge(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePath = (pathname)=>{
    const pathNames = ["/about", "/blog", "/portfolio", "/careers", "/quote"]
    if(pathNames.includes(pathname)){
      setIsAddPadding(true);
    }else{
      setIsAddPadding(false);
    }
    setIsTabOpen(false);
  }

  return (
    <div className="navbar-wrapper__main">
      <div className="navbar-wrapper__outer bg-[#12141d] text-white">

        <div className="navbar__mobile logo-wrapper md:hidden lg:hidden">
          <div className="logo-hamburger-wrapper flex items-center justify-between text-lg p-6">
            <div className="logo-inner">
              <h4>ELEVATE WEB</h4>
            </div>
            <div className="hamburger-wrapper" onClick={()=>setIsTabOpen(prev => !prev)}>
              {isTabsOpen ? (
                <IoClose className="" />
              ) :(
                <GiHamburgerMenu className="" />)
              }
            </div>
          </div>

          <div className={`mobile-nav-link transition-all duration-500 ease-in-out overflow-hidden md:hidden lg:hidden flex flex-col text-lg bg-[#f3f3f3] text-gray-950 ${
                isTabsOpen ? 'max-h-[500px] opacity-100 p-6 mt-2' : 'max-h-0 opacity-0'
              }`
            }
          >

            <Link to="/about" className="link pt-2 cursor-pointer" onClick={()=>handlePath('/blog')}>About</Link>

             {/* Below for Mobile view */}
            <div className="services-tab-wrapper">
              <div className="flex items-center justify-between" onClick={()=> setIsServiceTabsOpen(prev => !prev)}>
                <Link to="/services" className="link pt-2 cursor-pointer flex items-center justify-center gap-2">
                  Services
                </Link>
                <RiArrowDropDownLine className={`text-2xl ${isServiceTabsOpen ? 'transform rotate-180' : ''}`} />
              </div>
              <div className={`service-tabs-inner flex flex-col gap-1 transition-all duration-500 ease-in-out overflow-hidden
                                ${isServiceTabsOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <Link to="/uiuxpage" onClick={()=>handlePath('')} className="link pt-2 cursor-pointer flex items-center gap-2"> 
                  <MdOutlineArrowRight className="text-sm" /> UI/UX Design
                </Link>
                <Link to="/branddesignpage" onClick={()=>handlePath('')} className="link pt-2 cursor-pointer flex items-center gap-2">
                  <MdOutlineArrowRight className="text-sm" /> Brand Design
                </Link>
                <Link to="/webflowpage" onClick={()=>handlePath('')} className="link pt-2 cursor-pointer flex items-center gap-2">
                  <MdOutlineArrowRight className="text-sm" /> Web Flow Development
                </Link>
                <Link to="/nocodedevelopment" onClick={()=>handlePath('')} className="link pt-2 cursor-pointer flex items-center gap-2">
                  <MdOutlineArrowRight className="text-sm" /> No Code Development
                </Link>
                </div>
            </div>

                <Link to="/blog" onClick={()=>handlePath('/blog')} className="link cursor-pointer my-1">Blog</Link>
                <Link to="/portfolio" onClick={()=>handlePath('/portfolio')} className="link cursor-pointer my-1">Portfolio</Link>
                <Link to="/careers" onClick={()=>handlePath('/careers')} className="link cursor-pointer my-1">Careers</Link>
                <Link to="/quote" onClick={()=>handlePath('/quote')} className="link cursor-pointer my-1">Get a Quote</Link>
                <Link to="/contact" onClick={()=>handlePath('/contact')} className="link cursor-pointer my-1">Contact</Link> 

          </div>
        </div>

        <div className={`navbar-wrapper__inner hidden md:block lg:block bg-[#12141d] text-white relative px-6 
                        ${isAddPadding ? "md:pb-56" : ""}`}>
          <div className="navbar-top__section flex items-center justify-center flex-wrap gap-20 pt-6 pb-8"
          >
            <div className="navbar-logo text-2xl font-semibold">ELEVATE WEB</div>

            <div className="navbar-links__section cursor-pointer flex items-center flex-wrap justify-center gap-8 text-lg">
              <Link to="/about" onClick={()=>handlePath('/blog')} className="link cursor-pointer">About</Link>

              <div className="link cursor-pointer flex items-center justify-center gap-2 relative"
                    onClick={()=> setIsServiceTabsOpenForLarge(prev => !prev)}>
                Services
                <RiArrowDropDownLine className={`text-2xl ${isServiceTabsOpenForLarge ? 'transform rotate-180' : ''}`} />

                  {/* Below for large view */}
                  <div ref={dropdownRef} className={`text-stone-50 service-tabs-inner absolute top-12 left-4 w-[235px] border rounded-lg z-10 flex flex-col gap-1 transition-all duration-500 ease-in-out overflow-hidden
                                  ${isServiceTabsOpenForLarge ? 'max-h-[300px] opacity-100 bg-slate-100 ' : 'max-h-0 opacity-0'}`}>

                  <Link to="/uiuxpage" onClick={()=>handlePath('')} className="link pt-2 cursor-pointer flex items-center gap-2 text-gray-950 px-4 py-2"> 
                    UI/UX Design
                  </Link>
                  <Link to="/branddesignpage" onClick={()=>handlePath('')} className="link pt-2 cursor-pointer flex items-center gap-2 text-gray-950 px-4 py-2">
                    Brand Design
                  </Link>
                  <Link to="/webflowpage" onClick={()=>handlePath('')} className="link pt-2 cursor-pointer flex items-center gap-2 text-gray-950 px-4 py-2">
                    Web Flow Development
                  </Link>
                  <Link to="/nocodedevelopment" onClick={()=>handlePath('')} className="link pt-2 cursor-pointer flex items-center gap-2 text-gray-950 px-4 py-2">
                    No Code Development
                  </Link>
                        
                </div>
              </div>

              <Link to="/blog" onClick={()=>handlePath('/blog')} className="akash link cursor-pointer">Blog</Link>
              <Link to="/portfolio" onClick={()=>handlePath('/portfolio')} className="link cursor-pointer">Portfolio</Link>
              <Link to="/careers" onClick={()=>handlePath('/careers')} className="link cursor-pointer">Careers</Link>
              <Link to="/quote" onClick={()=>handlePath('/quote')} className="link cursor-pointer">Get a Quote</Link>
              <Link to="/contact" onClick={()=>handlePath('/contact')} className="link cursor-pointer">Contact</Link> 
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
