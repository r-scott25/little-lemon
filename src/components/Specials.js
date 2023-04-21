import React from "react";
import "./SpecialsStyles.css";
import MenuCard from "./MenuCard.js";
import MenuCardData from "./MenuCardData.js";

function Specials() {
  return (
    <>
    <section className="specials-container" role="region" aria-label="This week's specials!">
      <div className="specials-title-and-menu-button"> <h1 className="specials-title">This week's specials!</h1>
      <div>
        <a className="btn" id="menu-button" href="/menu">
          Online Menu
        </a>
      </div></div>
     
      <div className="menu-card-container" role="list">
        {MenuCardData.map((value) => {
          return (
            <div className="menu-card-inner-container" key={value.id} role="listitem">
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
    </>
  );
}

export default Specials;
