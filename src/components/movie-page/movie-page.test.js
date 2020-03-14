import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MoviePage from './movie-page.jsx';

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
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland.`,
    rating: 2,
    ratingCount: 50692,
    director: `Justin Kurzel`,
    actors: [
      `Saoirse Ronan`,
      `Tony Revoloru`,
      `Tilda Swinton`,
      `Tom Wilkinson`,
      `Owen Wilkinson`,
      `Adrien Brody`,
    ],
    genre: `Dramas`,
    year: 2015,
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
  },
  {
    title: `Aviator`,
    img: `img/aviator.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    rating: 7.5,
    ratingCount: 318179,
    director: `Martin Scorsese`,
    actors: [
      `Saoirse Ronan`,
      `Tony Revoloru`,
      `Tilda Swinton`,
      `Tom Wilkinson`,
      `Owen Wilkinson`,
      `Adrien Brody`,
    ],
    genre: `Documentary`,
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
  },
  {
    title: `Revenant`,
    img: `img/revenant.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
    rating: 8.0,
    ratingCount: 657196,
    director: `Alejandro G. Iñárritu`,
    actors: [
      `Saoirse Ronan`,
      `Tony Revoloru`,
      `Tilda Swinton`,
      `Tom Wilkinson`,
      `Owen Wilkinson`,
      `Adrien Brody`,
    ],
    genre: `Horror`,
    year: 2015,
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
  },
  {
    title: `Johnny English`,
    img: `img/johnny-english.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `After a sudden attack on MI5, Johnny English, Britain's most confident, yet unintelligent spy, becomes Britain's only spy.`,
    rating: 4,
    ratingCount: 141308,
    director: `Peter Howitt`,
    actors: [
      `Saoirse Ronan`,
      `Tony Revoloru`,
      `Tilda Swinton`,
      `Tom Wilkinson`,
      `Owen Wilkinson`,
      `Adrien Brody`,
    ],
    genre: `Comedies`,
    year: 2003,
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
  },
  {
    title: `Snatch`,
    img: `img/snatch.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly.`,
    rating: 8.3,
    ratingCount: 745402,
    director: `Guy Ritchie`,
    actors: [
      `Saoirse Ronan`,
      `Tony Revoloru`,
      `Tilda Swinton`,
      `Tom Wilkinson`,
      `Owen Wilkinson`,
      `Adrien Brody`,
    ],
    genre: `Romance`,
    year: 2000,
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
  },
  {
    title: `War of the worlds`,
    img: `img/war-of-the-worlds.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival in this sci-fi action film.`,
    rating: 6.5,
    ratingCount: 399402,
    director: `Steven Spielberg`,
    actors: [
      `Saoirse Ronan`,
      `Tony Revoloru`,
      `Tilda Swinton`,
      `Tom Wilkinson`,
      `Owen Wilkinson`,
      `Adrien Brody`,
    ],
    genre: `Sci-Fi`,
    year: 2005,
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
const film = {
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
};

it(`MoviePage should render correctly`, () => {
  const store = mockStore({
    currentGenre: `All genres`,
    filmsList: films,
    filteredFilms: films,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            film={film}
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