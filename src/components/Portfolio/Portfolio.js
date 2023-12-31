import React from "react";
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/lethabry/first-project" className="portfolio__link" target={"_blank"} rel='noreferrer'>
            Статичный сайт
            <span className="portfolio__arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/lethabry/russian-travel" className="portfolio__link" target={"_blank"} rel='noreferrer'>
            Адаптивный сайт
            <span className="portfolio__arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/lethabry/react-mesto-api-full-gha" className="portfolio__link" target={"_blank"} rel='noreferrer'>
            Одностраничное приложение
            <span className="portfolio__arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
