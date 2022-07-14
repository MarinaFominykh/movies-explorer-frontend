import React from "react";
import "./MoviesCard.css";
function MoviesCard(props) {
  return (
    <li className="movies-card">
      <figure className="movies-card__container">
        <div className="movies-card__image-container">
          <img src={props.image} className="movies-card__image"></img>
        </div>

        <figcaption className="movies-card__text-container">
          <p className="movies-card__text">{props.nameRu}</p>
          <button className="movies-card__like-button"></button>
        </figcaption>
      </figure>
      <p className="movies-card__time">{props.duration}</p>
    </li>
  );
}

export default MoviesCard;
