import { Link, useLocation } from 'react-router-dom';
import { FaLeaf, FaHome, FaSearch, FaBook, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <FaLeaf className="logo-icon" />
                PotatoAura
            </Link>
            <div className="nav-links">
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                    <FaHome className="nav-icon" /> Home
                </Link>
                <Link
                    to="/detect"
                    className={`nav-link ${location.pathname === '/detect' ? 'active' : ''}`}
                >
                    <FaSearch className="nav-icon" /> Detect
                </Link>
                <Link
                    to="/about"
                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                    <FaBook className="nav-icon" /> About
                </Link>
                <Link
                    to="/contact"
                    className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                >
                    <FaEnvelope className="nav-icon" /> Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;