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
        <SearchForm
          onSubmit={props.onSubmit}
          handleCheckbox={props.handleCheckbox}
          hasUserSearched={props.hasUserSearched}
          isCheckboxChecked={props.isCheckboxChecked}
        />
        <Preloader isActive={props.isLoading} />
        {props.movies.length > 0 && <MoviesCardList
          isCheckboxChecked={props.isCheckboxChecked}
          width={props.width}
          isSavedMovies={isSavedMovies}
          movies={props.movies}
          hasUserSearched={props.hasUserSearched}
          handleSave={props.handleSave}
          handleDelete={props.handleRemove}
        />}
      </main>
      <Footer />
    </>
  )
}

export default Movies
