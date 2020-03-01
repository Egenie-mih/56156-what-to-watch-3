import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list';

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
  }
];

it(`MovieList should render correctly`, () => {
  const tree = renderer
      .create(<MovieList
        films={films}
        onMovieTitleClick={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
