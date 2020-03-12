import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = ({film, onMovieCardMouseOver, onMovieCardMouseOut, onMovieCardClick}) => {
  const {title, img} = film;

  return (
    <article
      onMouseOver={() => {
        onMovieCardMouseOver(film);
      }}
      onMouseOut={() => {
        onMovieCardMouseOut();
      }}
      onClick={() => {
        onMovieCardClick(film);
      }}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img src={img} alt="" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={(e) => {
            e.preventDefault();
            onMovieCardClick(film);
          }}
          className="small-movie-card__link"
          href="movie-page.html"
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
  onMovieCardMouseOver: PropTypes.func.isRequired,
  onMovieCardMouseOut: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
