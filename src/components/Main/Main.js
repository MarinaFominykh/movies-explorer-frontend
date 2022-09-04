import React from "react";
import "./Main.css";
import Movies from "../Movies/Movies.js";
import Header from "../Header/Header.js";

function Main({
  onPopupWithMenu,
  loggedIn,
  onSubmitSearch,
  message,
  setMessage,
  movies,
  allMovies,
  toggleMovieLike,
  checkLiked,
  savedmovie,
  sortShortMovies,
  setPreloader,
  preloader,
  searchValueInput,
  setSearchValueInput,
  onChange,
  isShortMovies,
  setIsShortMovies,
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
          toggleMovieLike={toggleMovieLike}
          checkLiked={checkLiked}
          savedmovie={savedmovie}
          sortShortMovies={sortShortMovies}
          allMovies={allMovies}
          setPreloader={setPreloader}
          preloader={preloader}
          searchValueInput={searchValueInput}
          setSearchValueInput={setSearchValueInput}
          onChange={onChange}
          isShortMovies={isShortMovies}
          setIsShortMovies={setIsShortMovies}
        />
      </main>
    </>
  );
}

export default Main;
