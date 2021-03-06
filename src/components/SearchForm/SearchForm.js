import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
  return (
    <div className="search-form">
      <form className="search-form__form">
        <input className="search-form__input" placeholder="Фильм" required></input>
        <button type="submit" className="search-form__submit">
          Поиск
        </button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
