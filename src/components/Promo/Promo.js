import React from "react";
import "./Promo.css";

function Promo() {
  return (
    <div className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб&#8209;разработки.
        {/* <br className="promo__title-span" /> */}
      </h1>
      <p className="promo__text">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <a href="#about-project" className="promo__button">
        Узнать больше
      </a>
    </div>
  );
}

export default Promo;
