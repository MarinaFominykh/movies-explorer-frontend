import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo"></div>
      <ul className="header__incom-container">
        <li className="header__register">
          <button className="header__incom-button">Регистрация</button>
        </li>
        <li className="header__login">
          <button className="header__incom-button">Войти</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
