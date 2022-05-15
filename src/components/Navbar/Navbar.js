import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navigation">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto navigation__list">
          <li className="nav-item navigation__list-item">
            <a
              className="nav-link navigation__list-item-anchor"
              href="#mission"
            >
              Mission
            </a>
          </li>
          <li className="nav-item navigation__list-item">
            <a
              className="nav-link navigation__list-item-anchor"
              href="#about-us"
            >
              About Us
            </a>
          </li>
          <li className="nav-item navigation__list-item">
            <a
              className="nav-link navigation__list-item-anchor"
              href="#roadmap"
            >
              RoadMap
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
