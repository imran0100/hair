import React from 'react';
import './Review.css';

let data = [
  {
    src: "https://hairsncares.com/assets/img/home/user.png",
    name: "KANAV RISHI",
    rating: 4,
    massage: "I am absolutely thrilled with the results I can't thank you enough for creating such fantastic products...",
    logo: "https://hairsncares.com/assets/img/google-icon.webp"
  },
  {
    src: "https://hairsncares.com/assets/img/home/user.png",
    name: "KANAV RISHI",
    rating: 4,
    massage: "I am absolutely thrilled with the results I can't thank you enough for creating such fantastic products...",
    logo: "https://hairsncares.com/assets/img/google-icon.webp"
  },
  {
    src: "https://hairsncares.com/assets/img/home/user.png",
    name: "KANAV RISHI",
    rating: 4,
    massage: "I am absolutely thrilled with the results I can't thank you enough for creating such fantastic products...",
    logo: "https://hairsncares.com/assets/img/google-icon.webp"
  }
];

function Review() {
  return (
    <div className="review-container container">
      {data.map((item, index) =>
        <div key={index} className="review-card">
          <img src={item.src} alt={item.name} />
          <p>Name: {item.name}</p>
          <p>Rating: {item.rating}</p>
          <p>{item.massage}</p>
          <p>Thank You</p>

          <div className="logo-container">
            <img src={item.logo} alt="Google Logo" />
            <span>12 Days ago</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Review;
