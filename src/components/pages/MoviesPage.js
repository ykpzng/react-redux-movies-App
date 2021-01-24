import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropsTypes from "prop-types"
import MoviesList from "../MoviesList";
import { fetchMovies, deleteMovie } from "../../actions/moviesAction";


export class MoviesPage extends Component {

  static propsTypes = {
    movies: PropsTypes.object.isRequired,
    deleteMovie: PropsTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {

    return (
      <div>
        <h2>MOVIES PAGE</h2>
        <MoviesList propsMovies={this.props.movies} deleteMovie={this.props.deleteMovie} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer
  }

}

const mapDispatchToProps = {
  fetchMovies,
  deleteMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
