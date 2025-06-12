import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaBook } from 'react-icons/fa';
import '../styles/App.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1><FaBook className="header-icon" /> About PotatoAura</h1>
                <p>Our mission to revolutionize potato farming through technology</p>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <h2>🌱 Our Story</h2>
                    <p className="bold-text">
                        <strong>Welcome to Potato Aura – Your Smart Plant Doctor!</strong> Powered by advanced AI
                        technology, Potato Aura allows you to upload a clear image of your potato
                        plant's leaf and instantly detect diseases like <strong>Early Blight</strong>, <strong>Late Blight</strong>,
                        and <strong>Leaf Spot</strong>.
                    </p>
                    <p className="bold-text">
                        <strong>🚀 Fast & Reliable:</strong> With just a single click, our intelligent system delivers fast,
                        reliable, and expert-level diagnoses—no waiting, no guesswork.
                    </p>
                    <p className="bold-text">
                        <strong>👩‍🌾 For Everyone:</strong> Whether you're a farmer, gardener, student, or plant lover,
                        our app helps you identify infections early, suggest possible treatments,
                        and improve plant health while reducing unnecessary pesticide use.
                    </p>
                    <p className="bold-text">
                        <strong>💡 Smart Solution:</strong> It's like having a plant pathologist in your pocket—ready to protect your crops anytime,
                        anywhere. <strong>Detect. Diagnose. Defend.</strong>
                    </p>
                </div>
            </div>

            <div className="team-section">
                <h2 style={{ textAlign: 'center' }}>👥 Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Team Member" />
                        <h3>👩‍🔬 Dr. Sarah Chen</h3>
                        <p>Chief Scientist</p>
                    </div>
                    <div className="team-member">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" />
                        <h3>👨‍💻 Raj Patel</h3>
                        <p>AI Engineer</p>
                    </div>
                    <div className="team-member">
                        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Team Member" />
                        <h3>👩‍🌾 Maria Gonzalez</h3>
                        <p>Plant Pathologist</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;