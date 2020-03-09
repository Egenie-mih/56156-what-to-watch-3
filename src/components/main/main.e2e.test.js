import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014
};

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Aviator`,
    img: `img/aviator.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Revenant`,
    img: `img/revenant.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Johnny English`,
    img: `img/johnny-english.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Snatch`,
    img: `img/snatch.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Mindhunter`,
    img: `img/mindhunter.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `War of the worlds`,
    img: `img/war-of-the-worlds.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
