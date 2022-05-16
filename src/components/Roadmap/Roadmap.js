import React from "react";
import roadmapContent from "../../roadmap.json";
import "./Roadmap.css";

export default function Roadmap() {
  return (
    <section className="roadmap container" id="#roadmap">
      <h2 className="roadmap__title">Roadmap</h2>
      <div className="roadmap__items">
        {roadmapContent.map((ri, i) => (
          <article className="roadmap__item" key={`${ri.title}-${i}`}>
            <div className="roadmap__item-hero-container">
              <img
                className="roadmap__item-hero"
                src={require(`../../assets/${ri.hero}`)}
                alt=""
              />
            </div>
            <div className="roadmap__item-content">
              <h3 className="roadmap__item-title">{ri.title}</h3>
              {ri.copy.map((ci, i) => (
                <p className="roadmap__item-copy" key={i}>
                  {ci}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
