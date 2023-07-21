import React from "react";
import Form from "../Form/Form";
import './Register.css'

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
      <label className="register__label" htmlFor="name">Имя
        <input className="register__input" name="text" id="name" type={'text'} minLength={2} maxLength={30} required />
        <span className="register__error"></span>
      </label>
      <label className="register__label" htmlFor="email">E-mail
        <input className="register__input" name="email" id="email" type={'email'} required />
        <span className="register__error"></span>
      </label>
      <label className="register__label" htmlFor="password">Пароль
        <input className="register__input" name="password" id="password" type={'password'} required />
        <span className="register__error">Что-то пошло не так...</span>
      </label>
    </Form>
  )
}

export default Register
