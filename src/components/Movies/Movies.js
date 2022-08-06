import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { useState, useEffect } from "react";
import { getLoadStep, getInitialCount } from "../../utils/getLoadStep.js";
import UserCurrentWidth from "../../hooks/useCurrentWidth.js";
import Preloader from "../Preloader/Preloader.js";

function Movies({
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
}) {
  const [shortMovies, setShortMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const width = UserCurrentWidth();
  const [defaultAmountMovies, setDefaultAmountMovies] = useState(
    getInitialCount(width)
  );
  function handleLoadMore() {
    setDefaultAmountMovies((prevCount) => prevCount + getLoadStep(width));
  }
  useEffect(() => {
    if (isChecked) {
      setShortMovies(sortShortMovies(movies));
    }
  }, [isChecked]);
  return (
    <section className="movies">
      <SearchForm
        onSubmitSearch={onSubmitSearch}
        message={message}
        setMessage={setMessage}
        setIsChecked={setIsChecked}
        setPreloader={setPreloader}
      />
      {preloader && <Preloader />}
      <MoviesCardList
        moviesCards={isChecked ? shortMovies : movies}
        toggleMovieLike={toggleMovieLike}
        checkLiked={checkLiked}
        savedmovie={savedmovie}
        count={defaultAmountMovies}
      />
      {defaultAmountMovies < allMovies.length && (
        <button className="movies__more-button" onClick={handleLoadMore}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default Movies;
