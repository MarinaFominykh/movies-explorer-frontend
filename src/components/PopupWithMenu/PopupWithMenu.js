import React from "react";
import { NavLink } from "react-router-dom";
import "./PopupWithMenu.css";

function PopupWithMenu({ isOpen, onClose, closePopup }) {
  return (
    <aside className={`popup  ${isOpen && "popup_opened"}`}>
      <button className="popup__close-button" onClick={onClose}></button>
      <nav className="menu">
        <ul className="menu__container">
          <NavLink
            exact
            to="/"
            activeClassName="menu__link_active"
            className="menu__link"
          >
            <li className="menu__item" onClick={closePopup}>
              Главная
            </li>
          </NavLink>
          <NavLink
            to="/movies"
            activeClassName="menu__link_active"
            className="menu__link"
          >
            <li className="menu__item" onClick={closePopup}>
              Фильмы
            </li>
          </NavLink>
          <NavLink
            to="/saved-movies"
            activeClassName="menu__link_active"
            className="menu__link"
          >
            <li className="menu__item" onClick={closePopup}>
              Сохраненные фильмы
            </li>
          </NavLink>
        </ul>
      </nav>
      <NavLink
        to="/profile"
        activeClassName="menu__link_active"
        className="menu__link"
      >
        <p className="menu__account" onClick={closePopup}>
          Аккаунт
        </p>
      </NavLink>
    </aside>
  );
}

export default PopupWithMenu;
