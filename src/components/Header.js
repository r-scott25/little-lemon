import React from "react";
import Navbar from "./Navbar";
import "./HeaderStyles.css";
import Logo from "../assets/Logo.svg";
import Basket from "../assets/Basket.svg";

const Header = () => {
  return (
    <header className="header-container">
      <img className="logo" src={Logo} alt="Logo" />
      <Navbar />
      <img className="basket" src={Basket} alt="basket" />
    </header>
  );
};

export default Header;
