import React from "react";
import Form from "../Form/Form";

function Login() {

  const formProps = {
    submitButtonClassName: 'auth__button_type_login',
    linkClassName: 'auth__link_type_login',
    isLoggedIn: false,
    title: 'Рады видеть!',
    buttonName: 'Войти',
    buttonLabel: 'Кнопка входа в аккаунт',
    href: '/signup',
    spanName: 'Ещё не зарегистрированы?',
    linkName: 'Регистрация'
  }
  return (
    <Form {...formProps}>
      <label className="auth__label" htmlFor="email">E-mail
        <input className="auth__input" name="email" id="email" type={"email"} placeholder="E-mail" required />
        <span className="auth__error"></span>
      </label>
      <label className="auth__label" htmlFor="password">Пароль
        <input className="auth__input" name="password" id="password" type={"password"} placeholder="Пароль" minLength={2} maxLength={30} required />
        <span className="auth__error"></span>
      </label>
    </Form>
  )
}

export default Login
