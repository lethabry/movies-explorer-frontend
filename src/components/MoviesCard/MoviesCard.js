import React from "react";
import './MoviesCard.css'

function MoviesCard(props) {

  const duration = Number(props.duration);
  const hours = Math.floor(duration / 60);
  const minutes = duration - (hours * 60);

  return (
    <li className="movies__card">
      <div className="movies__info">
        <h2 className="movies__name" style={props.isSavedMovies ? { fontWeight: '700' } : { fontWeight: '500' }}>{props.name}</h2>
        <p className="movies__duration" style={props.isSavedMovies ? { fontWeight: '700' } : { fontWeight: '400' }}>{hours !== 0 ? `${hours}ч ${minutes}м` : `${minutes}м`}</p>
      </div>
      <></>
      <a href={props.trailerLink} target={"_blank"} rel='noreferrer'>
        <img className="movies__image" src={props.src} alt={`Фотография из фильма ${props.name}`}></img>
      </a>
      {
        props.isSavedMovies ?
          <button className="movies__button movies__button_type_delete" type="button" aria-label="Кнопка удаления фильма из избранного" onClick={() => props.onMovieDelete(props.movie._id)}></button>
          :
          !props.movie.saved ?
            <button className="movies__button movies__button_type_save" type="button" aria-label="Кнопка сохранения фильма в избранное" onClick={() => props.onMovieSave(props.movie)}>Сохранить</button>
            :
            <button className="movies__button movies__button_type_saved" type="button" aria-label="Кнопка-уведомление о том, что фильм сохранен в избранное" onClick={() => props.onMovieDelete(props.movie._id)}></button>
      }
    </li>
  )
}

export default MoviesCard
