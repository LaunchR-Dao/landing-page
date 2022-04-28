import React from "react";
import "./Navbar.css";
import logo from '../assets/2.png'

const Navbar = () => {
  return (
    <div className="div-container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">
        <img src={logo} alt="./assets/2.png" height="100px" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="nav-item1">
                Mission<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="nav-item2">
                RoadMap
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-primary btn-info my-2 my-sm-0" type="submit" id="nav-button">
              Connect
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
