import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="nav-tab">
      <a className="nav-tab__link" href="#">О проекте</a>
      <a className="nav-tab__link" href="#">Технологии</a>
      <a className="nav-tab__link" href="#">Студент</a>
    </nav>
  );
}

export default NavTab;
