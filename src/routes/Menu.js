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
          <div >
            <form className="form-container">
              <div className="first-name-label" ><label>First Name</label></div>
              <div className="first-name-input"><input type="text" name="name" /></div>
              <div className="last-name-label"><label>Last Name</label></div>
              <div className="last-name-input"><input type="text" name="name" /></div>
              <div className="color-label"><label>Favorite Color</label></div>
              <div className="color-input"><input type="text" name="name" /></div>
              <div className="activity-label"><label>Favorite Activity</label></div>
              <div className="activity-input"><input type="text" name="name" /></div>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Menu;
