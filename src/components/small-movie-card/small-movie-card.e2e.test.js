import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter()
});

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

it(`Handler onMovieCardMouseOver get correct data`, () => {
  const onMovieCardMouseOver = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onMovieCardMouseOver={onMovieCardMouseOver}
        onMovieCardMouseOut={() => {}}
        onMovieCardClick={() => {}}
      />
  );

  const card = smallMovieCard.find(`article`);
  card.simulate(`mouseOver`);

  expect(onMovieCardMouseOver.mock.calls.length).toBe(1);
  expect(onMovieCardMouseOver.mock.calls[0][0]).toMatchObject(film);
});


it(`Handler onMovieCardClick get correct data`, () => {
  const onMovieCardClick = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onMovieCardMouseOver={() => {}}
        onMovieCardMouseOut={() => {}}
        onMovieCardClick={onMovieCardClick}
      />
  );

  const card = smallMovieCard.find(`article`);
  card.simulate(`click`);

  expect(onMovieCardClick.mock.calls.length).toBe(1);
  expect(onMovieCardClick.mock.calls[0][0]).toMatchObject(film);
});
