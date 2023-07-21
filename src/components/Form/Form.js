import React from "react";
import { Link } from "react-router-dom";
import logoPath from "../../images/logo.svg"
import "./Form.css";

function Form(props) {
  return (
    <section className="auth">
      <img className="auth__logo" src={logoPath} alt="Логотип проекта movies-explorer" />
      <h2 className="auth__title">{props.title}</h2>
      <form className="auth__form" method="post">
        {props.children}
        <button type="submit" className={`auth__button ${props.submitButtonClassName}`} aria-label={`${props.buttonLabel}`}>{props.buttonName}</button>
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
