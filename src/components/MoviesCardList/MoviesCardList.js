import React, { useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ moviesCards, toggleMovieLike, checkLiked, count }) {
  return (
    <ul className="movies-card-list">
      {moviesCards.slice(0, count).map((item) => (
        <MoviesCard
          {...item}
          key={item.id || item.movieId}
          onMovieLike={toggleMovieLike}
          movie={item}
          checkLiked={checkLiked}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
