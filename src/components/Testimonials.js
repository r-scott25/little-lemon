import React from "react";
import "./TestimonialsStyles.css";
import TestimonialCard from "./TestimonialCard.js";
import TestimonialCardData from "./TestimonialCardData.js";

function Testimonials() {
  return (
    <section className="testimonials-container">
      <h2 id="testimonials-heading">Testimonials</h2>
      <div className="testimonial-card-container">
        {TestimonialCardData.map((value, index) => {
          return (
            <div className="testimonial-card-container" key={value.id}>
            <TestimonialCard
              rating={value.rating}
              ratingStars={value.ratingStars}
              imgsrc={value.imgsrc}
              custName={value.custName}
              review={value.review}
            />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
