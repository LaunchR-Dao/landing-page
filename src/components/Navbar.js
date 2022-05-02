import React from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/youfundr6.png";
import navlogo from "../assets/2.png";

const Navbar = () => {

  const[walletAddy, setWalletAddy] = useState('')

  async function requestAccounts(e) {
    e.preventDefault();
    console.log("request...");

    if (window.ethereum) {
      console.log("detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddy(accounts[0].substring(0, 6));
      } catch (error) {
        console.log("error connecting");
      }
    } else {
      console.log("metamask isnt here");
    }
  }

  return (
    <div className="div-container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">
          <img src={navlogo} alt="./assets/2.png" height="100px" />
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
            <button
              onClick={requestAccounts}
              class="btn btn-outline-primary btn-info my-2 my-sm-0"
              type="submit"
              id="nav-button"
            >
              connect: {walletAddy}
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
