import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {ActionCreator} from "../../reducer";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {chosenFilm: null};
    this._renderApp = this._renderApp.bind(this);
    this._onMovieCardClick = this._onMovieCardClick.bind(this);
  }

  _onMovieCardClick(film) {
    this.setState({
      chosenFilm: film
    });
    this.props.onMovieCardClick(film.genre);
  }
  _renderApp() {
    const {promoMovie, filteredFilms, films} = this.props;
    const {chosenFilm} = this.state;
    const moviePageFilterdFilms = filteredFilms.slice(0, 4);

    if (chosenFilm) {
      return (
        <MoviePage
          films={moviePageFilterdFilms}
          film={chosenFilm}
          onMovieCardClick={this._onMovieCardClick}
        />
      );
    }

    return (
      <Main
        films={films}
        promoMovie={promoMovie}
        onMovieCardClick={this._onMovieCardClick}
      />
    );
  }

  render() {
    const {films, filteredFilms} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-page">
            <MoviePage film={films[0]} films={filteredFilms} onMovieCardClick={this._onMovieCardClick}/>
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
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })).isRequired,
  })).isRequired,
  filteredFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })).isRequired,
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.showedFilms,
  filteredFilms: state.filteredFilms
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick: (genre) => {
    dispatch(ActionCreator.setNewFilmsList(genre));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
