import React from "react";
import { useEffect, useState } from "react";
import "./Main.css";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import Footer from "../Footer/Footer.js";
import { initialMoviesCards } from "../../utils/moviesCards.js";

function Main({ onPopupWithMenu }) {
  const [cards, setCards] = useState(initialMoviesCards);

  return (
    <>
      <Header onPopupWithMenu={onPopupWithMenu} />
      <Movies moviesCards={cards} />
      <Footer />
    </>
  );
}

export default Main;
