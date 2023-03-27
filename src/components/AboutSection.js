import "./AboutSectionStyles.css";
import MarioAndAdrianA from "../assets/MarioAndAdrianA.jpg"
import MarioAndAdrianB from "../assets/MarioAndAdrianB.jpg"

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="aboutHeading">
      <h1 id="aboutTitle">Little Lemon</h1>
      <h2 id="aboutSubtitle">Chicago</h2>
      </div>
      <div className="aboutText">
        <p>Brothers Mario and Adrian opened Little Lemon to bring a taste of the Mediterranean to Chicago. Born and raised in Italy, the brothers draw on family recipes for inspiration. Adding to their traditional Italian dishes, the brothers have included Greek and Turkish cuisines on the menu.</p>
      </div>
      <div className="aboutImages">
        <img id="MarioAndAdrianA" src={MarioAndAdrianA} alt="Little Lemon Owners, Mario and Adrian, working in the kitchen" />
        <img id="MarioAndAdrianB" src={MarioAndAdrianB} alt="Little Lemon Owners, Mario and Adrian, working in the kitchen" />
      </div>
    </section>
  );
}

export default AboutSection;