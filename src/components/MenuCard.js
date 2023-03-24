import React from "react";
import MenuCardStyles from "./MenuCardStyles.css";
import MenuCardData from "./MenuCardData.js";
import scooter from "../assets/scooter.svg";

const MenuCard = (props) => {
  return (
    <div className="menu-card">
      <img src={props.imgsrc} alt={props.dishName} />
      <h3 className="dishName">{props.dishName}</h3>
      <h4 className="dishPrice">{props.dishPrice}</h4>
      <div className="dishDescription">
        <p>{props.dishDescription}</p>
      </div>
      <div className="deliveryLink"></div>
      <a href="/order-online">Order a delivery</a>
      <img id="scooterIcon" src={scooter} alt="Scooter Icon" />
    </div>
  );
};

export default MenuCard;
