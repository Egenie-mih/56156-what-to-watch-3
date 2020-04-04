import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
    this._handleMovieCardMouseOver = this._handleMovieCardMouseOver.bind(this);
    this._handleMovieCardMouseOut = this._handleMovieCardMouseOut.bind(this);
  }

  _handleMovieCardMouseOver(card) {
    this.setState({
      activeCard: card,
    });
  }

  _handleMovieCardMouseOut() {
    this.setState({
      activeCard: null,
    });
  }

  render() {
    const {films, onMovieCardClick} = this.props;
    return (
      films.map((film) => {
        return (
          <SmallMovieCard
            key={film.title}
            film={film}
            onMovieCardMouseOver={this._handleMovieCardMouseOver}
            onMovieCardMouseOut={this._handleMovieCardMouseOut}
            onMovieCardClick={onMovieCardClick}
          />
        );
      })
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export default MovieList;
