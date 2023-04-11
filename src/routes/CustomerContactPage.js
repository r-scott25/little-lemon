import React, { useState } from "react";
import "./CustomerContactPageStyles.css";
import SelectedReservations from "../components/SelectedReservations.js";
import CustomerContactForm from "../components/CustomerContactForm.js";
// import { reservationData } from "./Reservations.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import HeroSection from "../components/HeroSection.js";
import dinnerTableFifty from "../assets/dinnerTable-50-1387.jpg";

function CustomerContactPage(props) {
  return (
    <div className="contact-body-container">
      <header>
        <Header />
      </header>

      <main className="contact-main-container">
        <section className="hero-image">
          <img
          className="dinner-img"
            src={dinnerTableFifty}
            alt="birds-eye-view of diners at a table with dishes of Italian food"
          />
        </section>
        <section className="contact-hero-section">
          <HeroSection
            title="Contact Information"
            subtitle="We’ll keep you updated on your reservation!"
          />
        </section>
        <section className="selected-res-section">
          <SelectedReservations reservationData={props.reservationData} />
        </section>
        <section className="contact-form-section">
          <CustomerContactForm />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default CustomerContactPage;
