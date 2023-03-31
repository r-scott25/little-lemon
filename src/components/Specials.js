import React from "react";
import "./SpecialsStyles.css";
import MenuCard from "./MenuCard.js";
import MenuCardData from "./MenuCardData.js";

function Specials() {
  return (
    <section id="specials-container">
  <h1>This week's specials!</h1>
    <button id="menuButton"><a href="/menu">Online Menu</a></button>
    <div id="menu-card-container">
    {MenuCardData.map((value, index) => {
      return (
        <MenuCard
        key= {index}
        imgsrc={value.imgsrc}
        dishName={value.dishName}
        dishPrice={value.dishPrice}
        dishDescription={value.dishDescription}
        />
      )
    })}
    </div>
    </section>

  )
}

export default Specials;