import { MOVIES_API_PATH } from "./constants.js";

function checkRes(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`error: ${res}`);
  }
}

export function getApiMovies() {
  return fetch(MOVIES_API_PATH)
    .then((res) => checkRes(res));
}