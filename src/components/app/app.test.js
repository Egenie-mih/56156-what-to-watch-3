import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014
};

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
  },
  {
    title: `Aviator`,
    img: `img/aviator.jpg`,
  },
  {
    title: `Revenant`,
    img: `img/revenant.jpg`,
  },
  {
    title: `Johnny English`,
    img: `img/johnny-english.jpg`,
  },
  {
    title: `Snatch`,
    img: `img/snatch.jpg`,
  },
  {
    title: `Mindhunter`,
    img: `img/mindhunter.jpg`,
  },
  {
    title: `War of the worlds`,
    img: `img/war-of-the-worlds.jpg`,
  },
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      promoMovie={promoMovie}
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
