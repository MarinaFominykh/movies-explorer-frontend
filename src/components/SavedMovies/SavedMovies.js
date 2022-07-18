import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import Footer from "../Footer/Footer.js";
import { savedMovies } from "../../utils/savedMovies.js";

function SavedMovies({ onPopupWithMenu }) {
  const [savedMoviesCards, setSavedMovies] = useState(savedMovies);

  return (
    <>
      <Header onPopupWithMenu={onPopupWithMenu} />
      <Movies moviesCards={savedMoviesCards} />
      <Footer />
    </>
  );
}

export default SavedMovies;
