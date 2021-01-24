import {
  NEW_MOVIE_PENDING, NEW_MOVIE_FULFILLED, NEW_MOVIE_REJECTED,
  FETCH_MOVIE_PENDING, FETCH_MOVIE_FULFILLED, FETCH_MOVIE_REJECTED,
  UPDATE_MOVIE_PENDING, UPDATE_MOVIE_FULFILLED, UPDATE_MOVIE_REJECTED
} from "../actions/NewMovieAction";


const initialState = {
  fetching: false,
  fetched: false,
  movieList: [],
  error: {},
  movie: { fetching: false }
}


function newMovieReducer(state = initialState, { type, payload }) {
  switch (type) {
    case NEW_MOVIE_PENDING:
      return {
        ...state,
        fetching: true,
        fetched: false,
      }
    case NEW_MOVIE_FULFILLED:
      return {
        ...state,
        movieList: payload,
        fetching: false,
        fetched: true
      }
    case NEW_MOVIE_REJECTED:
      return {
        ...state,
        error: payload,
        fetching: false,
        fetched: false,
      }

    //GET MOVIE from "fetchMovie" function in action
    case FETCH_MOVIE_PENDING:
      return { ...state, movie: { fetching: true } }
    case FETCH_MOVIE_FULFILLED:
      return { ...state, movie: { ...payload, fetching: false } }
    case FETCH_MOVIE_REJECTED:
      return { ...state, movie: { fetching: false } }

    //UPDATE MOVİE from "onUpdateMovieSubmit" function in action
    case UPDATE_MOVIE_PENDING:
      return { ...state, fetching: true, fetched: false }
    case UPDATE_MOVIE_FULFILLED:
      return { ...state, fetching: false, fetched: true }
    case UPDATE_MOVIE_REJECTED:
      return { ...state, error: payload, fetching: false, fetched: false }

    default:
      return state
  }
}



export default newMovieReducer;