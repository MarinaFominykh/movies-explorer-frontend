import React from "react";
import "./HeaderLanding.css";

function HeaderLanding() {
  return (
    <ul className="header__incom-container">
      <li className="header__register">
        <button className="header__incom-button">Регистрация</button>
      </li>
      <li className="header__login">
        <button className="header__incom-button">Войти</button>
      </li>
    </ul>
  );
}

export default HeaderLanding;
