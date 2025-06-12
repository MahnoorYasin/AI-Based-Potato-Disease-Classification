import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} PotatoAura. All rights reserved.</p>
        </footer>
    );
};

export default Footer;