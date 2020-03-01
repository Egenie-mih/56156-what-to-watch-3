import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014
};

ReactDOM.render(
    <App
      promoMovie={promoMovie}
      films={films}
    />,
    document.querySelector(`#root`)
);
