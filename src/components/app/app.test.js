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
  },
  {
    title: `Aviator`,
    img: `img/aviator.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    rating: 7.5,
    ratingCount: 318179,
    director: `Martin Scorsese`,
    actors: `Leonardo DiCaprio, Cate Blanchett, Kate Beckinsale`,
    genre: `Documentary`,
    year: 2004
  },
  {
    title: `Revenant`,
    img: `img/revenant.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
    rating: 8.0,
    ratingCount: 657196,
    director: `Alejandro G. Iñárritu`,
    actors: `Leonardo DiCaprio, Tom Hardy, Will Poulter`,
    genre: `Horror`,
    year: 2015
  },
  {
    title: `Johnny English`,
    img: `img/johnny-english.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `After a sudden attack on MI5, Johnny English, Britain's most confident, yet unintelligent spy, becomes Britain's only spy.`,
    rating: 4,
    ratingCount: 141308,
    director: `Peter Howitt`,
    actors: `Rowan Atkinson, John Malkovich, Natalie Imbruglia`,
    genre: `Comedies`,
    year: 2003
  },
  {
    title: `Snatch`,
    img: `img/snatch.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly.`,
    rating: 8.3,
    ratingCount: 745402,
    director: `Guy Ritchie`,
    actors: `Jason Statham, Brad Pitt, Benicio Del Toro`,
    genre: `Romance`,
    year: 2000
  },
  {
    title: `Mindhunter`,
    img: `img/mindhunter.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `Trainees in the FBI's psychological profiling program must put their training into practice when they discover a killer in their midst.`,
    rating: 6.4,
    ratingCount: 56402,
    director: `Renny Harlin`,
    actors: `Val Kilmer, LL Cool J, Christian Slater`,
    genre: `Crime`,
    year: 2004
  },
  {
    title: `War of the worlds`,
    img: `img/war-of-the-worlds.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival in this sci-fi action film.`,
    rating: 6.5,
    ratingCount: 399402,
    director: `Steven Spielberg`,
    actors: ` Tom Cruise, Dakota Fanning, Tim Robbins`,
    genre: `Sci-Fi`,
    year: 2005
  }
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
