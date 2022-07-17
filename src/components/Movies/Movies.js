import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies({ moviesCards }) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList moviesCards={moviesCards} />
      <button className="movies__more-button">Ещё</button>
    </section>
  );
}

export default Movies;
