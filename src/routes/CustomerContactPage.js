import React, { useState } from "react";
import "./CustomerContactPageStyles.css";
import SelectedReservations from "../components/SelectedReservations.js";
import CustomerContactForm from "../components/CustomerContactForm.js";
import { reservationData } from "./Reservations.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import HeroSection from "../components/HeroSection.js";
import dinnerTableFifty from "../assets/dinnerTable-50.jpg";

const CustomerContactPage = (props) => {
  return (
    <body className="contact-body-container">
      <header>
        <Header />
      </header>

      <main className="contact-main-container">
        <section className="dinner-img">
          <img
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
          <SelectedReservations reservationData={reservationData} />
        </section>
        <section className="contact-form-section">
          <CustomerContactForm />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};

export default CustomerContactPage;
