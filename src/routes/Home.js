import React from "react";
import "./HomeStyles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomepageHero from "../components/HomepageHero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <div className="home-body-container" role="main">
      <header role="banner">
        <Header />
      </header>
      <main className="home-main-container" id="main-content" aria-labelledby="main-title">
        <section className="hero-section" aria-label="hero section">
          <HomepageHero />
        </section>
        <section className="specials-section" aria-label="specials-section">
          <Specials />
        </section>
        <section className="testimonials-section" aria-label="testimonials-section">
          <Testimonials />
        </section>
        <section className="about-section" aria-label="about-section">
          <AboutSection />
        </section>
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
