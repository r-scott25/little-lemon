import React from "react";
import "./SpecialsStyles.css";
import MenuCard from "./MenuCard.js";
import MenuCardData from "./MenuCardData.js";

function Specials() {
  return (
    <section id="specials-container">
      <div className="specialsTitle-and-menuButton"> <h1 className="specialsTitle">This week's specials!</h1>
      <div>
        <a className="btn" id="menuButton" href="/menu">
          Online Menu
        </a>
      </div></div>
     
      <div className="menu-card-container">
        {MenuCardData.map((value) => {
          return (
            <div className="menu-card-container" key={value.id}>
              <MenuCard
                imgsrc={value.imgsrc}
                dishName={value.dishName}
                dishPrice={value.dishPrice}
                dishDescription={value.dishDescription}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Specials;
