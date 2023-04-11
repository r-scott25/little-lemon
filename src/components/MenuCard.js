import React from "react";
import MenuCardStyles from "./MenuCardStyles.css";
import "./MenuCardData.js";
import scooter from "../assets/scooter.svg";

function MenuCard(props) {
  return (
    <div className="menu-card">
      <img className="dishImage" src={props.imgsrc} alt={props.dishName} />
      <div className="name-and-price">
        <a href="/menu"><h3 className="dishName">{props.dishName}</h3></a>
        <h4 className="dishPrice">{props.dishPrice}</h4>
      </div>
      <div className="dishDescription">
        <p>{props.dishDescription}</p>
      </div>
      <div className="deliveryLink-container"> <a className="orderDeliveryLink" href="/order-online">Order a Delivery</a>
      <a className="scooterDeliveryLink" href="/order-online"><img className="scooterIcon" src={scooter} alt="Scooter Icon" /></a>
      
      </div>
     
    </div>
  );
}

export default MenuCard;
