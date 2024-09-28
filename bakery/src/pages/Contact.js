import React, { useState } from 'react';
import '../css/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to backend)
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
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
                    <label htmlFor="email">Email:</label>
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
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
            <div className="locations">
                <h2>Our Locations</h2>
                <ul>
                    <li>
                        <strong>Main Bakery:</strong> 123 Sweet St, Baked Town, BT 12345
                    </li>
                    <li>
                        <strong>Downtown Outlet:</strong> 456 Sugar Ave, Sugar City, SC 67890
                    </li>
                    <li>
                        <strong>Uptown Cafe:</strong> 789 Cake Blvd, Dessert City, DC 11223
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;

