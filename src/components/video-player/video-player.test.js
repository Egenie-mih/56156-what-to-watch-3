import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const film = {
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`VideoPlayer should render correctly`, () => {
  const {img, preview} = film;
  const tree = renderer
    .create(<VideoPlayer
      img={img}
      preview={preview}
      isPlaying = {true}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
  .toJSON();

  expect(tree).toMatchSnapshot();
});
