import React from "react";
import TestimonialsStyles from "./TestimonialsStyles.css";
import TestimonialCard from "./TestimonialCard.js";
import TestimonialCardData from "./TestimonialCardData.js";

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <h2 id="testimonials-heading">Testimonials</h2>
      <div className="testimonial-card-container">
        {TestimonialCardData.map((value, index) => {
          return (
            <TestimonialCard
              key={index}
              rating={value.rating}
              ratingStars={value.ratingStars}
              imgsrc={value.imgsrc}
              custName={value.custName}
              review={value.review}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
