import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import newMovieReducer from "./NewMovieReducer";

export default combineReducers({
  moviesReducer,
  newMovieReducer
});


// bütün reducerları burada birleştiriyoruz
