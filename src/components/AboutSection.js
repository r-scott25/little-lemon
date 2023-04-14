import "./AboutSectionStyles.css";
import MarioAndAdrianA from "../assets/MarioAndAdrianA.jpg";
import MarioAndAdrianB from "../assets/MarioAndAdrianB.jpg";

function AboutSection() {
  return (
    <section className="about-container">
      <div className="about-text-container">
        <div className="about-heading">
          <h1 className="about-section-title">Little Lemon</h1>
          <h2 className="about-section-subtitle">Chicago</h2>
        </div>
        <div className="about-paragraph">
          <p>
            Brothers Mario and Adrian opened Little Lemon to bring a taste of
            the Mediterranean to Chicago. Born and raised in Italy, the brothers
            draw on family recipes for inspiration. Adding to their traditional
            Italian dishes, the brothers have included Greek and Turkish
            cuisines on the menu.
          </p>
        </div>
      </div>
      <div className="about-images-container">
        <img
          id="mario-and-adrian-a"
          src={MarioAndAdrianA}
          alt="Little Lemon Owners, Mario and Adrian, working in the kitchen"
        />
        <img
          id="mario-and-adrian-b"
          src={MarioAndAdrianB}
          alt="Little Lemon Owners, Mario and Adrian, working in the kitchen"
        />
      </div>
    </section>
  );
}

export default AboutSection;
