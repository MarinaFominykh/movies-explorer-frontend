import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({
  movie,
  onMovieLike,
  image,
  nameRU,
  duration,
  trailerLink,
  checkLiked,
}) {
  let location = useLocation();
  const isLocation = location.pathname === "/movies";
  const isLiked = checkLiked(movie);
  const likeButtonColor = `${
    !isLiked ? "movies-card__like-button" : "movies-card__like-button_active"
  }`;
  const buttonClassName = `${
    isLocation ? likeButtonColor : "movies-card__delete-button"
  }`;

  function countTime(n) {
    return `${parseInt(n / 60)} ч ${n % 60} м`;
  }

  function handleLikeClick() {
    onMovieLike(movie, isLiked);
    console.log(isLiked);
  }
  return (
    <li className="movies-card">
      <figure className="movies-card__container">
        <div className="movies-card__image-container">
          <a href={trailerLink} target="_blank" rel="noreferrer">
            <img
              src={
                isLocation
                  ? `https://api.nomoreparties.co/${image.url}`
                  : `${image}`
              }
              className="movies-card__image"
              alt={nameRU}
            ></img>{" "}
          </a>
        </div>
        <figcaption className="movies-card__figcaption-container">
          <div className="movies-card__text-container">
            <p className="movies-card__text"> {nameRU} </p>{" "}
            <p className="movies-card__time"> {countTime(duration)} </p>{" "}
          </div>{" "}
          <button
            className={buttonClassName}
            onClick={handleLikeClick}
          ></button>{" "}
        </figcaption>{" "}
      </figure>{" "}
    </li>
  );
}

export default MoviesCard;
