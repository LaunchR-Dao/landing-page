import React from "react";
import logo from "../../assets/logo.svg";
import "./Footer.css";

export default function Footer() {
  const copyrightYear = new Date().getFullYear();
  return (
    <footer className="d-flex justify-content-around fixed-bottom p-3 footer">
      <section className="footer__logo-container">
        <img src={logo} alt="YouFundR" className="footer__logo" />
      </section>
      <section className="footer__copyright-container">
        <div>&copy; {copyrightYear}</div>
      </section>
      <section className="footer__twitter-container">
        <a href="https://twitter.com/YouFundR">
          <i className="bi bi-twitter"></i>
        </a>
      </section>
    </footer>
  );
}
