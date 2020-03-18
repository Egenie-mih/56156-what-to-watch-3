import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withVideo from '../../hocs/with-video/with-video.js';

const MovieCardWrapper = withVideo(SmallMovieCard);

class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onMovieCardClick} = this.props;
    return (
      films.map((film) => {
        return (
          <MovieCardWrapper
            key={film.id}
            film={film}
            onMovieCardClick={onMovieCardClick}
          />
        );
      })
    );
  }
}


MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export default MovieList;
