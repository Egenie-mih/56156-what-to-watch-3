import {reducer, ActionType} from "./reducer.js";
import films from "./mocks/films";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentGenre: `All genres`,
    filmsList: films,
    filteredFilms: films
  });
});

it(`Reducer should change film list`, () => {
  expect(reducer({
    currentGenre: `Kids & Family`,
    filmsList: films,
    filteredFilms: films
  }, {
    type: ActionType.GET_FILTERED_FILMS,
  })).toEqual({
    currentGenre: `Kids & Family`,
    filmsList: films,
    filteredFilms: [{
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
    }]
  });
});

it(`Reducer should change genre`, () => {
  expect(reducer({
    currentGenre: `Kids & Family`,
    filmsList: films,
    filteredFilms: films
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Dramas`,
  })).toEqual({
    currentGenre: `Dramas`,
    filmsList: films,
    filteredFilms: films
  });
});
