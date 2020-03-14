import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducer';
import {connect} from 'react-redux';

const ShowMoreButton = ({filteredFilms, filmsToShowCount, onShowMoreButtonClick}) => {

  return filteredFilms.length > filmsToShowCount ?
    <button
      className="catalog__button"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onShowMoreButtonClick();
      }}
    >
      Show more
    </button> : null;
};

ShowMoreButton.propTypes = {
  filteredFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  })).isRequired,
  filmsToShowCount: PropTypes.number,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
  filmsToShowCount: state.filmsToShowCount,
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick: () => {
    dispatch(ActionCreator.showMoreFilms());
  }
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
