import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';

function SearchForm(props) {

  const [value, setValue] = React.useState('');
  const error = 'Нужно ввести ключевое слово';
  const [isValid, setIsValid] = React.useState(true);

  React.useEffect(() => {
    if (props.hasUserSearched) {
      setValue(localStorage.getItem('name'))
    }
  }, [props.hasUserSearched])

  function handleChange(e) {
    setValue(e.target.value);
    setIsValid(e.target.closest('.search-form__form').checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    value === '' ? setIsValid(false) : props.onSubmit(value);
  };

  return (
    <section className="search-form" aria-label="Форма поиска фильмов">
      <form className="search-form__form" method="post" onSubmit={handleSubmit} noValidate>
        <div className="search-form__string">
          <input className="search-form__input" type="text" placeholder="Фильм" value={value || ''} onChange={handleChange} required />
          <button className="search-form__button" type="submit" aria-label="Кнопка поиска фильмов">Поиск</button>
        </div>
        <span className="search-form__error">{isValid ? '' : error}</span>
      </form>
      <FilterCheckbox onCheck={props.handleCheckbox} isCheckboxChecked={props.isCheckboxChecked} />
    </section>
  )
}

export default SearchForm
