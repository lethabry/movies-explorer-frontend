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
        <SearchForm
          onSubmit={props.onSubmit}
          onFilter={props.onFilter}
          handleCheckbox={props.handleCheckbox}
          isCheckboxChecked={props.isCheckboxChecked} />
        <MoviesCardList
          width={props.width}
          isSavedMovies={isSavedMovies}
          movies={props.movies}
          handleDelete={props.handleRemove}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
