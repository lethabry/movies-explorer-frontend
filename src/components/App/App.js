import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register'
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Menu from '../Menu/Menu';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRouteElement from './ProtectedRouteElement/ProtectedRouteElement';
import { getApiMovies } from '../../utils/MoviesApi';
import {
  register,
  login,
  getCurrentUser,
  updateUserData,
  signOut,
  saveMovie,
  getSavedMovies,
  removeSavedMovie
} from '../../utils/MainApi';
import './App.css';


function App() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [textResult, setTextResult] = React.useState('');
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const [hasUserSearched, setHasUserSearched] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      if (isCheckboxChecked) {
        filterDurationMovies();
      }
      else {
        setCards(JSON.parse(localStorage.getItem('movies')));
        setSavedCards(JSON.parse(localStorage.getItem('savedMovies')));
      }
    }
  }, [isCheckboxChecked]);

  React.useEffect(() => {
    if (localStorage.getItem('name')) {
      setHasUserSearched(true);
      setCards(JSON.parse(localStorage.getItem('movies')));
      setIsCheckboxChecked(JSON.parse(localStorage.getItem('isCheckboxChecked')));
    }
  }, [])

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      handleToken();
      Promise.all([getCurrentUser(), getSavedMovies()])
        .then(([userData, moviesData]) => {
          const { user } = userData;
          const { movies } = moviesData;
          setCurrentUser(user);
          setSavedCards(movies);
        })
        .catch((err) => console.log(`Error: ${err.message}`))
    }
  }, [isLoggedIn])

  React.useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [innerWidth])

  function createUser(userData) {
    const { name, email, password } = userData;
    setIsLoading(true);
    register(name, email, password)
      .then(() => {
        setTextResult('Регистрация прошла успешно');
        setIsTooltipOpen(true);
        navigate('/signin', { replace: true });
      })
      .catch(() => {
        setTextResult('Возникла ошибка при регистрации пользователя')
        setIsTooltipOpen(true);
      })
      .finally(() => setIsLoading(false))
  }

  function loginUser(userData) {
    const { email, password } = userData;
    setIsLoading(true);
    login(email, password)
      .then(() => {
        setIsLoggedIn(true);
        setTextResult('Вы успешно авторизовались')
        setIsTooltipOpen(true);
        navigate('/movies', { replace: true });
      })
      .catch(() => {
        setTextResult('Возникла ошибка при авторизации пользователя')
        setIsTooltipOpen(true);
      })
      .finally(() => setIsLoading(false));
  }

  function handleUserData(name, email) {
    setIsLoading(true);
    updateUserData(name, email)
      .then((userData) => {
        const { user } = userData;
        setCurrentUser(user);
        setTextResult('Данные успешно изменены');
        setIsTooltipOpen(true);
      })
      .catch(() => {
        setTextResult('Возникла ошибка при изменении личных данных пользователя')
        setIsTooltipOpen(true);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignOut() {
    signOut()
      .then(() => {
        setIsLoggedIn(false);
        localStorage.clear();
        setCards([]);
        setSavedCards([]);
        navigate('/', { replace: true });
      })
      .catch((err) => console.log(err))
  }

  function getMovies(name) {
    setCards([]);
    setTextResult('');
    setIsLoading(true);
    getApiMovies()
      .then((movies) => {
        const filteredMovies = filterMovies(movies, name);
        if (filteredMovies.length === 0) {
          setTextResult('Ничего не найдено');
          setIsTooltipOpen(true);
          return;
        }
        setCards(filteredMovies);
        setHasUserSearched(true);
        saveRequest(name, filteredMovies);
      })
      .catch(() => {
        setTextResult('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        setIsTooltipOpen(true);
      }
      )
      .finally(() => setIsLoading(false))
  }

  function handleSaveMovie(movie) {
    saveMovie(movie)
      .then((movieData) => {
        const { movie } = movieData;
        setSavedCards([...savedCards, movie]);
        const filteredMovies = filterSavedMovies(cards, [...savedCards, movie]);
        setCards(filteredMovies);
        localStorage.setItem('movies', JSON.stringify(filteredMovies));
        localStorage.setItem('savedMovies', JSON.stringify([...savedCards, movie]));
      })
      .catch(() => {
        setTextResult('Во время сохранения фильма в избранное произошла ошибка');
        setIsTooltipOpen(true);
      });
  }

  function handleRemoveMovie(id) {
    removeSavedMovie(id)
      .then(() => {
        setSavedCards((state) => {
          const updateSavedMovies = state.filter((movie) => movie._id !== id);
          const filteredMovies = filterSavedMovies(cards, updateSavedMovies);
          setCards(filteredMovies);
          localStorage.setItem('movies', JSON.stringify(filteredMovies));
          localStorage.setItem('savedMovies', JSON.stringify(updateSavedMovies));
          return updateSavedMovies;
        });
      })
      .catch(() => {
        setTextResult('Во время удаления фильма из избранного прошзошла ошибка');
        setIsTooltipOpen(true);
      });
  }

  function handleFilterSavedMovies(name) {
    setSavedCards(filterMovies(savedCards, name));
  }

  function handleToken() {
    setIsLoggedIn(true);
    navigate('/movies', { replace: true });
  }

  function handleCheckbox() {
    setIsCheckboxChecked(!isCheckboxChecked);
  }

  function saveRequest(name, movies) {
    localStorage.setItem('name', name);
    localStorage.setItem('isCheckboxChecked', JSON.stringify(isCheckboxChecked));
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  function filterDurationMovies() {
    setCards((state => state.filter((el) => isCheckboxChecked ? el.duration <= '40' : el.duration >= '0')));
    setSavedCards((state => state.filter((el) => isCheckboxChecked ? el.duration <= '40' : el.duration >= '0')));
  }

  function filterMovies(array, name) {
    const searchedName = name.split('').map(el => el.toLowerCase()).join('');
    const filteredArray = array.filter((el) => {
      const nameRu = el.nameRU.split('').map(el => el.toLowerCase()).join('');
      const nameEn = el.nameEN.split('').map(el => el.toLowerCase()).join('');
      const hasSearchedName = nameRu.includes(searchedName) || nameEn.includes(searchedName);
      const isShort = el.duration <= '40';
      return isCheckboxChecked ? hasSearchedName && isShort : hasSearchedName;
    });
    const filterSavedArray = filterSavedMovies(filteredArray, savedCards);
    return filterSavedArray;
  }

  function filterSavedMovies(movies, savedMovies) {
    const filteredSavedMovies = movies.map((movie) => {
      const indexSavedMovie = savedMovies.findIndex((saveMovie) => saveMovie.movieId === movie.id);
      movie.saved = indexSavedMovie !== -1;
      if (movie.saved) {
        movie._id = savedMovies[indexSavedMovie]._id;
      }
      return movie;
    });
    return filteredSavedMovies;
  }

  function handleBurgerButtonClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function handleInfoTooltipClose() {
    setIsTooltipOpen(false);
  }

  const mainProps = {
    onMenuClick: handleBurgerButtonClick,
    isLoggedIn: isLoggedIn,
    width: innerWidth
  };

  const moviesProps = {
    onMenuClick: handleBurgerButtonClick,
    isLoggedIn: isLoggedIn,
    width: innerWidth,
    onSubmit: getMovies,
    movies: cards,
    isLoading: isLoading,
    handleCheckbox: handleCheckbox,
    isCheckboxChecked: isCheckboxChecked,
    hasUserSearched: hasUserSearched,
    handleSave: handleSaveMovie,
    handleRemove: handleRemoveMovie,
  }

  const savedMoviesProps = {
    onMenuClick: handleBurgerButtonClick,
    handleCheckbox: handleCheckbox,
    isCheckboxChecked: isCheckboxChecked,
    isLoggedIn: isLoggedIn,
    width: innerWidth,
    movies: savedCards,
    handleRemove: handleRemoveMovie,
    onSubmit: handleFilterSavedMovies,
  }

  const menuProps = {
    isMenuActive: isBurgerMenuOpen,
    onMenuClose: handleBurgerButtonClick,
  };

  const registerProps = {
    handleRegistration: createUser,
    isLoading: isLoading,
  }

  const loginProps = {
    handleLogin: loginUser,
    isLoading: isLoading,
  }

  const profileProps = {
    handleUserData: handleUserData,
    handleSignOut: handleSignOut,
    onMenuClick: handleBurgerButtonClick,
    isLoggedIn: isLoggedIn,
    width: innerWidth,
    isLoading: isLoading
  }

  const infoTooltipProps = {
    text: textResult,
    isOpen: isTooltipOpen,
    onClose: handleInfoTooltipClose
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main {...mainProps} />}></Route>
          <Route path="/movies" element={<ProtectedRouteElement element={Movies} {...moviesProps} />}></Route>
          <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies} {...savedMoviesProps} />}></Route>
          <Route path="/profile" element={<ProtectedRouteElement element={Profile}{...profileProps} />}></Route>
          <Route path="/signin" element={<Login {...loginProps} />}></Route>
          <Route path="/signup" element={<Register {...registerProps} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes >
        <InfoTooltip {...infoTooltipProps} />
        <Menu {...menuProps} />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
