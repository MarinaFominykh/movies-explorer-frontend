import React from "react";
import { useState, useEffect } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onCheckbox }) {
  const [isChecked, setChecked] = useState(false);
  function handleInputChange(e) {
    onCheckbox(!isChecked);
    setChecked(e.target.checked);
  }
  return (
    <div className="filter-checkbox">
      <p className="filter-checkbox__text">Короткометражки</p>
      <label className="filter-checkbox__container">
        <input
          type="checkbox"
          className="filtecheckbox__button"
          checked={isChecked}
          onChange={(e) => handleInputChange(e)}
        ></input>
      </label>
    </div>
  );
}

export default FilterCheckbox;
