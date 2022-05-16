import React from "react";
import aboutHero from "../../assets/about-hero.svg";
import "./About.css";

export default function About() {
  return (
    <section className="about container" id="#about">
      <h2 className="about__title">About</h2>
      <div className="about__content">
        <p className="about__copy">
          We are a decentralized crowdfunding platform. We build equitable
          communities to level the playing field for like-minded individuals.
          Believers who seek to educate, elevate, and grow.
        </p>
        <div className="about__hero-container">
          <img className="about__hero" src={aboutHero} alt="" />
        </div>
      </div>
    </section>
  );
}
