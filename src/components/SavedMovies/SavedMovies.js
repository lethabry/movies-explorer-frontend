import React from "react";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  const isSavedMovies = true;
  return (
    <>
      <Header {...props} />
      <main>
        <SearchForm />
        <MoviesCardList width={props.width} isSavedMovies={isSavedMovies} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
