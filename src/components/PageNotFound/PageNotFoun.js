import React from "react";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <button type="button" className="not-found__back-button">
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
