import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { imagePath } from "../../utils/constants";
import './MoviesCardList.css';

function MoviesCardList(props) {

  const countInitialMoviesDesktop = 12;
  const countInitialMoviesPad = 8;
  const countInitialMoviesPhone = 5;
  const countPartDesktop = 3;
  const countPartPad = 2;

  const [partMovies, setPartMovies] = React.useState([]);
  const [isNoMoreMovies, setIsNoMoreMovies] = React.useState(true);

  function countInitialMovies() {
    if (props.isSavedMovies) {
      setPartMovies(props.movies);
    }
    else {
      if (props.width <= 768 && props.width > 480) {
        setPartMovies(props.movies.slice(0, countInitialMoviesPad));
      }
      else if (props.width <= 480) {
        setPartMovies(props.movies.slice(0, countInitialMoviesPhone));
      }
      else {
        setPartMovies(props.movies.slice(0, countInitialMoviesDesktop));
      }
    }
  }

  function checkMoviesLength() {
    setIsNoMoreMovies(partMovies.length === props.movies.length);
  }

  function getMore() {
    const finalIndex = partMovies.length;
    props.width > 768 ?
      setPartMovies(props.movies.slice(0, finalIndex + countPartDesktop))
      :
      setPartMovies(props.movies.slice(0, finalIndex + countPartPad));
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
            src={props.isSavedMovies ? movie.image : `${imagePath}` + `${movie.image.url}`}
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
