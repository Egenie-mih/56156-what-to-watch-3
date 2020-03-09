import React from 'react';
import PropTypes from 'prop-types';

const TabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

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

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: TabName.OVERVIEW
    };
  }

  _handleTabClick(navItem) {
    this.setState({currentTab: navItem});
  }

  render() {
    const {currentTab} = this.state;
    const {film} = this.props;
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">

          <ul className="movie-nav__list">

            <li className={`movie-nav__item ${this.state.currentTab === TabName.OVERVIEW ? `movie-nav__item--active` : ``}`}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  this._handleTabClick(TabName.OVERVIEW);
                }}
              >
                {TabName.OVERVIEW}
              </a>
            </li>
            <li className={`movie-nav__item ${this.state.currentTab === TabName.DETAILS ? `movie-nav__item--active` : ``}`}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  this._handleTabClick(TabName.DETAILS);
                }}
              >
                {TabName.DETAILS}
              </a>
            </li>
            <li className={`movie-nav__item ${this.state.currentTab === TabName.REVIEWS ? `movie-nav__item--active` : ``}`}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  this._handleTabClick(TabName.REVIEWS);
                }}
              >
                {TabName.REVIEWS}
              </a>
            </li>
          </ul>
        </nav>

        {currentTab === TabName.OVERVIEW && (
          (<React.Fragment>
            <div className="movie-rating">
              <div className="movie-rating__score">{film.rating.toFixed(1)}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{getMovieRatingLabel(film.rating)}</span>
                <span className="movie-rating__count">{film.ratingCount} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{film.description}</p>
              <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
              <p className="movie-card__starring"><strong>Starring: {film.actors.slice(0, 4).join(`, `)} and other</strong></p>
            </div>
          </React.Fragment>)
        )}
        {currentTab === TabName.DETAILS && (
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{film.director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {film.actors.map((actor, index) => (
                    <React.Fragment key={actor + index}>
                      {actor} <br />
                    </React.Fragment>
                  ))}
                </span>
              </p>
            </div>
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{film.duration}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{film.genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{film.year}</span>
              </p>
            </div>
          </div>
        )}
        {currentTab === TabName.REVIEWS && (
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {film.reviews.map((review, index) => (
                <div className="review" key={index + review.author}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.text}</p>
                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date" dateTime={review.date}>
                        {review.date}
                      </time>
                    </footer>
                  </blockquote>
                  <div className="review__rating">{review.rating}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

Tabs.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })).isRequired,
  }).isRequired,
};

export default Tabs;
