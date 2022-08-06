import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";

function SavedMovies({
  onPopupWithMenu,
  loggedIn,
  onSubmitSearch,
  message,
  setMessage,
  movies,
  allMovies,
  checkLiked,
  sortShortMovies,
  toggleMovieLike,
  preloader,
  setPreloader,
}) {
  return (
    <>
      <Header onPopupWithMenu={onPopupWithMenu} loggedIn={loggedIn} />
      <main className="main">
        <Movies
          onSubmitSearch={onSubmitSearch}
          message={message}
          setMessage={setMessage}
          movies={movies}
          checkLiked={checkLiked}
          sortShortMovies={sortShortMovies}
          allMovies={allMovies}
          toggleMovieLike={toggleMovieLike}
          setPreloader={setPreloader}
          preloader={preloader}
        />
      </main>
    </>
  );
}

export default SavedMovies;
