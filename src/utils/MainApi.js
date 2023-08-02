import { MAIN_API_PATH, IMAGE_PATH } from "./constants";

function checkRes(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`error: ${res}`);
  }
}

export function register(name, email, password) {
  return fetch(`${MAIN_API_PATH}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(res => checkRes(res));
}


export function login(email, password) {
  return fetch(`${MAIN_API_PATH}/signin`, {
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
  return fetch(`${MAIN_API_PATH}/users/me`, {
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(res => checkRes(res))
}

export function updateUserData(name, email) {
  return fetch(`${MAIN_API_PATH}/users/me`, {
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
  return fetch(`${MAIN_API_PATH}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => checkRes(res))
}

export function saveMovie(movie) {
  return fetch(`${MAIN_API_PATH}/movies`, {
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
      image: `${IMAGE_PATH}` + `${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${IMAGE_PATH}` + `${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
  })
    .then(res => checkRes(res))
}

export function getSavedMovies() {
  return fetch(`${MAIN_API_PATH}/movies`, {
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => checkRes(res))
}

export function removeSavedMovie(movieId) {
  return fetch(`${MAIN_API_PATH}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => checkRes(res))
}