import React from "react";
import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Profile.css";
import {
  CurrentUserContext,
  currentUserDefault,
} from "../../contexts/currentUserContext.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip.js";
import Header from "../Header/Header.js";
import * as MainApi from "../../utils/MainApi.js";

function Profile({
  handleSignOut,
  user,
  onUpdateUser,
  message,
  showError,
  onPopupWithMenu,
  loggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState(user.data.name);
  const [email, setEmail] = useState(user.data.email);
  const [newUserData, setNewUserData] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const editButtonClassName = `${
    isClicked
      ? "profile__edit-button profile__edit-button_invisible"
      : "profile__edit-button profile__edit-button_visible"
  }`;

  const signOutButtonClassName = `${
    isClicked
      ? "profile__signout-button profile__signout-button_invisible"
      : "profile__signout-button profile__signout-button_visible"
  }`;

  const submitButtonClassName = `${
    !isClicked
      ? "profile__submit profile__submit_invisible"
      : "profile__submit profile__submit_visible" && newUserData && isValid
      ? "profile__submit_active"
      : "profile__submit"
  }`;

  function checkValues() {
    if (currentUser.data.name === name && currentUser.data.email === email) {
      return setNewUserData(false);
    } else {
      return setNewUserData(true);
    }
  }

  useEffect(() => {
    checkValues();
  }, [handleInputNameChange]);

  function handleEditButton() {
    setIsClicked(true);
  }

  function handleInputNameChange(e) {
    setName(e.target.value);
  }

  function handleInputEmailChange(e) {
    setEmail(e.target.value);
  }
  const onSubmit = (e) => {
    if (!e.email || !e.name) {
      return;
    }
    onUpdateUser(e.email, e.name);
    reset();
  };

  return (
    <>
      <section className="profile">
        <h2 className="profile__title">Привет, {user.data.name}!</h2>
        <form
          className="profile__form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <fieldset className="profile__input-container">
            <label className="profile__label" htmlFor="name">
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
                disabled={!isClicked}
                {...register("name", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 2,
                    message: "Минимальное количество символов: 2",
                  },
                  maxLength: {
                    value: 30,
                    message: "Максимальное количество символов: 30",
                  },
                  onChange: (e) => {
                    handleInputNameChange(e);
                  },
                })}
              ></input>
            </label>
            <span
              className={
                errors?.name
                  ? "profile__error profile__error_visible"
                  : "profile__error profile__error_hidden"
              }
            >
              {errors?.name?.message}
            </span>
            <label className="profile__label" htmlFor="email">
              E-mail
              <input
                className="profile__input"
                id="email"
                type="email"
                name="email"
                required
                placeholder="Почта"
                value={email}
                disabled={!isClicked}
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  pattern: {
                    value:
                      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    message: "Введён некорректный e-mail",
                  },
                  onChange: (e) => {
                    handleInputEmailChange(e);
                  },
                })}
              ></input>
            </label>
            <span
              className={
                errors?.email
                  ? "profile__error profile__error_visible"
                  : "profile__error profile__error_hidden"
              }
            >
              {errors?.email?.message}
            </span>
          </fieldset>
          <InfoTooltip message={message} showError={showError} />
          <button
            type="submit"
            className={submitButtonClassName}
            value="Сохранить"
            disabled={!newUserData ? true : false}
          >
            Сохранить
          </button>
        </form>
        <button
          type="button"
          className={editButtonClassName}
          value="Редактировать"
          onClick={handleEditButton}
        >
          Редактировать
        </button>
        <button
          type="button"
          className={signOutButtonClassName}
          value="Выйти из аккаунта"
          onClick={handleSignOut}
        >
          Выйти из аккаута
        </button>
      </section>
    </>
  );
}

export default Profile;
