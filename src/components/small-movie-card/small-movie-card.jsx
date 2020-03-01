import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = ({film, onMovieMouseOver, onMovieMouseOut, onMovieTitleClick}) => {
  const {title, img} = film;

  return (
    <article
      onMouseOver={() => {
        onMovieMouseOver(film);
      }}
      onMouseOut={() => {
        onMovieMouseOut();
      }}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img src={img} alt="" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onMovieTitleClick} className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
  onMovieMouseOver: PropTypes.func.isRequired,
  onMovieMouseOut: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
