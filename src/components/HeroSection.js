import React from 'react';
import "./HeroSectionStyles.css";


function HeroSection(props) {
 return (
  <section className="hero-section-container">
  <div className="hero-title-container">
    <h1 className="hero-title" aria-label="hero-title">{props.title}</h1>
    <h2 className="hero-subtitle" aria-label="hero-subtitle">{props.subtitle}</h2>
  </div>
  </section>

 ) ;
}

export default HeroSection;