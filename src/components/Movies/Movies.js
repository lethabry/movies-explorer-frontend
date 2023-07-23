import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const isSavedMovies = false;
  return (
    <>
      <Header {...props} />
      <main>
        <SearchForm />
        <Preloader />
        <MoviesCardList width={props.width} isSavedMovies={isSavedMovies} />
      </main>
      <Footer />
    </>
  )
}

export default Movies
