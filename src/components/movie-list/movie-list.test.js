import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list';

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`,
    rating: 6.6,
    ratingCount: 194096,
    director: `David Yates`,
    actors: `Eddie Redmayne, Katherine Waterston, Dan Fogler`,
    genre: `Kids & Family`,
    year: 2018
  },
  {
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland.`,
    rating: 2,
    ratingCount: 50692,
    director: `Justin Kurzel`,
    actors: ` Michael Fassbender, Marion Cotillard, Jack Madigan`,
    genre: `Dramas`,
    year: 2015
  }
];

it(`MovieList should render correctly`, () => {
  const tree = renderer
      .create(<MovieList
        films={films}
        onMovieCardClick={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
