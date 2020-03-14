import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

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
  }
  _renderApp() {
    const {promoMovie, films} = this.props;
    const {chosenFilm} = this.state;

    if (chosenFilm) {
      return (
        <MoviePage
          films={films}
          film={chosenFilm}
          onMovieCardClick={this._onMovieCardClick}
        />
      );
    }

    return (
      <Main
        promoMovie={promoMovie}
        onMovieCardClick={this._onMovieCardClick}
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
            <MoviePage film={films[0]} onMovieCardClick={this._onMovieCardClick}/>
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
};

const mapStateToProps = (state) => ({
  films: state.filmsList,
});

export {App};

export default connect(mapStateToProps)(App);
