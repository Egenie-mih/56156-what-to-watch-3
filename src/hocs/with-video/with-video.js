import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../components/video-player/video-player.jsx';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };
      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this.timeoutOnMouseOver);
    }

    handleMouseOver() {
      this.timeoutOnMouseOver = setTimeout(() => {
        this.setState({isPlaying: true});
      }, 1000);
    }

    handleMouseOut() {
      this.setState({isPlaying: false});
      clearTimeout(this.timeoutOnMouseOver);
    }

    render() {
      return (
        <Component
          {...this.props}
          handleMouseOver={this.handleMouseOver}
          handleMouseOut={this.handleMouseOut}
          renderPlayer={(img, preview) => {
            return (
              <VideoPlayer
                img = {img}
                preview = {preview}
                isPlaying = {this.state.isPlaying}
              />
            );
          }}
        />
      );
    }
  }

  WithVideo.propTypes = {
    film: PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
    }).isRequired,
    onMovieCardClick: PropTypes.func.isRequired,
  };

  return WithVideo;
};

export default withVideo;
