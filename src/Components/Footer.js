import '../Styles/footer.css'
import { Link } from "react-router-dom"
import { FaArrowUp, FaUser, FaFacebookF } from "react-icons/fa"
import "../Styles/footer.css"

function Footer() {
    return (
        <footer>
            <div className='logo'>
                <p className='logo-text'><span>focus</span><br />eye care & surgery</p>
                <p className="copyright">&copy; By 2022 Focus Eye Care & Surgery</p>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/conditions">Conditions</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <ul>
                    <li><Link to="/">Publications</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className='socials-mobile'><span><FaFacebookF /></span>
                        <span><FaFacebookF /></span></li>
                </ul>
                <div className='socials'>
                    <span><FaFacebookF /></span>
                    <span><FaFacebookF /></span>
                </div>
            </div>
            <div className="buttons">
                <a href="#" className="footer-btn">Book Online</a>
                <span className="arrow-up"><FaArrowUp /></span>
                <span className='mobile-user'><FaUser /></span>
            </div>
            <p className="copyright-mobile">&copy; By 2022 Focus Eye Care & Surgery</p>
        </footer>
    )
}

export default Footer;