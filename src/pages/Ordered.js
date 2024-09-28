import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/ordered.css';

const Ordered = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const orderDetails = location.state; // Retrieve order details from location state
  const [isShipped, setIsShipped] = useState(false); // State to track if the item is shipped

  // Check if orderDetails exists
  if (!orderDetails) {
    return <div>No order details available.</div>;
  }

  // Function to handle the "Shipped" button click
  const handleShippedClick = () => {
    setIsShipped(true); // Mark the item as shipped
  };

  // Function to handle the "Go to Menu" button click
  const handleGoToMenuClick = () => {
    navigate('/menu'); // Use navigate to redirect to the menu page
  };

  return (
    <div className="ordered-container">
      <h1>Order Confirmation</h1>
      <h2>Item Ordered:</h2>
      <div className="order-details">
        <h3>{orderDetails.item.name}</h3>
        <img src={orderDetails.item.image} alt={orderDetails.item.name} />
        <p>Description: {orderDetails.item.description}</p>
        <p>Price: Rs.{orderDetails.item.price.toFixed(2)}</p>
        <p>Quantity: {orderDetails.quantity}</p>
      </div>

      <h2>User Details:</h2>
      <p>Name: {orderDetails.name}</p>
      <p>Contact: {orderDetails.contact}</p>
      <p>Address: {orderDetails.address}</p>

      {!isShipped && (
        <button className="shipped-button" onClick={handleShippedClick}>
          Mark as Shipped
        </button>
      )}

      {isShipped && <p>The item has been marked as shipped.</p>}

      <button className="go-to-menu" onClick={handleGoToMenuClick}>
        Go to Menu
      </button>
    </div>
  );
};

export default Ordered;
