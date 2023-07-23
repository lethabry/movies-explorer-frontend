import React from "react";
import './MoviesCard.css'

function MoviesCard(props) {
  const [isSaved, setIsSaved] = React.useState(false);

  return (
    <li className="movies__card">
      <div className="movies__info">
        <h2 className="movies__name" style={props.isSavedMovies ? { fontWeight: '700' } : { fontWeight: '500' }}>{props.name}</h2>
        <p className="movies__duration" style={props.isSavedMovies ? { fontWeight: '700' } : { fontWeight: '400' }}>{props.duration}</p>
      </div>
      <img className="movies__image" src={props.src} alt={`Фотография из фильма ${props.name}`}></img>
      {
        props.isSavedMovies ?
          <button className="movies__button movies__button_type_delete" type="button" aria-label="Кнопка удаления фильма из избранного"></button>
          :
          !isSaved ?
            <button className="movies__button movies__button_type_save" type="button" aria-label="Кнопка сохранения фильма в избранное">Сохранить</button>
            :
            <button className="movies__button movies__button_type_saved" type="button" aria-label="Кнопка-уведомление о том, что фильм сохранен в избранное"></button>
      }
    </li>
  )
}

export default MoviesCard
