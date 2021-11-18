import { useRef, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Progress } from './Progress';
import { Play } from './Play';
import { Timer } from './Timer';

const Container = styled.div`
  
`;

export const Controls = props => {
  const {currentTime, duration} = props;

  const [play, setPlay] = useState(false);

  const handleInput = value => {
    console.log('input', value);
    props.onProgressInput?.(value);
  };

  const handleChange = value => {
    console.log('change', value);
    props.onProgressChange?.(value);
  };

  const handlePlay = value => {
    console.log('play', value);
    setPlay(value);
    props.onPlay?.(value);
  };

  const handleSubtitlesClick = () => {
    console.log('subtitles');
  };

  const handleFullscreenClick = () => {
    console.log('fullscreen');
  };

  const handleConnectClick = () => {
    console.log('connect');
  };

  return (
    <Container>
      <Play onClick={handlePlay} />
      <Timer currentTime={currentTime} duration={duration} />
      <button className="connect" onClick={handleConnectClick}>

      </button>
      <button className="subtitles" onClick={handleSubtitlesClick}>

      </button>
      <button className="fullscreen" onClick={handleFullscreenClick}>

      </button>
      <Progress
        min={0}
        max={duration}
        onInput={handleInput}
        onChange={handleChange}
      />
    </Container>
  );
};
