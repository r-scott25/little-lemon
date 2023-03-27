import React from 'react';
import "./HomeStyles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomepageHero from "../components/HomepageHero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HomepageHero />
        <Specials />
        <Testimonials />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
