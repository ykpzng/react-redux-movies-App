import React from "react";
import PropTypes from "prop-types";
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import BarLoader from "react-spinners/ClipLoader";

function MoviesList({ propsMovies, deleteMovie }) {
  const emptyMessage = <p>There are no movies yet.</p>;
  const moviesList = (
    <div>
      <Grid >
        <Grid.Row columns={3}>
          {propsMovies.error.response ? <h3>Error data!</h3>
            : propsMovies.movieList.map(movie => (
              <Grid.Column key={movie.id}>
                <MovieCard propsMovie={movie} deleteMovie={deleteMovie} />
              </Grid.Column>
            ))}
        </Grid.Row>
      </Grid>
    </div>
  );
  console.log(propsMovies);
  return (
    <div>
      <BarLoader color={'#00b5ad'} loading={propsMovies.fetching} />
      {propsMovies.movieList.length === 0 ? emptyMessage : moviesList}
    </div>
  );
}
MoviesList.propsTypes = {
  propsMovies: PropTypes.shape({
    movies: PropTypes.array.isRequired,
  }).isRequired,
};


export default MoviesList;



// loading aşamasında spinners gözükmesi için npm i react-spinners yükledim


