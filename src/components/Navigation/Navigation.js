import React from "react";
import { Link } from 'react-router-dom'
import accountPath from '../../images/account.svg'
import './Navigation.css'

function Navigation({ onMenuClick, isLoggedIn, width }) {

  return (
    <nav className="navigation">
      {!isLoggedIn ?
        <ul className="navigation__links">
          <li><Link to="/signup" className="navigation__link navigation__link_type_registration">Регистрация</Link></li>
          <li><Link to="/signin" className="navigation__button navigation__button_type_signin">Войти</Link></li>
        </ul>

        : width >= 769 ?
          <ul className="navigation__links">
            <li><Link to="/movies" className="navigation__link navigation__link_type_movies">Фильмы</Link></li>
            <li><Link to="/saved-movies" className="navigation__link navigation__link_type_saved-movies">Сохранённые фильмы</Link></li>
            <li>
              <Link to="/profile" className="navigation__button navigation__button_type_account" >
                <img src={accountPath} alt="Логотип редактирования аккаунта" className="navigation__logo" />
                Аккаунт
              </Link>
            </li>
          </ul>
          :
          <button onClick={() => onMenuClick()} type="button" className="navigation__button navigation__button_type_menu" aria-label="Кнопка открытия меню"></button>

      }
    </nav>
  )
}

export default Navigation
