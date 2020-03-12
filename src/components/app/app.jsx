import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from '../main/main.jsx';
import MoviePage from "../movie-page/movie-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {chosenFilm: null};
    this._renderApp = this._renderApp.bind(this);
    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
  }

  _handleMovieCardClick(film) {
    this.setState({
      chosenFilm: film
    });
  }
  _renderApp() {
    const {promoMovie, films} = this.props;
    const {chosenFilm} = this.state;

    if (chosenFilm) {
      return (
        <MoviePage film={chosenFilm} />
      );
    }

    return (
      <Main
        promoMovie={promoMovie}
        films={films}
        onMovieCardClick={this._handleMovieCardClick}
      />
    );
  }

  render() {
    const {films} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-page">
            <MoviePage film={films[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
