import React from 'react';
import HeroHomeStyles from './HeroHomeStyles.css';
import restaurantfood from "../assets/restaurantfood.jpg";

const HeroHome = () => {
  return (
    <section id="heroHome">
      <article id="heroIntro">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
      </article>
      <button id="smallReserveTableBtn"><a href="/reservations">Reserve a Table</a></button>
      <img src={restaurantfood} alt="restaurant server holding a plate of bread." />

    </section>
  )
}

export default HeroHome;