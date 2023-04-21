import React from "react";
import "./FooterStyles.css";
import logoGreenLemon from "../assets/logoGreenLemon.png";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <footer className="footer-container" role="contentinfo">
      <div className="footer-logo-nav">
        <a href="/">
          <img className="footer-logo" src={logoGreenLemon} alt="logo" />
        </a>
      </div>
      <div>
        <nav className="footer-nav-container">
          <ul className="footer-nav-list">
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
      <div className="contact-and-social-container" aria-label="contact-and-social-container">
        <div className="contact-info-container" aria-label="contact-info-container">
          <h5 id="contactTitle">Little Lemon</h5>
          <p id="lemonAddress" aria-describedby="contactTitle">
            123 Lemon St. <br /> Chicago, IL 60654
          </p>
          <p id="lemonPhone" aria-describedby="contactTitle">(312) 555-5555</p>
          <p id="lemonEmail" aria-describedby="contactTitle">lemon@email.com</p>
        </div>
        <div className="social-media-container" aria-label="Social Media Links">
          <h5 id="letsConnectTitle">Let's Connect!</h5>
          <div className="social-media-links-container">
            <ul id="socialMediaList">
              <li id="instagramLink">
                <a href="https://www.instagram.com/">
                  <img src={instagram} alt="instagram logo" />
                </a>
              </li>
              <li id="facebookLink">
                <a href="https://www.facebook.com/">
                  <img src={facebook} alt="facebook logo" />
                </a>
              </li>
              <li id="twitterLink">
                <a href="https://twitter.com/">
                  <img src={twitter} alt="twitter logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div >
        <p className="copyright">© 2023 Rachel Scott</p>
      </div>
    </footer>
  );
}

export default Footer;
