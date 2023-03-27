import React from 'react';
import { Link } from "react-router-dom";
import './HomepageHeroStyles.css';
import restaurantfood from "../assets/restaurantfood.jpg";

const HomepageHero = () => {
  return (
    <section id="heroHome">
      <article id="heroIntro">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
      </article>
      <Link to="/reservations">
      <button className="btn" id="smallReserveTableBtn"><a href="/reservations">Reserve a Table</a></button>
      </Link>
      <button id="smallReserveTableBtn"><a href="/reservations">Reserve a Table</a></button>
      <img src={restaurantfood} alt="restaurant server holding a plate of bread." />

    </section>
  )
}

export default HomepageHero;