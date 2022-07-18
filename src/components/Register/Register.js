import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Register.css";

function Register(props) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const submitClassName = `${
    isValid ? "register__submit" : "register__submit_disable"
  }`;
  const onSubmit = (e) => {
    reset();
  };

  return (
    <section className="register">
      <div className="register__logo"></div>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form
        className="register__form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <fieldset className="register__inputs">
          <label className="register__label" for="name">
            Имя
            <input
              id="name"
              type="text"
              className="register__input"
              placeholder="Имя"
              {...register("name", {
                required: "Поле обязательно к заполнению",
              })}
            />
            <span
              className={
                errors?.name
                  ? "register__input-error_active"
                  : "register__input-error"
              }
            >
              {errors?.name?.message}
            </span>
          </label>

          <label className="register__label" for="email">
            E-mail
            <input
              id="email"
              type="email"
              className="register__input"
              placeholder="Email"
              {...register("email", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value:
                    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                  message: "Введён некорректный e-mail",
                },
              })}
            />
            <span
              className={
                errors?.email
                  ? "register__input-error_active"
                  : "register__input-error"
              }
            >
              {errors?.email?.message}
            </span>
          </label>

          <label className="register__label" for="password">
            Пароль
            <input
              id="register-password"
              type="password"
              className="register__input"
              placeholder="Пароль"
              {...register("password", {
                required: "Поле обязательно к заполнению",
              })}
            />
            <span
              className={
                errors?.password
                  ? "register__input-error_active"
                  : "register__input-error"
              }
            >
              {errors?.password?.message}
            </span>
          </label>
        </fieldset>
        <button
          type="submit"
          className={submitClassName}
          value="Зарегистрироваться"
          disabled={!isValid}
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
