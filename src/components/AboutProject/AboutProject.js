import React from "react";
import './AboutProject.css'

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__duration">
        <div className="about-project__part about-project__part-backend">
          <p className="about-project__duration-backend">1 неделя</p>
          <span className="about-project__duration-name">Back-end</span>
        </div>
        <div className="about-project__part about-project__part-frontend">
          <p className="about-project__duration-frontend">4 недели</p>
          <span className="about-project__duration-name">Front-end</span>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
