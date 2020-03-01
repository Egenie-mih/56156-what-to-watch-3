import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`Handler onMovieMouseOver get correct data`, () => {
  const onMovieMouseOver = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onMovieMouseOver={onMovieMouseOver}
        onMovieMouseOut={() => {}}
        onMovieTitleClick={() => {}}
      />
  );

  const card = smallMovieCard.find(`article`);
  card.simulate(`mouseOver`);

  expect(onMovieMouseOver.mock.calls.length).toBe(1);
  expect(onMovieMouseOver.mock.calls[0][0]).toMatchObject(film);
});
