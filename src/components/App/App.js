import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo.js";
import NavTab from "../NavTab/NavTab.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe.js";
import Footer from "../Footer/Footer.js";

import Movies from "../Movies/Movies.js";
import { initialMoviesCards } from "../../utils/moviesCards.js";
import { savedMovies } from "../../utils/savedMovies.js";

function App() {
  const [cards, setCards] = useState(initialMoviesCards);
  const [savedMoviesCards, setSavedMovies] = useState(savedMovies);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
        </Route>
        <Route path="/movies">
          <Movies moviesCards={cards} />
        </Route>
        <Route path="/saved-movies">
          <Movies moviesCards={savedMoviesCards} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
