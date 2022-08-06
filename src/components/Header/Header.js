import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";
import HeaderLanding from "../HeaderLanding/HeaderLanding.js";
import HeaderDefault from "../HeaderDefault/HeaderDefault.js";

function Header({ onPopupWithMenu, loggedIn }) {
  let location = useLocation();
  const isLocation = location.pathname === "/";
  const headerClassName = `${
    isLocation ? "header header_theme_dark" : "header header_theme_light"
  }`;

  return (
    <header className={headerClassName}>
      <Link to="/">
        <div className="header__logo"></div>
      </Link>

      {loggedIn ? (
        <HeaderDefault onPopupWithMenu={onPopupWithMenu} />
      ) : (
        <HeaderLanding />
      )}
    </header>
  );
}

export default Header;
