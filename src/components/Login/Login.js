import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <section className="login">
      <div className="login__logo"></div>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <fieldset className="login__inputs">
          <label className="login__label" for="email">
            E-mail
            <input
              id="email"
              type="email"
              className="login__input"
              placeholder="Email"
              value={email}
              onChange={handleInputEmailChange}
              required
            ></input>
          </label>

          <label className="login__label" for="password">
            Пароль
            <input
              id="password"
              type="password"
              className="login__input"
              placeholder="Пароль"
              value={password}
              onChange={handleInputPassChange}
              required
            ></input>
          </label>
        </fieldset>
        <button
          type="submit"
          className="login__submit"
          value="Зарегистрироваться"
        >
          Зарегистрироваться
        </button>
      </form>

      <Link to="sign-up" className="login__register-link">
        <p className="login__register">
          {" "}
          Ещё не зарегистрированы?
          <span className="login__register-span">Регистрация</span>
        </p>
      </Link>
    </section>
  );
}
export default Login;
