import React from 'react';
import HeroSectionStyles from "./HeroSectionStyles.css";


const HeroSection = (props) => {
 return (
  <>
  <section className="hero-section-container">
  <div className="hero-image">
    <img src={props.heroImage} alt={props.imageAlt} />
  </div>
  <div className="hero-title">
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
  </section>
  </>

 ) ;
}

export default HeroSection;