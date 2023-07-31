import { mainApiPath } from "./constants";

function checkRes(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`error: ${res}`);
  }
}

export function register(name, email, password) {
  return fetch(`${mainApiPath}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(res => checkRes(res));
}


export function login(email, password) {
  return fetch(`${mainApiPath}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => checkRes(res))
    .then((data) => {
      if (data._id) {
        localStorage.setItem('jwt', data._id);
        return data;
      } else {
        return;
      }
    })
}

export function getCurrentUser() {
  return fetch(`${mainApiPath}/users/me`, {
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(res => checkRes(res))
}

export function updateUserData(name, email) {
  return fetch(`${mainApiPath}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(res => checkRes(res))
}

export function signOut() {
  return fetch(`${mainApiPath}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => checkRes(res))
}

export function saveMovie(movie) {
  return fetch(`${mainApiPath}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
  })
    .then(res => checkRes(res))
}

export function getSavedMovies() {
  return fetch(`${mainApiPath}/movies`, {
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => checkRes(res))
}

export function removeSavedMovie(movieId) {
  return fetch(`${mainApiPath}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => checkRes(res))
}