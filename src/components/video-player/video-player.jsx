import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this.state = {
      isPlaying: this.props.isPlaying
    };
  }

  componentDidMount() {
    const {preview} = this.props;
    const video = this._videoRef.current;

    video.src = preview;
    video.muted = true;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.muted = false;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {img, preview} = this.props;
    return (
      <video
        muted
        ref={this._videoRef}
        width="280"
        height="175"
        src={preview}
        poster={img}
      />
    );
  }
}

VideoPlayer.propTypes = {
  img: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
