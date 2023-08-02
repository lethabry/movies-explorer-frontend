import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { IMAGE_PATH, COUNT_INITIAL_MOVIES_DESKTOP, COUNT_INITIAL_MOVIES_PAD, COUNT_INITIAL_MOVIES_PHONE, COUNT_PART_DESKTOP, COUNT_PART_PAD } from "../../utils/constants";
import './MoviesCardList.css';

function MoviesCardList(props) {

  const [partMovies, setPartMovies] = React.useState([]);
  const [isNoMoreMovies, setIsNoMoreMovies] = React.useState(true);

  function countInitialMovies() {
    if (props.isSavedMovies) {
      setPartMovies(props.movies);
    }
    else {
      if (props.width <= 768 && props.width > 480) {
        setPartMovies(props.movies.slice(0, COUNT_INITIAL_MOVIES_PAD));
      }
      else if (props.width <= 480) {
        setPartMovies(props.movies.slice(0, COUNT_INITIAL_MOVIES_PHONE));
      }
      else {
        setPartMovies(props.movies.slice(0, COUNT_INITIAL_MOVIES_DESKTOP));
      }
    }
  }

  function checkMoviesLength() {
    setIsNoMoreMovies(partMovies.length === props.movies.length);
  }

  function getMore() {
    const finalIndex = partMovies.length;
    props.width > 1021 ?
      setPartMovies(props.movies.slice(0, finalIndex + COUNT_PART_DESKTOP))
      :
      setPartMovies(props.movies.slice(0, finalIndex + COUNT_PART_PAD));
    checkMoviesLength();
  }

  React.useEffect(() => {
    countInitialMovies();
  }, [props.width, props.movies.length]);

  React.useEffect(() => {
    checkMoviesLength();
  }, [countInitialMovies]);

  return (
    <section className="movies">
      <ul className="movies__list">
        {partMovies.map((movie) => (
          <MoviesCard
            movie={movie}
            name={movie.nameRU}
            key={props.isSavedMovies ? movie._id : movie.id}
            duration={movie.duration}
            src={props.isSavedMovies ? movie.image : `${IMAGE_PATH}` + `${movie.image.url}`}
            trailerLink={movie.trailerLink}
            isSavedMovies={props.isSavedMovies}
            onMovieSave={props.handleSave}
            onMovieDelete={props.handleDelete}
          />
        ))}
      </ul>
      {
        (!props.isSavedMovies && !isNoMoreMovies) &&
        <button className="movies__button movies__button_type_more" onClick={getMore} aria-label="Кнопка загрузки новых фильмов" type="button">Ещё</button>
      }
    </section>
  )
}

export default MoviesCardList;
