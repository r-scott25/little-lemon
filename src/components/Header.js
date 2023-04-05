import React from "react";
import "./HeaderStyles.css";
import Logo from "../assets/Logo.svg";
import Basket from "../assets/Basket.svg";

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container"> <img className="logo" src={Logo} alt="Logo" /></div>
      <div className="nav-container">
      <nav className="navbar">
      <ul className="links-container">
        <li className="link">
          <a href="/">Home</a>
        </li>
        <li className="link">
          <a href="/about" className="nav-item">About</a>
        </li>
        <li className="link">
          <a href="/menu" className="nav-item">Menu</a>
        </li>
        <li className="link">
          <a href="/reservations" className="nav-item">Reservations</a>
        </li>
        <li className="link">
          <a href="/order-online" className="nav-item">Order Online</a>
        </li>
        <li className="link">
          <a href="/login" className="nav-item">Login</a>
        </li>
        <li className="link">
          <a href="/" className="nav-item basket"><img className="basket" src={Basket} alt="basket" /></a>
        </li>
      </ul>
    </nav>
      </div>
     
      {/* <img className="basket" src={Basket} alt="basket" /> */}
    </header>
  );
}

export default Header;
