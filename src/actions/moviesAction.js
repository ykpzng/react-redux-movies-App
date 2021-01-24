import axios from "axios";
import { API_BASE } from "../config/env";

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";

export const DELETE_MOVIE_PENDING = "DELETE_MOVIE_PENDING";
export const DELETE_MOVIE_FULFILLED = "DELETE_MOVIE_FULFILLED";
export const DELETE_MOVIE_REJECTED = "DELETE_MOVIE_REJECTED";


// promise middleware kullanmadan
/*
export function fetchMovies() {
  return dispatch => {
    axios.get(`${API_BASE}/movies`)
      .then(result => result.data)
      .then(data => dispatch({
        type: FETCH_MOVIES,
        payload: data
      }
      ))
      .catch(error => dispatch({
        type: FETCH_MOVIES_ERROR,
        payload: error,
      }
      ))
  }
}
*/

//promise middleware den dolayı case leri kısa yazıyorum

export function fetchMovies() {
  return (dispatch) => {
    dispatch({
      type: "FETCH_MOVIES",
      payload: axios.get(`${API_BASE}/movies`).then(result => result.data)
    })
  };
}


//DELETE Movie action
export function deleteMovie(id) {
  return (dispatch) => {
    dispatch({
      type: "DELETE_MOVIE",
      payload: axios.delete(`${API_BASE}/movies/${id}`)
        .then(result => Object.assign({}, result.data, { id }))
    })
  };
}