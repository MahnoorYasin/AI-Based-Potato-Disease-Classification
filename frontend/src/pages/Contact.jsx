import React, { useState } from 'react'; // Add React import
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/App.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! We'll contact you at ${formData.email}.`);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1><FaEnvelope className="header-icon" /> Contact Us</h1>
                <p>Have questions or feedback? We'd love to hear from you!</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Get In Touch</h2>

                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <div>
                            <h3>Address</h3>
                            <p>123 Agriculture Street<br />Farmville, PV 12345</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaPhoneAlt className="info-icon" />
                        <div>
                            <h3>Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <div>
                            <h3>Email</h3>
                            <p>info@potatoaura.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaClock className="info-icon" />
                        <div>
                            <h3>Working Hours</h3>
                            <p>Monday - Friday: 9am - 5pm<br />Saturday: 10am - 2pm</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;