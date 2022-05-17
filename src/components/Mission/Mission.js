import React from "react";
import missionHero from "../../assets/mission-hero.svg";
import "./Mission.css";

export default function Mission() {
  return (
    <section className="mission container" id="mission">
      <h2 className="mission__title">Mission</h2>
      <div className="mission__content">
        <div className="mission__hero-container">
          <img className="mission__hero" src={missionHero} alt="" />
        </div>
        <p className="mission__copy">
          To give the average person the opportunity to achieve and create
          something they can be proud of, in an ever growing community.
        </p>
      </div>
    </section>
  );
}
