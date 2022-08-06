import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
import InfoTooltip from "../InfoTooltip/InfoTooltip.js";

function Login(props) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const submitClassName = `${
    isValid ? "login__submit" : "login__submit_disable"
  }`;
  const onSubmit = (e) => {
    if (!e.email || !e.password) {
      return;
    }
    props.handleLogin(e.email, e.password).catch(console.log);
    reset();
  };

  return (
    <section className="login">
      <div className="login__logo"></div>
      <h2 className="login__title">Рады видеть!</h2>
      <form
        className="login__form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <fieldset className="login__inputs">
          <label className="login__label" htmlFor="email">
            E-mail
            <input
              id="email"
              type="email"
              className="login__input"
              placeholder="Email"
              {...register("email", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value:
                    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                  message: "Введён некорректный e-mail",
                },
              })}
            ></input>
            <span
              className={
                errors?.email
                  ? "login__input-error_active login__input_error"
                  : "login__input-error"
              }
            >
              {errors?.email?.message}
            </span>
          </label>

          <label className="login__label" htmlFor="password">
            Пароль
            <input
              id="password"
              type="password"
              className="login__input"
              placeholder="Пароль"
              {...register("password", {
                required: "Поле обязательно к заполнению",
              })}
            ></input>
            <span
              className={
                errors?.password
                  ? "login__input-error_active login__input_error"
                  : "login__input-error"
              }
            >
              {errors?.password?.message}
            </span>
          </label>
        </fieldset>
        <div>
          <InfoTooltip message={props.message} />
          <button type="submit" className={submitClassName} value="Войти">
            Войти
          </button>
        </div>
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
