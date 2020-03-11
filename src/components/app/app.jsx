import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const movieTitleClickHandler = () => {};

const App = ({promoMovie, allMovies}) => {
  return (
    <Main
      promoMovie={promoMovie}
      allMovies={allMovies}
      onMovieTitleClick={movieTitleClickHandler}
    />
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }).isRequired,
  allMovies: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired
};

export default App;
