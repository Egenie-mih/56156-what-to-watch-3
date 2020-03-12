import React from 'react';
import PropTypes from 'prop-types';

const MovieRatingLabel = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

const getMovieRatingLabel = (rating) => {
  let ratingLabel = ``;
  switch (true) {
    case (rating >= 0 && rating < 3): ratingLabel = MovieRatingLabel.BAD; break;
    case (rating >= 3 && rating < 5): ratingLabel = MovieRatingLabel.NORMAL; break;
    case (rating >= 5 && rating < 8): ratingLabel = MovieRatingLabel.GOOD; break;
    case (rating >= 8 && rating < 10): ratingLabel = MovieRatingLabel.VERY_GOOD; break;
    case (rating === 10): ratingLabel = MovieRatingLabel.AWESOME; break;
  }
  return ratingLabel;
};

const MoviePage = ({film}) => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={film.poster} alt={film.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={film.img} alt={film.title} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{film.rating.toFixed(1)}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{getMovieRatingLabel(film.rating)}</span>
                <span className="movie-rating__count">{film.ratingCount} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{film.description}</p>
              <p className="movie-card__director"><strong>{film.director}</strong></p>
              <p className="movie-card__starring"><strong>{film.actors} and other</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MoviePage.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
};

export default MoviePage;
