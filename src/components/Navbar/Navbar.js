import React from "react";
import { useState } from "react";
import "./Navbar.css";
import navlogo from "../../assets/2.png";

const Navbar = () => {
  const [walletAddy, setWalletAddy] = useState("");

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
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
          <img src={navlogo} alt="./assets/2.png" height="100px" />
        </a>
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" id="nav-item1">
                Mission<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="nav-item2">
                RoadMap
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              onClick={requestAccounts}
              className="btn btn-outline-primary btn-info my-2 my-sm-0"
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
