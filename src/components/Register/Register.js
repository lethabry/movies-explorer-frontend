import React from "react";
import Form from "../Form/Form";

function Register() {

  const formProps = {
    submitButtonClassName: 'auth__button_type_register',
    linkClassName: 'auth__link_type_register',
    isLoggedIn: false,
    title: 'Добро пожаловать!',
    buttonName: 'Зарегистрироваться',
    buttonLabel: 'Кнопка регистрации профиля',
    href: '/signin',
    spanName: 'Уже зарегистрированы?',
    linkName: 'Войти'
  }

  return (
    <Form {...formProps}>
      <label className="auth__label" htmlFor="name">Имя
        <input className="auth__input" name="text" id="name" type={'text'} minLength={2} maxLength={30} placeholder="Имя" required />
        <span className="auth__error"></span>
      </label>
      <label className="auth__label" htmlFor="email">E-mail
        <input className="auth__input" name="email" id="email" type={'email'} placeholder="E-mail" required />
        <span className="auth__error"></span>
      </label>
      <label className="auth__label" htmlFor="password">Пароль
        <input className="auth__input" name="password" id="password" type={'password'} placeholder="Пароль" minLength={2} maxLength={30} required />
        <span className="auth__error">Что-то пошло не так...</span>
      </label>
    </Form>
  )
}

export default Register
