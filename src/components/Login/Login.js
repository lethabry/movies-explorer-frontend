import React from "react";
import Form from "../Form/Form";
import useForm from "../../hooks/useForm";

function Login(props) {

  const { values: userState, handleChange: handleChange, errors: errorsState, isValid: isValid } = useForm({ email: '', password: '' });

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(userState);
  }

  const formProps = {
    submitButtonClassName: 'auth__button_type_login',
    linkClassName: 'auth__link_type_login',
    isLoggedIn: false,
    title: 'Рады видеть!',
    buttonName: 'Войти',
    buttonLabel: 'Кнопка входа в аккаунт',
    href: '/signup',
    spanName: 'Ещё не зарегистрированы?',
    linkName: 'Регистрация',
    isValid: isValid,
    onSubmit: handleSubmit,
    isLoading: props.isLoading,
  }

  return (
    <Form {...formProps}>
      <label className="auth__label" htmlFor="email">E-mail
        <input className="auth__input" name="email" id="email" type={"email"} value={userState.email || ''} onChange={handleChange} placeholder="E-mail" required />
        <span className="auth__error">{errorsState.email}</span>
      </label>
      <label className="auth__label" htmlFor="password">Пароль
        <input className="auth__input" name="password" id="password" type={"password"} value={userState.password || ''} onChange={handleChange} placeholder="Пароль" minLength={2} maxLength={30} required />
        <span className="auth__error">{errorsState.password}</span>
      </label>
    </Form>
  )
}

export default Login
