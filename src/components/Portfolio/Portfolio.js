import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
            <a href="#" className="portfolio__link" target="_blank">Статичный сайт</a>
            <div className="portfolio__arrow"></div>
        </li>
        <li className="portfolio__item">
            <a href="#" className="portfolio__link" target="_blank">Адаптивный сайт</a>
            <div className="portfolio__arrow"></div>
        </li>
        <li className="portfolio__item">
            <a href="#" className="portfolio__link" target="_blank">Одностраничное приложение</a>
            <div className="portfolio__arrow"></div>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
