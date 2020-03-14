import {extend} from './utils.js';
import films from './mocks/films.js';

const initialState = {
  currentGenre: `All genres`,
  filmsList: films,
  filteredFilms: films,
  showedFilms: films.slice(0, 8),
  filmsToShowCount: 8,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  RESET_FILMS_COUNT: `RESET_FILMS_COUNT`,
};

const ActionCreator = {
  changeGenre: (chosenGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: chosenGenre,
  }),

  setNewFilmsList: () => ({
    type: ActionType.GET_FILTERED_FILMS
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
