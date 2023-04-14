import React from 'react';
import "./AboutStyles.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function About() {
  return (
    <>
    <div className="about-body-container">
      <header>
        <Header />
      </header>

      <main className="about-main-container">
        <div className="about-title">
          <h1>About</h1>
        </div>
        <div className="about-subtitle"> 
          <h2>About Little Lemon Coming Soon</h2>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
};

export default About;
