import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ moviesCards }) {
  return (
    <ul className="movies-card-list">
      {moviesCards.map((item) => (
        <MoviesCard {...item} key={item._id} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
