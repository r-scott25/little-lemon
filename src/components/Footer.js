import React from "react";
import "./FooterStyles.css";
import FooterNavigation from "./FooterNavigation.js";
import logoGreenLemon from "../assets/logoGreenLemon.png";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <img className="footer-logo" src={logoGreenLemon} alt="logo" />
      <FooterNavigation />
      <section id="contactInfo">
        <h5 id="contactTitle">Contact</h5>
        <p id="lemonAddress">
          123 Lemon St. <br /> Chicago, IL 60654
        </p>
        <p id="lemonPhone">(312) 555-5555</p>
        <p id="lemonEmail">lemon@email.com</p>
      </section>
      <section className="socialMedia">
        <h4 id="let'sConnectTitle">Let's Connect!</h4>
        <ul id="socialMediaList">
          <li id="instagramLink">
            <img src={instagram} alt="instagram logo" />
          </li>
          <li id="facebookLink">
            <img src={facebook} alt="facebook logo" />
          </li>
          <li id="twitterLink">
            <img src={twitter} alt="twitter logo" />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
