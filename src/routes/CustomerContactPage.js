import React, { useState} from "react";
import "./CustomerContactPageStyles.css";
import SelectedReservations from "../components/SelectedReservations.js";
import CustomerContactForm from "../components/CustomerContactForm.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import HeroSection from "../components/HeroSection.js";
import dinnerTableFifty from "../assets/dinnerTable-50-1387.jpg";

function CustomerContactPage(props) {
  return (
    <>
      <div className="contact-body-container" role="main">
        <header>
          <Header />
        </header>

        <main className="contact-main-container">
          <section className="hero-image" aria-label="hero-image">
            <img
              className="dinner-img"
              src={dinnerTableFifty}
              alt="birds-eye-view of diners at a table with dishes of Italian food"
            />
          </section>
          <section className="contact-hero-section" aria-label="contact-hero-section">
            <HeroSection
              title="Contact Information"
              subtitle="We’ll keep you updated on your reservation!"
            />
          </section>
          <section className="selected-res-section" aria-label="selected-reservation-section">
            {/* <SelectedReservations /> */}
          </section>
          <section className="contact-form-section" aria-label="contact-form-section">
            <CustomerContactForm />
          </section>
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default CustomerContactPage;
