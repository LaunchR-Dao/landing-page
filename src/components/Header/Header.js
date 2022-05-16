import React from "react";
import Navbar from "../Navbar";
import logo from "../../assets/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img src={logo} alt="" height="50px" />
      </a>
      <h2 className="header__title">YouFundR</h2>
      <Navbar />
    </header>
  );
}
