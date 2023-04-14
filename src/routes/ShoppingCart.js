import React from "react";
import "./ShoppingCartStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function ShoppingCart() {
  return (
    <>
    <div className="shopping-cart-body-container">
      <header>
        <Header />
      </header>

      <main className="shopping-cart-main-container">
        <div className="shopping-cart-title">
          <h1>Shopping Cart</h1>
        </div>
        <div className="shopping-cart-subtitle"> 
          <h2>Shopping Cart Coming Soon</h2>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default ShoppingCart;
