import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
function MoviesCard(props) {
  let location = useLocation();
  const isLocation = location.pathname === "/movies";
  const buttonClassName = `${
    isLocation ? "movies-card__like-button" : "movies-card__delete-button"
  }`;
  return (
    <li className="movies-card">
      <figure className="movies-card__container">
        <div className="movies-card__image-container">
          <img src={props.image} className="movies-card__image"></img>
        </div>

        <figcaption className="movies-card__text-container">
          <p className="movies-card__text">{props.nameRu}</p>
          <button className={buttonClassName}></button>
        </figcaption>
      </figure>
      <p className="movies-card__time">{props.duration}</p>
    </li>
  );
}

export default MoviesCard;
