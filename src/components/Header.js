import React, { useEffect, useState, prevState } from "react";
import "./HeaderStyles.css";
import Logo from "../assets/Logo.svg";
import Basket from "../assets/Basket.svg";

function Header() {
  const [isLinksContainerVisible, setLinksContainerVisibility] = useState(
    false
  );
  const [linksContainerClass, setLinksContainerClass] = useState("hidden");

  const toggleLinksContainer = () => {
    setLinksContainerVisibility((prevState) => !prevState);
    setLinksContainerClass((prevState) =>
      prevState === "hidden" ? "" : "hidden"
    );
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <a href="/" className="logo-link">
          <img className="logo" src={Logo} alt="Logo" />
        </a>
      </div>

      <div className="nav-container">
        <a href="#" className="toggle-button" onClick={toggleLinksContainer}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <nav className="navbar">
        <ul className={`links-container ${linksContainerClass}`}>

            <li className="link">
              <a href="/">Home</a>
            </li>
            <li className="link">
              <a href="/about" className="nav-item">
                About
              </a>
            </li>
            <li className="link">
              <a href="/menu" className="nav-item">
                Menu
              </a>
            </li>
            <li className="link">
              <a href="/reservations" className="nav-item">
                Reservations
              </a>
            </li>
            <li className="link">
              <a href="/order-online" className="nav-item">
                Order Online
              </a>
            </li>
            <li className="link">
              <a href="/login" className="nav-item">
                Login
              </a>
            </li>
            <li className="link">
              <a href="/cart" className="nav-item basket">
                <img className="basket" src={Basket} alt="basket" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
