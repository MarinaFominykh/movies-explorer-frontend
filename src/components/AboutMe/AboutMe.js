import React from "react";
import "./AboutMe.css";
import Photo from "../../images/photo.jpg";
import Portfolio from "../Portfolio/Portfolio.js";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-container">
          <p className="about-me__name">Марина</p>
          <p className="about-me__job">Фронтенд-разработчик, 40 лет</p>
          <p className="about-me__intro">
            Я родилась и живу в Кургане, закончила факультет экономики КГУ. В
            настоящее время изучаю профессию веб-разработчика.
          </p>
          <ul className="about-me__site-container">
            <li className="about-me__site">
              <a href="#" className="about-me__site-link">
                Facebook
              </a>
            </li>
            <li className="about-me__site">
              <a
                href="https://github.com/MarinaFominykh/MarinaFominykh"
                className="about-me__site-link"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <img src={Photo} className="about-me__photo" alt="Фото"></img>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
