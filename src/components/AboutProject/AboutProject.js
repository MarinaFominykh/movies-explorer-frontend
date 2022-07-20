import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <dl className="about-project__container">
        <dt className="about-project__term about-project__term_type_stage">
          Дипломный проект включал 5 этапов
        </dt>
        <dd className="about-project__description about-project__description_type_stage">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </dd>
        <dt className="about-project__term about-project__term_type_time">
          На выполнение диплома ушло 5 недель
        </dt>
        <dd className="about-project__description about-project__description_type_time">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </dd>
      </dl>
      <div className="about-project__indicator-container">
        <div className="about-project__indicator about-project__indicator_back">
          1 неделя
        </div>
        <div className="about-project__indicator about-project__indicator_front">
          4 недели
        </div>
        <p className="about-project__indicator-text about-project__indicator-text_back">
          Back-end
        </p>
        <p className="about-project__indicator-text about-project__indicator-text_front">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
