import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom"
import "./Profile.css";

function Profile(props) {
  return (
    <>
      <Header {...props} />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form" method="post">
            <label className="profile__label" htmlFor="name">Имя
              <input className="profile__input" name="text" id="name" type={'text'} minLength={2} maxLength={30} placeholder="Виталий" />
            </label>
            <span className="profile__error"></span>
            <label className="profile__label" htmlFor="email">E-mail
              <input className="profile__input" name="email" id="email" type={'email'} placeholder="pochta@yandex.ru" />
            </label>
            <span className="profile__error"></span>
            <button className="profile__button" aria-label="Кнопка редактирования профиля" type="submit" >Редактировать</button>
          </form>
          <Link to="/" className="profile__link">Выйти из аккаунта</Link>
        </section>
      </main>
    </>
  )
}

export default Profile
