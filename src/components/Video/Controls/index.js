import { useRef, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Progress } from './Progress';
import { Play } from './Play';
import { Timer } from './Timer';

const Container = styled.div`
  .connect {
    color: gray;
    &--connected {
      color: purple;
    }
  }

  .subtitles {
    &--active {
      
    }
  }
`;

export const Controls = props => {
  const {currentTime, duration} = props;

  const [play, setPlay] = useState(false);
  const [subtitles, setSubtitles] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [connect, setConnect] = useState(false);

  const handleInput = value => {
    props.onProgressInput?.(value);
  };

  const handleChange = value => {
    props.onProgressChange?.(value);
  };

  const handlePlay = value => {
    setPlay(value);
    props.onPlay?.(value);
  };

  const handleSubtitlesClick = (value) => {
    setSubtitles(value);
    props.onSubtitleClick(value);
  };

  const handleFullscreenClick = (value) => {
    setFullscreen(value);
    props.onFullscreenClick?.(value);
  };

  const handleConnectClick = (value) => {
    setConnect(value);
    props.onConnectClick?.(value);
  };

  return (
    <Container>
      <Play onClick={handlePlay} />
      <Timer currentTime={currentTime} duration={duration} />
      <button className={`connect ${connect ? '--connected': ''}`} onClick={handleConnectClick}>
        <i className="material-icons">people</i>
      </button>
      <button className={`subtitles ${subtitles ? '--active' : ''}`} onClick={handleSubtitlesClick}>
        <i className="material-icons">subtitles</i>
      </button>
      <button className="fullscreen" onClick={handleFullscreenClick}>
        {fullscreen ?
          <i className="material-icons">fullscreen</i>
          :
          <i className="material-icons">fullscreen_exit</i>
        }
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
