import React, { useState, useEffect } from 'react';
import '../css/menu.css';
import menuData from '../assets/menuCategory.json';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import image1 from '../assets/items/1.jpg';
import image2 from '../assets/items/2.jpg';
import image3 from '../assets/items/3.jpg';
import image4 from '../assets/items/4.jpg';
import image5 from '../assets/items/5.jpg';
import image6 from '../assets/items/6.jpg';
import image7 from '../assets/items/7.jpg';
import image8 from '../assets/items/8.jpg';
import image9 from '../assets/items/9.jpg';
import image10 from '../assets/items/10.jpg';
import image11 from '../assets/items/11.jpg';
import image12 from '../assets/items/12.jpg';
import image13 from '../assets/items/13.jpg';
import image14 from '../assets/items/14.jpg';
import image15 from '../assets/items/15.jpg';
import image16 from '../assets/items/16.jpg';
import image17 from '../assets/items/17.jpg';
import image18 from '../assets/items/18.jpg';
import image19 from '../assets/items/19.jpg';
import image20 from '../assets/items/20.jpg';
import image21 from '../assets/items/21.jpg';
import image22 from '../assets/items/22.jpg';
import image23 from '../assets/items/23.jpg';
import image24 from '../assets/items/24.jpg';
import image25 from '../assets/items/25.jpg';
import image26 from '../assets/items/26.jpg';
import image27 from '../assets/items/27.jpg';
import image28 from '../assets/items/28.jpg';
import image29 from '../assets/items/29.jpg';
import image30 from '../assets/items/30.jpg';
import image31 from '../assets/items/31.jpg';
import image32 from '../assets/items/32.jpg';

const imageMap = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
  5: image5,
  6: image6,
  7: image7,
  8: image8,
  9: image9,
  10: image10,
  11: image11,
  12: image12,
  13: image13,
  14: image14,
  15: image15,
  16: image16,
  17: image17,
  18: image18,
  19: image19,
  20: image20,
  21: image21,
  22: image22,
  23: image23,
  24: image24,
  25: image25,
  26: image26,
  27: image27,
  28: image28,
  29: image29,
  30: image30,
  31: image31,
  32: image32,
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('cakes');
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    contact: '',
    address: '',
    quantity: 1, // Add quantity field
  });
  
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const updatedItems = menuData[selectedCategory].map((item) => ({
      ...item,
      image: imageMap[item.imageId],
    }));
    setItems(updatedItems);
  }, [selectedCategory]);

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      ...userDetails,
      item: selectedItem,
    };
    
    console.log('Order Details:', orderDetails); // Debugging log
    navigate('/ordered', { state: orderDetails }); // Navigate to Ordered page with state
    setShowForm(false);
    setUserDetails({
      name: '',
      contact: '',
      address: '',
      quantity: 1, // Reset quantity to 1
    });
  };

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="category-buttons">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-button ${category === selectedCategory ? 'active' : ''}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {items.map((item) => (
          <div key={item.id} className="menu-item-card">
            <img src={item.image} alt={item.name} />
            <h3 className="menu-item-name">{item.name}</h3>
            <p className="menu-item-description">{item.description}</p>
            <p className="menu-item-price">${item.price.toFixed(2)}</p>
            <button className="order-button" onClick={() => handleOrderClick(item)}>
              Order Now
            </button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="order-form-overlay">
          <div className="order-form">
            <h2>Order Form</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Contact Number:
                <input
                  type="text"
                  name="contact"
                  value={userDetails.contact}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Address:
                <textarea
                  name="address"
                  value={userDetails.address}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Quantity:
                <input
                  type="number"
                  name="quantity"
                  value={userDetails.quantity}
                  onChange={handleInputChange}
                  min="1"
                  required
                />
              </label>
              <button type="submit" className="submit-order-button">
                Order
              </button>
            </form>
            <button className="close-form-button" onClick={() => setShowForm(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;