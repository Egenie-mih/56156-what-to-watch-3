import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
    this._onMovieCardMouseOver = this._onMovieCardMouseOver.bind(this);
    this._onMovieCardMouseOut = this._onMovieCardMouseOut.bind(this);
  }

  _onMovieCardMouseOver(card) {
    this.setState({
      activeCard: card,
    });
  }

  _onMovieCardMouseOut() {
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
            key={film.id}
            film={film}
            onMovieCardMouseOver={this._onMovieCardMouseOver}
            onMovieCardMouseOut={this._onMovieCardMouseOut}
            onMovieCardClick={onMovieCardClick}
          />
        );
      })
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.showedFilms
});

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export {MovieList};

export default connect(mapStateToProps)(MovieList);
