import React from "react";
import Form from "../Form/Form";
import useForm from "../../hooks/useForm";

function Register(props) {

  const { values: userState, handleChange: handleChange, errors: errorsState, isValid: isValid } = useForm({ name: '', email: '', password: '' });

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegistration(userState);
  }

  const formProps = {
    submitButtonClassName: 'auth__button_type_register',
    linkClassName: 'auth__link_type_register',
    isLoggedIn: false,
    title: 'Добро пожаловать!',
    buttonName: 'Зарегистрироваться',
    buttonLabel: 'Кнопка регистрации профиля',
    href: '/signin',
    spanName: 'Уже зарегистрированы?',
    linkName: 'Войти',
    isValid: isValid,
    onSubmit: handleSubmit,
    isLoading: props.isLoading,
  }

  return (
    <Form {...formProps}>
      <label className="auth__label" htmlFor="name">Имя
        <input className="auth__input" name="name" id="name" type={'text'} value={userState.name || ''} onChange={handleChange} minLength={2} maxLength={30} placeholder="Имя" autoComplete="off" required />
        <span className="auth__error">{errorsState.name}</span>
      </label>
      <label className="auth__label" htmlFor="email">E-mail
        <input className="auth__input" name="email" id="email" type={'email'} value={userState.email || ''} onChange={handleChange} placeholder="E-mail" autoComplete="off" required />
        <span className="auth__error">{errorsState.email}</span>
      </label>
      <label className="auth__label" htmlFor="password">Пароль
        <input className="auth__input" name="password" id="password" type={'password'} value={userState.password || ''} onChange={handleChange} placeholder="Пароль" minLength={2} maxLength={30} required />
        <span className="auth__error">{errorsState.password}</span>
      </label>
    </Form>
  )
}

export default Register
