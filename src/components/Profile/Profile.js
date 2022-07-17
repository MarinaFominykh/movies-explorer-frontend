import React from "react";
import { useState, useContext } from "react";
import "./Profile.css";
import {
  CurrentUserContext,
  currentUserDefault,
} from "../../contexts/currentUserContext.js";

function Profile(props) {
  const [name, setName] = useState(currentUserDefault.name);
  const [email, setEmail] = useState(currentUserDefault.email);
  const currentUser = useContext(CurrentUserContext);

  function handleInputNameChange(e) {
    setName(e.target.value);
  }

  function handleInputEmailChange(e) {
    setEmail(e.target.value);
  }
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUserDefault.name}!</h2>
      <form className="profile__form">
        <fieldset className="profile__input-container">
          <label className="profile__label">
            Имя
            <input
              className="profile__input"
              id="name"
              name="name"
              required
              minLength="2"
              maxLength="30"
              placeholder="Имя"
              value={name}
              onChange={handleInputNameChange}
            ></input>
          </label>
          <label className="profile__label">
            E-mail
            <input
              className="profile__input"
              id="email"
              name="email"
              required
              placeholder="Почта"
              value={email}
              onChange={handleInputEmailChange}
            ></input>
          </label>
        </fieldset>

        <button type="submit" className="profile__submit" value="Редактировать">
          Редактировать
        </button>
      </form>
      <button
        type="button"
        className="profile__signout-button"
        value="Выйти из аккаунта"
      >
        Выйти из аккаута
      </button>
    </section>
  );
}

export default Profile;
