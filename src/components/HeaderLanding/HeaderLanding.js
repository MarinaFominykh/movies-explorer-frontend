import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderLanding.css";

function HeaderLanding() {
  return (
    <ul className="header__incom-container">
      <NavLink
        to="sign-up"
        activeClassName="header__incom_active"
        className="header__incom"
      >
        <li className="header__register">Регистрация</li>
      </NavLink>
      <NavLink
        to="sign-in"
        activeClassName="header__incom_active"
        className="header__incom"
      >
        <li className="header__login">Войти</li>
      </NavLink>
    </ul>
  );
}

export default HeaderLanding;
