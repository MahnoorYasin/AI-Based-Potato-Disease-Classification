import { FaBolt, FaChartLine, FaLightbulb } from 'react-icons/fa';
import '../styles/App.css';

const Home = () => {
    return (
        <>
            <section className="hero">
                <h1>Welcome to Advanced Potato Disease Detection</h1>
                <p>Revolutionizing agriculture with AI-powered potato disease identification and treatment recommendations</p>
            </section>

            <div className="content">
                <h2>Why Choose PotatoAura?</h2>
                <p>Our cutting-edge technology helps farmers detect potato diseases early, saving crops and increasing yields.</p>

                <div className="features">
                    <div className="feature-card">
                        <FaBolt className="feature-icon" />
                        <h3>Fast Detection</h3>
                        <p>Get instant results with our AI-powered detection system.</p>
                    </div>
                    <div className="feature-card">
                        <FaChartLine className="feature-icon" />
                        <h3>Accurate Analysis</h3>
                        <p>Highly accurate disease identification with detailed reports.</p>
                    </div>
                    <div className="feature-card">
                        <FaLightbulb className="feature-icon" />
                        <h3>Smart Solutions</h3>
                        <p>Personalized treatment recommendations for each case.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;