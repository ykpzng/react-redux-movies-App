import React, { Component } from 'react';
import NewMovieForm from "../NewMovieForm";
import { connect } from "react-redux";
import { onNewMovieSubmit, fetchMovie, onUpdateMovieSubmit } from "../../actions/NewMovieAction";

class NewMoviesPage extends Component {

  // Edit sayfasında sayfayı yenileyince veriler kayboluyor bunu engellemek için
  // willEditmovie boş ve adres te bir id varsa sayfa yenilenmiş anlamına geliyor
  // fetchMovie id id li veriyi database den getiren function
  componentDidMount() {
    const { match } = this.props;
    if (!this.props.willEditmovie && match.params.id) {
      this.props.fetchMovie(match.params.id);
    }
  }



  render() {
    console.log(this.props)
    return (
      <div>
        <NewMovieForm
          onNewMovieSubmit={this.props.onNewMovieSubmit}
          newMovie={this.props.newMovie}
          willEditmovie={this.props.willEditmovie}
          onUpdateMovieSubmit={this.props.onUpdateMovieSubmit}
        />
      </div>
    )
  }
}



const mapStateToProps = ({ newMovieReducer, moviesReducer }, props) => {
  return {
    newMovie: newMovieReducer,
    willEditmovie: moviesReducer.movieList.find(item => item.id === props.match.params.id)
  }
};

const mapDispatchToProps = {
  onNewMovieSubmit,
  fetchMovie,
  onUpdateMovieSubmit
}


export default connect(mapStateToProps, mapDispatchToProps)(NewMoviesPage);