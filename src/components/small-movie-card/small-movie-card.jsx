import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {film, handleMouseOver, handleMouseOut, onMovieCardClick, renderPlayer} = props;
  const {title, img, preview} = film;

  return (
    <article
      onMouseOver={() => {
        handleMouseOver(film);
      }}
      onMouseOut={handleMouseOut}
      onClick={() => {
        onMovieCardClick(film);
      }}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        {renderPlayer(img, preview)}
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
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default SmallMovieCard;
