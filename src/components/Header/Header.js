import React from "react";
import logoPath from '../../images/logo.svg'
import Navigation from "../Navigation/Navigation";
import './Header.css'

function Header({ onMenuClick, isLoggedIn, width }) {

  const navigationProps = {
    onMenuClick: onMenuClick,
    isLoggedIn: isLoggedIn,
    width: width,
  }

  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Логотип проекта movies explorer" />
      <Navigation {...navigationProps} />
    </header>
  )
}

export default Header;
