import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
            <a href="https://marinafominykh.github.io/how-to-learn/index.html" className="portfolio__link" target="_blank" rel="noreferrer">Статичный сайт</a>
            <div className="portfolio__arrow"></div>
        </li>
        <li className="portfolio__item">
            <a href="https://marinafominykh.github.io/russian-travel/index.html" className="portfolio__link" target="_blank" rel="noreferrer">Адаптивный сайт</a>
            <div className="portfolio__arrow"></div>
        </li>
        <li className="portfolio__item">
            <a href="https://marinafominykh.github.io/mesto/" className="portfolio__link" target="_blank" rel="noreferrer">Одностраничное приложение</a>
            <div className="portfolio__arrow"></div>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
