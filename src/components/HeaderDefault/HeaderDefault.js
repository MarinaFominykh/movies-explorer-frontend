import React from "react";
import "./HeaderDefault.css";
import { NavLink } from "react-router-dom";

function HeaderDefault({ onPopupWithMenu }) {
  return (
    <>
      <nav className="header__nav-container">
        <ul className="header__nav-list">
          <NavLink
            exact
            to="/movies"
            activeClassName="header__link-active"
            className="header__link"
          >
            <li className="header__nav-item">Фильмы</li>
          </NavLink>
          <NavLink
            exact
            to="/saved-movies"
            activeClassName="header__link-active"
            className="header__link"
          >
            <li className="header__nav-item">Сохранённые фильмы</li>
          </NavLink>
          <NavLink
            exact
            to="/profile"
            activeClassName="header__link-active"
            className="header__link"
          >
            <li className="header__nav-item">
              <p className="header__account-text">Аккаунт</p>
              <div className="header__account-icon"></div>
            </li>
          </NavLink>
        </ul>
      </nav>
      <button className="header__menu" onClick={onPopupWithMenu}></button>
    </>
  );
}

export default HeaderDefault;
