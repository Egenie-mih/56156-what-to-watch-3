import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014
};

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
  },
  {
    title: `Aviator`,
    img: `img/aviator.jpg`,
  },
  {
    title: `Revenant`,
    img: `img/revenant.jpg`,
  },
  {
    title: `Johnny English`,
    img: `img/johnny-english.jpg`,
  },
  {
    title: `Snatch`,
    img: `img/snatch.jpg`,
  },
  {
    title: `Mindhunter`,
    img: `img/mindhunter.jpg`,
  },
  {
    title: `War of the worlds`,
    img: `img/war-of-the-worlds.jpg`,
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Handler onMovieCardClick get correct data`, () => {
  const onMovieCardClick = jest.fn();

  const main = shallow(
      <Main
        promoMovie={promoMovie}
        films={films}
        onMovieCardClick={onMovieCardClick}
      />
  );

  const movieCardLinks = main.find(`.small-movie-card`);

  movieCardLinks.forEach((movieCardLink) => {
    movieCardLink.simulate(`click`);
  });

  expect(onMovieCardClick.mock.calls.length).toBe(movieCardLinks.length);
});
