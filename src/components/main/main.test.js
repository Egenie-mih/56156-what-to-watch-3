import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      promoMovie={promoMovie}
      allMovies={allTitles}
      onMovieTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
