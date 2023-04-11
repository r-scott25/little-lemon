import React from "react";
import "./MenuStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function Menu() {
  return (
    <div className="menu-body-container">
      <header>
        <Header />
      </header>

      <main className="menu-main-container">
        <div className="menu-title">
          <h1>Menu</h1>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Menu;
