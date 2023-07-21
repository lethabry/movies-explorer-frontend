import React from "react";
import { Link } from 'react-router-dom';
import accountPath from '../../images/account.svg';
import './Menu.css';

function Menu({ isMenuActive, onMenuClose }) {

  return (
    < div className={`menu ${isMenuActive && `menu_active`}`} >
      <div className="menu__main">
        <button onClick={() => onMenuClose()} className="menu__button menu__button_type_close" type="button" aria-label="Кнопка закрытия меню"></button>
        <ul className="navigation__links menu__links">
          <li><Link to="/" className="menu__link navigation__link navigation__link_type_movies" onClick={() => onMenuClose()}>Главная</Link></li>
          <li><Link to="/movies" className="menu__link navigation__link navigation__link_type_movies" onClick={() => onMenuClose()}>Фильмы</Link></li>
          <li><Link to="/saved-movies" className="menu__link navigation__link navigation__link_type_saved-movies" onClick={() => onMenuClose()}>Сохранённые фильмы</Link></li>
        </ul>
        <Link to="/profile" className="menu__button menu__button_type_account navigation__button navigation__button_type_account" onClick={() => onMenuClose()}>
          <img src={accountPath} alt="Логотип редактирования аккаунта" className="navigation__logo" />
          Аккаунт
        </Link>
      </div>
    </div>
  )
}

export default Menu;
