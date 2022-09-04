import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip.js";

function SearchForm({
  onSubmitSearch,
  message,
  setIsChecked,
  setPreloader,
  searchValueInput,
  onChange,
}) {
  const [isShortMovies, setIsShortMovies] = useState(false);

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
      <form className="search-form__form" onSubmit={handleSubmit} noValidate>
        <input
          className="search-form__input"
          placeholder="Фильм"
          required
          value={searchValueInput}
          onChange={onChange}
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
