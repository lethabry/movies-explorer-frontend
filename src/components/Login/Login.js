import React from "react";
import Form from "../Form/Form";
import './Login.css'

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
      <label className="login__label" htmlFor="email">E-mail
        <input className="login__input" name="email" id="email" type={'email'} required />
        <span className="login__error"></span>
      </label>
      <label className="login__label" htmlFor="password">Пароль
        <input className="login__input" name="password" id="password" type={'password'} required/>
        <span className="login__error"></span>
      </label>
    </Form>
  )
}

export default Login
