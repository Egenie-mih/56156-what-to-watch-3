import {extend} from './utils.js';
import films from './mocks/films.js';

const initialState = {
  currentGenre: `All genres`,
  filmsList: films,
  filteredFilms: films
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`,
};

const ActionCreator = {
  changeGenre: (chosenGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: chosenGenre,
  }),

  setNewFilmsList: () => ({
    type: ActionType.GET_FILTERED_FILMS
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });

    case ActionType.GET_FILTERED_FILMS:
      const {currentGenre, filmsList} = state;

      if (currentGenre === `All genres`) {
        return extend(state, {
          filteredFilms: filmsList
        });
      }

      return extend(state, {
        filteredFilms: filmsList.filter((film) => film.genre === currentGenre),
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
