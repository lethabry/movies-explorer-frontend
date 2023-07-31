import { moviesApiPath } from "./constants.js";

function checkRes(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`error: ${res}`);
  }
}

export function getApiMovies() {
  return fetch(moviesApiPath)
    .then((res) => checkRes(res));
}