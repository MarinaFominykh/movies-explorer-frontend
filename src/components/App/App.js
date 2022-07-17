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
import PopupWithMenu from "../PopupWithMenu/PopupWithMenu.js";
import Profile from "../Profile/Profile.js";
import PageNotFound from "../PageNotFound/PageNotFoun.js";
import Register from "../Register/Register.js";

import Movies from "../Movies/Movies.js";
import { initialMoviesCards } from "../../utils/moviesCards.js";
import { savedMovies } from "../../utils/savedMovies.js";

function App() {
  const [cards, setCards] = useState(initialMoviesCards);
  const [savedMoviesCards, setSavedMovies] = useState(savedMovies);
  const [isPopupWithMenuOpen, setIsPopupWithMenuOpen] = useState(false);

  const handlerPopupWithMenuClick = () => {
    setIsPopupWithMenuOpen(true);
  };

  const closeAllPopups = () => {
    setIsPopupWithMenuOpen(false);
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header onPopupWithMenu={handlerPopupWithMenuClick} />
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header onPopupWithMenu={handlerPopupWithMenuClick} />
          <Movies moviesCards={cards} />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header onPopupWithMenu={handlerPopupWithMenuClick} />
          <Movies moviesCards={savedMoviesCards} />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header onPopupWithMenu={handlerPopupWithMenuClick} />
          <Profile />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <PopupWithMenu
        isOpen={isPopupWithMenuOpen}
        onClose={closeAllPopups}
        closePopup={closeAllPopups}
      />
    </div>
  );
}

export default App;
