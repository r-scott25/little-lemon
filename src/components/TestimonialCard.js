import React from "react";
import TestimonialCardData from "./TestimonialCardData.js";
import TestimonialCardStyles from "./TestimonialCardStyles.css";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card">
      <div className="rating-stars">
        {props.ratingStars.map((star, index) => (
          <img key={index} src={star} alt="star" />
        ))}
      </div>
      <img src={props.imgsrc} alt={props.custName} />
      <h3 className="custName">{props.custName}</h3>
      <div className="review">
        <p>{props.review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
