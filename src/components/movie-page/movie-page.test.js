import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const film = {
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
};

it(`MoviePage should render correctly`, () => {
  const tree = renderer
    .create(<MoviePage
      film={film}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
