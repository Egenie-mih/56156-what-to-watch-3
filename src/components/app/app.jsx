import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = ({promoName, promoGenre, promoReleaseDate, allMovies}) => {
  return (
    <Main
      promoName={promoName}
      promoGenre={promoGenre}
      promoReleaseDate={promoReleaseDate}
      allMovies={allMovies}
    />
  );
};

App.propTypes = {
  promoName: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.number.isRequired,
  allMovies: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired
};

export default App;
