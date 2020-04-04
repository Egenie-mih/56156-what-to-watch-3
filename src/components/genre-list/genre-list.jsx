import React from 'react';
import PropTypes from 'prop-types';
import genres from '../../mocks/genres';
import {ActionCreator} from '../../reducer';
import {connect} from 'react-redux';

const GenreList = ({activeItem, onItemClick, onGenreButtonClick}) => {

  const activeGenre = activeItem || `All genres`;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li key={genre} className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                onItemClick(genre);
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
  activeItem: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onGenreButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onGenreButtonClick: (genre) => {
    dispatch(ActionCreator.setNewFilmsList(genre));
    dispatch(ActionCreator.resetFilmsCount());
    dispatch(ActionCreator.showMoreFilms());
  }
});

export {GenreList};

export default connect(null, mapDispatchToProps)(GenreList);
