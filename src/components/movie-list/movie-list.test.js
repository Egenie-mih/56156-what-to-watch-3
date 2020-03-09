import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MovieList from './movie-list';

const mockStore = configureStore([]);

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`,
    rating: 6.6,
    ratingCount: 194096,
    director: `David Yates`,
    actors: [
      `Saoirse Ronan`,
      `Tony Revoloru`,
      `Tilda Swinton`,
      `Tom Wilkinson`,
      `Owen Wilkinson`,
      `Adrien Brody`,
    ],
    genre: `Kids & Family`,
    year: 2018,
    duration: `2h 00m`,
    reviews: [
      {
        rating: 8.9,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `2016-12-20`,
      },
      {
        rating: 8.0,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `2016-12-20`,
      },
      {
        rating: 7.6,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `2016-12-20`,
      },
      {
        rating: 8.2,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `2016-12-20`,
      },
      {
        rating: 8.1,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `2016-12-20`,
      },
      {
        rating: 8.1,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `2016-12-20`,
      }
    ]
  },
  {
    title: `Mindhunter`,
    img: `img/mindhunter.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Trainees in the FBI's psychological profiling program must put their training into practice when they discover a killer in their midst.`,
    rating: 6.4,
    ratingCount: 56402,
    director: `Renny Harlin`,
    actors: [
      `Saoirse Ronan`,
      `Tony Revoloru`,
      `Tilda Swinton`,
      `Tom Wilkinson`,
      `Owen Wilkinson`,
      `Adrien Brody`,
    ],
    genre: `Crime`,
    year: 2004,
    duration: `2h 00m`,
    reviews: [
      {
        rating: 8.9,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `2016-12-20`,
      },
      {
        rating: 8.0,
        text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `2016-12-20`,
      }
    ]
  }
];

it(`MovieList should render correctly`, () => {
  const store = mockStore({
    currentGenre: `All genres`,
    filmsList: films,
    filteredFilms: films,
  });

  const tree = renderer
      .create(
          <Provider store={store}>
            <MovieList
              films={films}
              onMovieCardClick={() => {}}
            />
          </Provider>,
          {
            createNodeMock: () => {
              return {};
            }
          })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
