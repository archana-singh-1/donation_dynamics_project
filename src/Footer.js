import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
            <div className="footerDetails">
                <div className="aboutUs">
                    <h3>About Us</h3>
                    <p>We are dedicated to the empowerment of farmers and promoting sustainability.</p>
                    <Link to="/about">Learn More</Link>
                </div>
                <div className="contactUs">
                    <h3>Contact Us</h3>
                    <p>Phone: +123456789</p>
                    <p>Email: support@farmerdonites.com</p>
                    <Link to="/contact">Get in Touch</Link>
                </div>
                <div className="social-media-icons">
                    <a href="https://www.facebook.com"  >
                    <FaFacebook className="icon" />
                    </a>
                    <a href="https://www.twitter.com"  >
                    <FaTwitter className="icon" />
                    </a>
                    <a href="https://www.linkedin.com" >
                    <FaLinkedin className="icon" />
                    </a>
                    <a href="https://www.instagram.com"  >
                    <FaInstagram className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
