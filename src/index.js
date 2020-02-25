import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014
};

ReactDOM.render(
    <App
      promoName={promoMovie.name}
      promoGenre={promoMovie.genre}
      promoReleaseDate={promoMovie.release}
    />,
    document.querySelector(`#root`)
);
