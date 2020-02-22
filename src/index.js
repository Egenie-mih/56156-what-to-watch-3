import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014
};

ReactDOM.render(
  <App
    promoName={Settings.NAME}
    promoGenre={Settings.GENRE}
    promoReleaseDate={Settings.RELEASE_DATE}
  />,
  document.querySelector(`#root`)
);
