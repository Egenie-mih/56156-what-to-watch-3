import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  render() {
    const {film, onMovieCardMouseOver, onMovieCardMouseOut, onMovieCardClick} = this.props;
    const {title, img, preview} = film;
    return (
      <article
        onMouseOver={() => {
          onMovieCardMouseOver(film);
          this.timeoutOnMouseOver = setTimeout(() => {
            this.setState({isPlaying: true});
          }, 1000);
        }}
        onMouseOut={() => {
          onMovieCardMouseOut();
          this.setState({isPlaying: false});
          clearTimeout(this.timeoutOnMouseOver);
        }}
        onClick={() => {
          onMovieCardClick(film);
        }}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            img={img}
            preview={preview}
            isPlaying={this.state.isPlaying}
          />
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
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  onMovieCardMouseOver: PropTypes.func.isRequired,
  onMovieCardMouseOut: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
