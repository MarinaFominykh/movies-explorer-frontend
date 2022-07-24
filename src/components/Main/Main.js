import React from "react";
import { useEffect, useState } from "react";
import "./Main.css";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import Footer from "../Footer/Footer.js";
import { initialMoviesCards } from "../../utils/moviesCards.js";
import {moviesApi} from "../../utils/MoviesApi.js"

function Main({ onPopupWithMenu }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    moviesApi
      .getInitialCards()
      .then((res) => {
        setCards(res);
        console.log(res)
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Header onPopupWithMenu={onPopupWithMenu} />
      <main className="main">
        <Movies moviesCards={cards} />
      </main>
      <Footer />
    </>
  );
}

export default Main;
