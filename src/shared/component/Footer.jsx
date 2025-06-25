import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="footer-section-wrapper__main px-20 pt-20 pb-8 w-full">
             <div className="footer-section-wrapper__outer flex items-baseline justify-evenly pb-12 border-b border-gray-400">
                <div className="logo-wrapper__outer w-[20%]">
                    <div className="logo-wrapper__inner">
                        <div className="logo-label text-2xl">Elevate Web</div>
                    </div>
                    <p className="logo-description mt-4">We craft high-performance digital experiences that drive real business results.</p>
                    <div className="social-handler-icon-wrapper flex items-center gap-4 mt-12 cursor-pointer">
                        <span className="bg-black text-[#b4f553] p-1 text-xl rounded-full">
                            <FaInstagram />
                        </span>
                        <span className="bg-black text-[#b4f553] p-1 text-xl rounded-full">
                            <FaFacebook />
                        </span>
                        <span className="bg-black text-[#b4f553] p-1 text-xl rounded-full">
                        <FaLinkedin />
                        </span>
                        <span className="bg-black text-[#b4f553] p-1 text-xl rounded-full">
                        <FaXTwitter />
                        </span>
                    </div>
                </div>

                <div className="quick-links-wrapper__outer">
                    <label className="quick-link-label text-2xl">Quick Links</label>
                    <div className="quick-links-wrapper__inner mt-4 flex flex-col gap-2 cursor-pointer">
                        <p>Home</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Portfolio</p>
                        <p>Contact</p>
                    </div>
                </div>

                <div className="services-wrapper__outer">
                    <label className="services-label text-2xl">Services</label>
                    <div className="services-wrapper__inner mt-4 flex flex-col gap-2 cursor-pointer">
                        <p>UI/UX Design</p>
                        <p>Brand Design</p>
                        <p>Website Design</p>
                        <p>SEO Optimization</p>
                        <p>No-Code development</p>
                    </div>
                </div>

                <div className="inspiration-section__outer">
                    <label className="inspiration-section-label text-2xl">Get the Latest Inspiration</label>
                    <div className="inspiration-section__inner mt-4 flex flex-col gap-8">
                        <input
                            type="email"
                            placeholder="Enter your email*"
                            className="border border-gray-300 p-2 rounded-md focus:border-black hover:border-gray-500 outline-none"
                        />
                       <button className="subscribe-btn bg-black text-white p-2 text-center border border-black rounded-md">Subscribe Now</button>
                    </div>
                </div>
                
            </div>
            <div className="copyright-label-container my-6 text-center">
                <label className="copyright-label text-gray-400">Copyright © 2025 Agency All rights reserved</label>
            </div>
        </div>
    )
}