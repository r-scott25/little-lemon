import React from "react";
import TestimonialCardData from "./TestimonialCardData.js";
import "./TestimonialCardStyles.css";

function TestimonialCard(props) {
  return (
    <>
    <div className="testimonial-card-container" role="region" aria-label="Testimonial Card">
      <div className="testimonial-card" role="article" aria-labelledby="cust-name">
        {" "}
        <div className="rating-stars" role="img" aria-label={`Rating: ${props.rating}`}>
          {props.ratingStars.map((star, index) => (
            <img key={index} src={star} alt="star" />
          ))}
        </div>
        <div className="name-and-image">
          {" "}
          <img className="cust-image" src={props.imgsrc} alt={props.custName} />
          <h3 className="cust-name">{props.custName}</h3>
        </div>
        <div className="review" role="blockquote" aria-label="Customer review">
          <p>{props.review}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default TestimonialCard;
