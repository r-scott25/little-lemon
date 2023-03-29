import React from "react";
import "./HomeStyles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomepageHero from "../components/HomepageHero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <Header />
//       <main className="home-main-container">
//         <HomepageHero />
//         <Specials />
//         <Testimonials />
//         <AboutSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

const Home = () => {
  return (
    <body className="home-body-container">
      <header>
        <Header />
      </header>
      <main className="home-main-container">
        <section className="hero-section">
          <HomepageHero />
        </section>
        <section className="specials-section">
          <Specials />
        </section>
        <section className="testimonials-section">
          <Testimonials />
        </section>
        <section className="about-section">
          <AboutSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};

export default Home;
