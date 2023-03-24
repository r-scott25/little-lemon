import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroHome from "./components/HeroHome";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <Specials />
        <Testimonials />
        <AboutSection />
      </main>
      <Footer />
      </>
  );
}

export default App;
