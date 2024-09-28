import React, { useState } from 'react';
import '../css/review.css';

const Review = () => {
    const [yourName, setYourName] = useState('');
    const [rating, setRating] = useState('');
    const [reviewMessage, setReviewMessage] = useState('');
    const [reviewImage, setReviewImage] = useState(null);
    const [reviews, setReviews] = useState([
        {
            name: 'John Doe',
            rating: 5,
            message: 'Amazing cakes! Will order again!',
            image: '../assets/team-1.jpg', // Replace with a valid image path
        },
        {
            name: 'Jane Smith',
            rating: 4,
            message: 'Delicious and beautifully designed.',
            image: '../assets/team-1.jpg', // Replace with a valid image path
        },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newReview = {
            name: yourName,
            rating: rating,
            message: reviewMessage,
            image: reviewImage ? URL.createObjectURL(reviewImage) : null, // Convert image to URL for display
        };

        setReviews([...reviews, newReview]); // Add the new review to the list
        setYourName('');
        setRating('');
        setReviewMessage('');
        setReviewImage(null); // Reset image after submission
    };

    return (
        <div className="review-container">
            <form onSubmit={handleSubmit} className="review-form">
                <div className="form-group">
                    <label htmlFor="your-name">Your Name:</label>
                    <input
                        type="text"
                        id="your-name"
                        value={yourName}
                        onChange={(e) => setYourName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    >
                        <option value="">Select Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="review-message">Review Message:</label>
                    <textarea
                        id="review-message"
                        value={reviewMessage}
                        onChange={(e) => setReviewMessage(e.target.value)}
                        required
                        placeholder="Write your review here..."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="review-image">Upload an Image:</label>
                    <input
                        type="file"
                        id="review-image"
                        accept="image/*"
                        onChange={(e) => setReviewImage(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="submit-button">Submit Review</button>
            </form>

            <div className="reviews-list">
                <h1>Our Setisfied Customers</h1>
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        {review.image && <img src={review.image} alt="Review Item" className="item-image" />}
                        <h3>{review.name}</h3>
                        <p>Rating: {review.rating} ⭐</p>
                        <p>{review.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
