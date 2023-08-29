import React from "react";
import { Link } from "react-router-dom";
import logoPath from "../../images/logo.svg"
import "./Form.css";

function Form(props) {

  return (
    <section className="auth">
      <Link to="/">
        <img className="auth__logo" src={logoPath} alt="Логотип проекта movies-explorer" />
      </Link>
      <h1 className="auth__title">{props.title}</h1>
      <form className="auth__form form" method="post" onSubmit={props.onSubmit}>
        {props.children}
        <button type="submit" disabled={!props.isValid} className={`auth__button ${props.submitButtonClassName} ${!props.isValid && `auth__button_disabled`}`}
          aria-label={`${props.buttonLabel}`}>{props.isLoading ? `Подождите...` : props.buttonName}
        </button>
      </form>
      <Link to={`${props.href}`} className={`auth__link ${props.linkClassName}`}>
        <span className="auth__question">
          {props.spanName}
        </span>
        {props.linkName}
      </Link>
    </section>
  )
}

export default Form
