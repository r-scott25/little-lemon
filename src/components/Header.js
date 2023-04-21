import React, { useEffect, useState, prevState } from "react";
import "./HeaderStyles.css";
import Logo from "../assets/Logo.svg";
import Basket from "../assets/Basket.svg";

function Header() {
  const [currentPage, setCurrentPage] = useState(null);
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
    <header className="header-container" role="banner">
      <div className="logo-container">
        <a href="/" className="logo-link" aria-label="Site Name">
          <img className="logo" src={Logo} alt="Logo" />
        </a>
      </div>

      <div className="nav-container">
        <a
          href="#"
          className="toggle-button"
          onClick={toggleLinksContainer}
          aria-expanded={linksContainerClass === "show"}
          aria-controls="navbar-links-container"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <nav className="navbar" role="navigation">
          <ul
            className={`links-container ${linksContainerClass}`}
            id="navbar-links-container"
          >
            <li className="link">
              <a
                href="/"
                className="nav-item"
                aria-current={currentPage === "home" ? "page" : null}
              >
                Home
              </a>
            </li>
            <li className="link">
              <a href="/about" className="nav-item" aria-current={currentPage === 'about' ? 'page' : null}>
                About
              </a>
            </li>
            <li className="link">
              <a href="/menu" className="nav-item" aria-current={currentPage === 'menu' ? 'page' : null}>
                Menu
              </a>
            </li>
            <li className="link">
              <a href="/reservations" className="nav-item" aria-current={currentPage === 'reservations' ? 'page' : null}>
                Reservations
              </a>
            </li>
            <li className="link">
              <a href="/order-online" className="nav-item" aria-current={currentPage === 'order-online' ? 'page' : null}>
                Order Online
              </a>
            </li>
            <li className="link">
              <a href="/login" className="nav-item" aria-current={currentPage === 'login' ? 'page' : null}>
                Login
              </a>
            </li>
            <li className="link">
              <a href="/basket" className="nav-item basket" aria-current={currentPage === 'basket' ? 'page' : null}>
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
