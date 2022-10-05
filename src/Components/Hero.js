import { FaArrowDown, FaUser, FaFacebookMessenger, FaFacebookF } from "react-icons/fa"
import HeroImg from "../images/hero.png"

const Hero = () => {
    return (
        <div className="home-hero">
            <div className="hero-img">
                <img src={HeroImg} alt="home-hero-img" />
            </div>
            <div className="main">
                <p className="title">focus eye care & surgery <span>your vision. our focus.</span></p>
                <p className="text">We can help you achieve clear, sharp vision with modern technology for eye surgery in New York.</p>
                <a href="/contact" className="hero-btn">Book Online</a>
                <p className="explore"><span><FaArrowDown /></span> Explore More</p>
            </div>
            <div className="side">
                <div className="social-links">
                    <span><FaFacebookF /></span>
                    <span><FaFacebookF /></span>
                </div>
                <div className="contact-links">
                    <a href="/contact" className="chat"><span><FaFacebookMessenger /></span> Let's Chat!</a>
                    <a href="/contact" className="direction"><span><FaUser /></span> CTRL+A</a>
                </div>
            </div>
            <div className="mobile">
                <span><FaUser /></span>
            </div>
        </div>
    );
}

export default Hero;