
import {
  FETCH_MOVIES_PENDING, FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED,
  DELETE_MOVIE_PENDING, DELETE_MOVIE_FULFILLED, DELETE_MOVIE_REJECTED
} from "../actions/moviesAction";

const initialState = {
  fetching: false,
  fetched: false,
  movieList: [],
  error: {}
}


function moviesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        fetching: true,
      }
    case FETCH_MOVIES_FULFILLED:
      return {
        ...state,
        movieList: payload,
        fetching: false,
        fetched: true
      }
    case FETCH_MOVIES_REJECTED:
      return {
        ...state,
        error: payload,
        fetching: false,
      }

    //DELETE
    case DELETE_MOVIE_PENDING:
      return { ...state }
    case DELETE_MOVIE_FULFILLED:
      return {
        ...state,
        movieList: state.movieList.filter(item => item.id !== payload.id),
      }
    case DELETE_MOVIE_REJECTED:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}



export default moviesReducer;