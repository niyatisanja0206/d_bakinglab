import React, { useState } from 'react';
import '../css/service.css';
import menuData from '../assets/menuData.json'; // Import the menu data JSON

const Service = () => {
    const [cakeSize, setCakeSize] = useState('');
    const [cakeFlavor, setCakeFlavor] = useState('');
    const [designDescription, setDesignDescription] = useState('');
    const [referenceImage, setReferenceImage] = useState(null);
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const [bulkCategory, setBulkCategory] = useState('');
    const [bulkItem, setBulkItem] = useState('');
    const [bulkQuantity, setBulkQuantity] = useState('');
    const [bulkContactNumber, setBulkContactNumber] = useState('');
    const [bulkAddress, setBulkAddress] = useState('');
    const [bulkOrderMessage, setBulkOrderMessage] = useState('');

    const handleCakeSubmit = (e) => {
        e.preventDefault();
        setMessage('We will contact you soon to discuss price and other details. Thank you for your order!');
        setCakeSize('');
        setCakeFlavor('');
        setDesignDescription('');
        setReferenceImage(null);
        setContactNumber('');
        setAddress('');
    };

    const handleBulkSubmit = (e) => {
        e.preventDefault();
        setBulkOrderMessage('Your bulk order has been received. We will contact you soon to discuss price and other details. Thank you!');
        setBulkCategory('');
        setBulkItem('');
        setBulkQuantity('');
        setBulkContactNumber('');
        setBulkAddress('');
    };

    // Get item names based on selected category
    const getItemNames = (category) => {
        const selectedCategory = menuData.find(item => item.category === category);
        return selectedCategory ? selectedCategory.items : [];
    };

    return (
        <div className="service-container">
            <div className="form-container">
                <h1>Customize Your Cake</h1>
                <form onSubmit={handleCakeSubmit} className="cake-customization-form">
                    <div className="form-group">
                        <label htmlFor="cake-size">Cake Size (in grams):</label>
                        <input
                            type="number"
                            id="cake-size"
                            value={cakeSize}
                            onChange={(e) => setCakeSize(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cake-flavor">Cake Flavor:</label>
                        <select
                            id="cake-flavor"
                            value={cakeFlavor}
                            onChange={(e) => setCakeFlavor(e.target.value)}
                            required
                        >
                            <option value="">Select flavor</option>
                            <option value="chocolate">Chocolate</option>
                            <option value="vanilla">Vanilla</option>
                            <option value="red-velvet">Red Velvet</option>
                            <option value="strawberry">Strawberry</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="design-description">Description of Design:</label>
                        <textarea
                            id="design-description"
                            value={designDescription}
                            onChange={(e) => setDesignDescription(e.target.value)}
                            required
                            placeholder="Describe your cake design here..."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reference-image">Reference Image:</label>
                        <input
                            type="file"
                            id="reference-image"
                            accept="image/*"
                            onChange={(e) => setReferenceImage(e.target.files[0])}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-number">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact-number"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            placeholder="Enter your address here..."
                        />
                    </div>
                    <button type="submit" className="submit-button">Order Now</button>
                </form>
                {message && <p className="success-message">{message}</p>}
            </div>

            <div className="form-container bulk-order-form">
                <h1>Bulk Order Form</h1>
                <form onSubmit={handleBulkSubmit}>
                    <div className="form-group">
                        <label htmlFor="bulk-category">Select Category:</label>
                        <select
                            id="bulk-category"
                            value={bulkCategory}
                            onChange={(e) => {
                                setBulkCategory(e.target.value);
                                setBulkItem(''); // Reset item selection when category changes
                            }}
                            required
                        >
                            <option value="">Select category</option>
                            {menuData.map((category, index) => (
                                <option key={index} value={category.category}>{category.category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bulk-item">Select Item:</label>
                        <select
                            id="bulk-item"
                            value={bulkItem}
                            onChange={(e) => setBulkItem(e.target.value)}
                            required
                            disabled={!bulkCategory} // Disable until category is selected
                        >
                            <option value="">Select item</option>
                            {bulkCategory && getItemNames(bulkCategory).map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bulk-quantity">Number of Items:</label>
                        <input
                            type="number"
                            id="bulk-quantity"
                            value={bulkQuantity}
                            onChange={(e) => setBulkQuantity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bulk-contact-number">Contact Number:</label>
                        <input
                            type="tel"
                            id="bulk-contact-number"
                            value={bulkContactNumber}
                            onChange={(e) => setBulkContactNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bulk-address">Address:</label>
                        <textarea
                            id="bulk-address"
                            value={bulkAddress}
                            onChange={(e) => setBulkAddress(e.target.value)}
                            required
                            placeholder="Enter your address here..."
                        />
                    </div>
                    <button type="submit" className="submit-button">Order Now</button>
                </form>
                {bulkOrderMessage && <p className="success-message">{bulkOrderMessage}</p>}
            </div>
        </div>
    );
};

export default Service;
