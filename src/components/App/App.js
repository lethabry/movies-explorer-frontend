import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register'
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Menu from '../Menu/Menu';
import './App.css';

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [innerWidth])

  function handleBurgerButtonClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  const generalProps = {
    onMenuClick: handleBurgerButtonClick,
    isLoggedIn: isLoggedIn,
    width: innerWidth
  };

  const menuProps = {
    isMenuActive: isBurgerMenuOpen,
    onMenuClose: handleBurgerButtonClick,
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main {...generalProps} />}></Route>
        <Route path="/movies" element={<Movies {...generalProps} />}></Route>
        <Route path="/saved-movies" element={<SavedMovies {...generalProps} />}></Route>
        <Route path="/profile" element={<Profile {...generalProps} />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Menu {...menuProps} />
    </div>
  );
}

export default App;
