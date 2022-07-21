import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <p className="filter-checkbox__text">Короткометражки</p>
      <label className="filter-checkbox__container">
        <input type="checkbox" className="filtecheckbox__button"></input>
      </label>
    </div>
  );
}

export default FilterCheckbox;
