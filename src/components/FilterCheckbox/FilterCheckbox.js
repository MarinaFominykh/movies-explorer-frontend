import React from "react";
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import "./FilterCheckbox.css";

// function FilterCheckbox({ shortMovies, handleShortFilms }) {
//   return (
//     <div className="filter-checkbox">
//       <p className="filter-checkbox__text">Короткометражки</p>
//       <label className="filter-checkbox__container">
//         <input
//           type="checkbox"
//           className="filtecheckbox__button"
//           checked={shortMovies ? true : false}
//           onChange={handleShortFilms}
//         ></input>
//       </label>
//     </div>
//   );
// }

// export default FilterCheckbox;

function FilterCheckbox({ onCheckbox }) {
  const [isChecked, setChecked] = useState(false);
  let location = useLocation();
  const isLocation = location.pathname === "/movies";
  function handleInputChange(e) {
    onCheckbox(!isChecked);
    setChecked(e.target.checked);
    isLocation
      ? localStorage.setItem("stateCheckBox", !isChecked)
      : localStorage.setItem("stateCheckBoxSavedMovies", !isChecked);
  }

  useEffect(() => {
    const checkBoxState = localStorage.getItem("stateCheckBox");
    const stateCheckBoxSavedMovies = localStorage.getItem(
      "stateCheckBoxSavedMovies"
    );
    if (isLocation && checkBoxState) {
      setChecked(JSON.parse(checkBoxState));
    }
    if (!isLocation && stateCheckBoxSavedMovies) {
      setChecked(JSON.parse(stateCheckBoxSavedMovies));
    }
  }, []);
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
