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
  const [subtitles, setSubtitles] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

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

  const handleSubtitlesClick = (value) => {
    console.log('subtitles');
    setSubtitles(value);
    props.onSubtitleClick(value);
  };

  const handleFullscreenClick = (value) => {
    console.log('fullscreen');
    setFullscreen(value);
    props.onFullscreenClick?.(value);
  };

  const handleConnectClick = () => {
    console.log('connect');
    props.onConnectClick?.();
  };

  return (
    <Container>
      <Play onClick={handlePlay} />
      <Timer currentTime={currentTime} duration={duration} />
      <button className="connect" onClick={handleConnectClick}>
        <i className="material-icons">people</i>
      </button>
      <button className="subtitles" onClick={handleSubtitlesClick}>
        <i className="material-icons">subtitles</i>
      </button>
      <button className="fullscreen" onClick={handleFullscreenClick}>
        <i className="material-icons">fullscreen</i>
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
