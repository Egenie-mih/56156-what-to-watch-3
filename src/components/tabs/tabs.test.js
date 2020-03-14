import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

const film = {
  id: `1`,
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
  duration: `2h`,
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
};

it(`Tabs should render correctly`, () => {
  const tree = renderer
    .create(<Tabs
      film={film}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

