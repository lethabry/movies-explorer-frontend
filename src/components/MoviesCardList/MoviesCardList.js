import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import initialCards from "../../utils/constants";
import imagePath from "../../images/1.png";
import './MoviesCardList.css';

function MoviesCardList(props) {

  const [cards, setCards] = React.useState([]);

  function countInitialCards() {
    if (props.width <= 768 && props.width > 474) {
      setCards(initialCards.slice(0, 8));
    }
    else if (props.width <= 474) {
      setCards(initialCards.slice(0, 5));
    }
    else {
      setCards(initialCards);
    }
  }

  React.useEffect(() => {
    countInitialCards();
  }, [props.width]);

  return (
    <section className="movies">
      <ul className="movies__list">
        {cards.map(card => (
          <MoviesCard name={card.name} key={card.id} duration={card.duration} src={imagePath} isSavedMovies={props.isSavedMovies}/>
        ))}
      </ul>
      {
        !props.isSavedMovies && <button className="movies__button movies__button_type_more" aria-label="Кнопка загрузки новых фильмов" type="button">Ещё</button>
      }
    </section>
  )
}

export default MoviesCardList;
