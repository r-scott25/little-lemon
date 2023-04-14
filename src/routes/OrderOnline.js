import React from 'react';
import "./OrderOnlineStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function OrderOnline() {
  return (
    <>
    <div className="order-online-body-container">
      <header>
        <Header />
      </header>

      <main className="order-online-main-container">
        <div className="order-online-title">
          <h1>Order Online</h1>
        </div>
        <div className="order-online-subtitle"> 
          <h2>Online Ordering Coming Soon</h2>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
};

export default OrderOnline;
