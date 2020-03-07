import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

const film = {
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
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

