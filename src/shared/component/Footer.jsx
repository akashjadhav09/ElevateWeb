export default function Footer(){
    return(
        <div className="footer-section-wrapper__main">
             <div className="footer-section-wrapper__outer">

                <div className="logo-wrapper__outer">
                    <div className="logo-wrapper__inner">
                        <div className="logo-label">Elevate Web</div>
                        <p className="logo-description">We craft high-performance digital experiences that drive real business results.</p>
                    </div>
                    <div className="social-handler-icon-wrapper">
                        
                    </div>
                </div>

                <div className="quick-links-wrapper__outer">
                    <label className="quick-link-label">Quick Links</label>
                    <div className="quick-links-wrapper__inner">
                        <p>Home</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Portfolio</p>
                        <p>Contact</p>
                    </div>
                </div>

                <div className="services-wrapper__outer">
                    <label className="services-label">Services</label>
                    <div className="services-wrapper__inner">
                        <p>UI/UX Design</p>
                        <p>Brand Design</p>
                        <p>Website Design</p>
                        <p>Webflow Design</p>
                        <p>SEO Optimization</p>
                        <p>No-Code development</p>
                    </div>
                </div>

                <div className="inspiration-section__outer">
                    <label className="inspiration-section-label">Get the Latest Inspiration</label>
                    <div className="inspiration-section__inner">
                       <input type="email" placeholder="Enter your email*"/>
                       <button className="subscribe-btn">Subscribe Now</button>
                    </div>
                </div>

            </div>
            <div className="copyright-label-container">
                <label className="copyright-label">Copyright © 2025 Agency All rights reserved</label>
            </div>
        </div>
    )
}