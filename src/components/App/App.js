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
import Login from "../Login/Login.js";
import Main from "../Main/Main.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";

function App() {
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
          <Main onPopupWithMenu={handlerPopupWithMenuClick} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies onPopupWithMenu={handlerPopupWithMenuClick} />
        </Route>
        <Route path="/profile">
          <Header onPopupWithMenu={handlerPopupWithMenuClick} />
          <Profile />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
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
