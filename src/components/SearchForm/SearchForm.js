import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';

function SearchForm() {

  return (
    <section className="search-form" aria-label="Форма поиска фильма">
      <form className="search-form__form" method="post">
        <div className="search-form__string">
          <input className="search-form__input" type="text" placeholder="Фильм" />
          <button className="search-form__button" type="submit" aria-label="Кнопка поиска фильма">Поиск</button>
        </div>
        <span className="search-form__error"></span>
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm
