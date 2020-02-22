import React from 'react';
import Main from '../main/main.jsx';

// eslint-disable-next-line react/prop-types
const App = ({promoName, promoGenre, promoReleaseDate}) => {
  return (
    <Main
      promoName={promoName}
      promoGenre={promoGenre}
      promoReleaseDate={promoReleaseDate}
    />
  );
};

export default App;
