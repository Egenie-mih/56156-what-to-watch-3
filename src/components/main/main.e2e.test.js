import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014
};

const allTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Avatar`
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title be clicked`, () => {
  const onMovieTitleClick = jest.fn();

  const main = shallow(
      <Main
        promoMovie={promoMovie}
        allMovies={allTitles}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const movieTitleLinks = main.find(`.small-movie-card__link`);

  movieTitleLinks.forEach((movieTitleLink) => {
    movieTitleLink.simulate(`click`);
  });

  expect(onMovieTitleClick.mock.calls.length).toBe(allTitles.length);
});
