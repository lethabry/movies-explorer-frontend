import React from "react";
import './Footer.css';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__info">
        <p className="footer__year">&#169;{year}</p>
        <ul className="footer__links">
          <li><a href="https://practicum.yandex.ru/" className="footer__link" target={"_blank"} rel='noreferrer'>Яндекс.Практикум</a></li>
          <li><a href="https://github.com" className="footer__link" target={"_blank"} rel='noreferrer'>Github</a></li>
        </ul>
      </div>
    </footer >
  )
}

export default Footer
