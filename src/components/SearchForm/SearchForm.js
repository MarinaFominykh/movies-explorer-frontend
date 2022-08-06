import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip.js";

function SearchForm({ onSubmitSearch, message, setIsChecked, setPreloader }) {
  const [searchValueInput, setsearchValueInput] = useState("");
  const [isShortMovies, setIsShortMovies] = useState(false);

  function handleInputChange(e) {
    setsearchValueInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPreloader(true);
    onSubmitSearch(searchValueInput);
  }
  function onCheckbox(checked) {
    setIsShortMovies(checked);
    setIsChecked(!isShortMovies);
  }
  return (
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          placeholder="Фильм"
          required
          value={searchValueInput}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="search-form__submit">
          Поиск
        </button>
      </form>
      <FilterCheckbox onCheckbox={onCheckbox} />
      <InfoTooltip message={message} />
    </div>
  );
}

export default SearchForm;
