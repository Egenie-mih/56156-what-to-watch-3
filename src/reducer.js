import {extend} from './utils.js';
import films from './mocks/films.js';

const initialState = {
  filmsList: films,
  filteredFilms: films,
  showedFilms: films.slice(0, 8),
  filmsToShowCount: 8,
};

const ActionType = {
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  RESET_FILMS_COUNT: `RESET_FILMS_COUNT`,
};

const ActionCreator = {
  setNewFilmsList: (genre) => ({
    type: ActionType.GET_FILTERED_FILMS,
    payload: genre
  }),

  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: 8,
  }),

  resetFilmsCount: () => ({
    type: ActionType.RESET_FILMS_COUNT,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILTERED_FILMS:
      const {filmsList} = state;

      if (action.payload === `All genres`) {
        return extend(state, {
          filteredFilms: filmsList
        });
      }

      return extend(state, {
        filteredFilms: filmsList.filter((film) => film.genre === action.payload),
      });

    case ActionType.SHOW_MORE_FILMS:
      const filmsToShowCount = state.filmsToShowCount + action.payload;
      return extend(state, {
        filmsToShowCount,
        showedFilms: state.filteredFilms.slice(0, filmsToShowCount),
      });

    case ActionType.RESET_FILMS_COUNT:
      return extend(state, {
        filmsToShowCount: 0
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
