import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

const film = {
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Video preview should have two state with different is Playing props`, () => {
  const {img, preview} = film;

  const videoPlayer = (isPlaying) => {
    return mount(<VideoPlayer
      img={img}
      preview={preview}
      isPlaying={isPlaying}
    />
    );
  };

  expect(videoPlayer(true).state(`isPlaying`)).toBe(true);
  expect(videoPlayer(false).state(`isPlaying`)).toBe(false);
});

