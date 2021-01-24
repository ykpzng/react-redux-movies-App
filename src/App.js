import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";
import NewMoviesPage from "./components/pages/NewMoviesPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";

import {
  Container
} from "semantic-ui-react";

class App extends Component {

  render() {

    return (
      <div>

        <Header />
        <Container text>
          <br />
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/movies" exact component={MoviesPage}></Route>
          <Route path="/movies/new" component={NewMoviesPage}></Route>
          <Route path="/movie/edit/:id" component={NewMoviesPage}></Route>
        </Container>

        {/* Start Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
