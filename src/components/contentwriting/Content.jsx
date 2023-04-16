import React from "react";
import "./Content.css";
import Quddos from "../../assets/quddos.pdf";
// import Donuts from "../../assets/donut.jpg";
import Apple from "../../assets/apple.jpeg";
import Tesla from "../../assets/tesla.jpeg";
import Nike from "../../assets/image.jpeg";
import Alpha from "../../assets/lusaka.jpeg";
import Furniture from "../../assets/anthewood1.jpeg";

const Content = () => {
  return (
    <section data-aos="fade-down" id="portfolio">
      <h5>Portfolio</h5>
      <h2>Content Writing</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Apple} alt="" />
          </div>
          <h3>Apple</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://copyfol.io/v/kzzggjmn"
              className="btn"
              target="_blank"
            >
              Content
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Tesla} alt="" />
          </div>
          <h3>Tesla</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://copyfol.io/v/nrw7tmrq"
              className="btn"
              target="_blank"
            >
              Content
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Nike} alt="" />
          </div>
          <h3>Nike</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://frog-walrus-y44b.squarespace.com"
              className="btn"
              target="_blank"
            >
              Content
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Alpha} alt="" />
          </div>
          <h3>Lusaka</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://goldfish-round-weax.squarespace.com"
              className="btn"
              target="_blank"
            >
              Content
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            {/* <img src={Donuts} alt="" /> */}
          </div>
          <h3>C L O S A</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://copyfol.io/v/68ptnpm7"
              className="btn"
              target="_blank"
            >
              Content
            </a>
            <div className="portfolio__item-image"></div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Furniture} alt="" />
          </div>
          <h3>Meubles</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://megalodon-pear-pnct.squarespace.com"
              className="btn"
              target="_blank"
            >
              Content
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Content;
