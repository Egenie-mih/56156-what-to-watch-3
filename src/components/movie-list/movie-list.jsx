import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
    this._handleMovieCardOver = this._handleMovieCardOver.bind(this);
    this._handleMovieCardOut = this._handleMovieCardOut.bind(this);
  }

  _handleMovieCardOver(card) {
    this.setState({
      activeCard: card,
    });
  }

  _handleMovieCardOut() {
    this.setState({
      activeCard: null,
    });
  }

  render() {
    const {films, onMovieTitleClick} = this.props;
    return (
      films.map((film) => {
        return (
          <SmallMovieCard
            key={film.title}
            film={film}
            onMovieMouseOver={this._handleMovieCardOver}
            onMovieMouseOut={this._handleMovieCardOut}
            onMovieTitleClick={onMovieTitleClick}
          />
        );
      })
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MovieList;
