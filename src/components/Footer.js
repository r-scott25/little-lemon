import React from "react";
import "./FooterStyles.css";
import logoGreenLemon from "../assets/logoGreenLemon.png";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <footer className="footer-container">
        <img className="footer-logo" src={logoGreenLemon} alt="logo" />
      <div>
        <nav className="footer-nav-container">
          <ul>
            <li>
              <a href="/" className="footer-nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="footer-nav-item">
                About
              </a>
            </li>
            <li>
              <a href="/menu" className="footer-nav-item">
                Menu
              </a>
            </li>
            <li>
              <a href="/reservations" className="footer-nav-item">
                Reservations
              </a>
            </li>
            <li>
              <a href="/order-online" className="footer-nav-item">
                Order Online
              </a>
            </li>
            <li>
              <a href="/login" className="footer-nav-item">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contact-info-container">
        <h4 id="contactTitle">Contact</h4>
        <p id="lemonAddress">
          123 Lemon St. <br /> Chicago, IL 60654
        </p>
        <p id="lemonPhone">(312) 555-5555</p>
        <p id="lemonEmail">lemon@email.com</p>
      </div>
      <div className="social-media-container">
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
      </div>
    </footer>
  );
}

export default Footer;
