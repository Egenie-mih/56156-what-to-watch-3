import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const movieTitleClickHandler = () => {};

const App = ({promoMovie, films}) => {
  return (
    <Main
      promoMovie={promoMovie}
      films={films}
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
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
