import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleInputNameChange(e) {
    setName(e.target.value);
  }
  function handleInputEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleInputPassChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="register">
      <div className="register__logo"></div>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <fieldset className="register__inputs">
          <label className="register__label" for="name">
            Имя
            <input
              id="name"
              type="text"
              className="register__input"
              placeholder="Имя"
              value={name}
              onChange={handleInputNameChange}
              required
            ></input>
          </label>

          <label className="register__label" for="email">
            E-mail
            <input
              id="email"
              type="email"
              className="register__input"
              placeholder="Email"
              value={email}
              onChange={handleInputEmailChange}
              required
            ></input>
          </label>

          <label className="register__label" for="password">
            Пароль
            <input
              id="password"
              type="password"
              className="register__input"
              placeholder="Пароль"
              value={password}
              onChange={handleInputPassChange}
              required
            ></input>
          </label>
        </fieldset>
        <button
          type="submit"
          className="register__submit"
          value="Зарегистрироваться"
        >
          Зарегистрироваться
        </button>
      </form>

      <Link to="sign-in" className="register__entry-link">
        <p className="register__entry">
          {" "}
          Уже зарегистрированы?
          <span className="register__entry-span">Войти</span>
        </p>
      </Link>
    </section>
  );
}
export default Register;
