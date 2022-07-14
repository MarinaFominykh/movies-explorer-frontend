import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies({ moviesCards }) {
  return (
    <section className="movies">
      <div className="movies__header">
        <div className="movies__header-logo"></div>
        <ul className="movies__header-nav-container">
          <li className="movies__header-nav-item">
            <nav className="movies__header-nav">Фильмы</nav>
          </li>
          <li className="movies__header-nav-item">
            <nav className="movies__header-nav">Сохраненные фильмы</nav>
          </li>
          <li className="movies__header-nav-item">
            <nav className="movies__header-nav">Аккаунт</nav>
            <div className="movies__header-account"></div>
          </li>
        </ul>
        <div className="movies__menu"></div>
      </div>
      <SearchForm />
      <MoviesCardList moviesCards={moviesCards} />
      <button className="movies__more-button">Ещё</button>
    </section>
  );
}

export default Movies;
