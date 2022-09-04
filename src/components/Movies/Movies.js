import React from "react";
import { useLocation } from "react-router-dom";
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
  searchValueInput,
  setSearchValueInput,
  onChange,
  isShortMovies,
  setIsShortMovies,
}) {
  const [shortMovies, setShortMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const width = UserCurrentWidth();
  const [defaultAmountMovies, setDefaultAmountMovies] = useState(
    getInitialCount(width)
  );
  let location = useLocation();
  const isLocation = location.pathname === "/movies";

  function handleLoadMore() {
    setDefaultAmountMovies((prevCount) => prevCount + getLoadStep(width));
  }

  useEffect(() => {
    const checkBoxState = localStorage.getItem("stateCheckBox");
    const stateCheckBoxSavedMovies = localStorage.getItem(
      "stateCheckBoxSavedMovies"
    );
    if (isLocation && checkBoxState) {
      setIsChecked(JSON.parse(checkBoxState));
    }
    if (!isLocation && stateCheckBoxSavedMovies) {
      setIsChecked(JSON.parse(stateCheckBoxSavedMovies));
    }
  }, []);

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
        searchValueInput={searchValueInput}
        setSearchValueInput={setSearchValueInput}
        onChange={onChange}
        isShortMovies={isShortMovies}
        setIsShortMovies={setIsShortMovies}
      />
      {preloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          moviesCards={isChecked ? shortMovies : movies}
          toggleMovieLike={toggleMovieLike}
          checkLiked={checkLiked}
          savedmovie={savedmovie}
          count={defaultAmountMovies}
        />
      )}

      {defaultAmountMovies < allMovies.length && (
        <button className="movies__more-button" onClick={handleLoadMore}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default Movies;
