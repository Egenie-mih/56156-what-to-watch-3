import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card';

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`SmallMovieCard should render correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      film={film}
      onMovieMouseOver={() => {}}
      onMovieMouseOut={() => {}}
      onMovieTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
