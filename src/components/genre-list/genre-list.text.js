import React from 'react';
import renderer from 'react-test-renderer';
import {GenreList} from './genre-list.jsx';

it(`GenreList should render correctly`, () => {
  const tree = renderer
      .create(<GenreList
        currentGenre={`All genres`}
        onGenreButtonClick={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
