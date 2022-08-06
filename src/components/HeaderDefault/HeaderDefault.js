import React from "react";
import "./HeaderDefault.css";
import { NavLink, useLocation } from "react-router-dom";

function HeaderDefault({ onPopupWithMenu }) {
  let location = useLocation();
  const isLocation = location.pathname === "/";
  const linkClassName = `${
    isLocation
      ? "header__link header__link_theme_dark"
      : "header__link header__link_theme_light"
  }`;
  return (
    <>
      <nav className="header__nav-container">
        <ul className="header__nav-list">
          <NavLink
            exact
            to="/movies"
            activeClassName="header__link-active"
            className={linkClassName}
          >
            <li className="header__nav-item">Фильмы</li>
          </NavLink>
          <NavLink
            exact
            to="/saved-movies"
            activeClassName="header__link-active"
            className={linkClassName}
          >
            <li className="header__nav-item">Сохранённые фильмы</li>
          </NavLink>
          <NavLink
            exact
            to="/profile"
            activeClassName="header__link-active"
            className={linkClassName}
          >
            <li className="header__nav-item">
              {isLocation ? (
                <div className="header__account"></div>
              ) : (
                <>
                  <p className="header__account-text">Аккаунт</p>
                  <div className="header__account-icon"></div>
                </>
              )}
            </li>
          </NavLink>
        </ul>
      </nav>
      <button className="header__menu" onClick={onPopupWithMenu}></button>
    </>
  );
}

export default HeaderDefault;
