import React from 'react';
import PropTypes from 'prop-types';
import genres from '../../mocks/genres';
import {ActionCreator} from '../../reducer';
import {connect} from 'react-redux';

const GenreList = ({currentGenre, onGenreButtonClick}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li key={genre} className={`catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                onGenreButtonClick(genre);
              }}
            >
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

GenreList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  onGenreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreButtonClick: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.setNewFilmsList());
    dispatch(ActionCreator.resetFilmsCount());
    dispatch(ActionCreator.showMoreFilms());
  }
});

export {GenreList};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
