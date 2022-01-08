import { useState } from 'react';
import styled from 'styled-components';
import { Progress } from './Progress';
import { Play } from './Play';
import { Timer } from './Timer';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .play {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bar {
    padding: 0 8px;
    background-color: rgba(124, 77, 255, 0.4);
  }

  .controls {
    display: flex;
    align-items: center;
  }

  .timer {
    flex-grow: 1;
  }

  .progress-container {
    margin-bottom: 4px;
  }

  button {
    border: none;
    background-color: transparent;
    color: #7C4DFF;
    padding: 0;
    margin: 0 8px;
    display: flex;
    cursor: pointer;
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }

  .connect {
    color: #dddddd;
    &--connecting {
      color: #9C27B0;
    }
    &--connected {
      color: #7C4DFF;
    }
  }

  .fullscreen {
    color: #dddddd;
    &--active {
      color: #7C4DFF;
    }
  }

  .subtitles {
    color: #dddddd;
    &--active {
      color: #7C4DFF;
    }
  }
`;

export const Controls = props => {
  const [subtitles, setSubtitles] = useState(true);
  const [connect, setConnect] = useState(false);

  const handleChangeUp = value => {
    props.onProgressChangeUp?.(value);
  };

  const handleChange = value => {
    props.onProgressChange?.(value);
  };

  const handlePlay = value => {
    props.onPlay?.(value);
  };

  const handleSubtitlesClick = () => {
    const newSubtitles = !subtitles;
    setSubtitles(newSubtitles);
    props.onSubtitlesClick?.(newSubtitles);
  };

  const handleFullscreenClick = () => {
    props.onFullscreenClick?.();
  };

  const handleConnectClick = () => {
    const newConnect = !connect;
    setConnect(newConnect);
    props.onConnectClick?.(newConnect);
  };

  return (
    <Container>
      <div className="play">
        <Play
          playing={props.playing}
          onClick={handlePlay}
        />
      </div>
      <div className="bar">
        <div className="controls">
          <div className="timer">
            <Timer currentTime={props.currentTime} duration={props.duration} />
          </div>
          <button
            className={`connect ${connect ? 'connect--connecting': ''} ${props.connected ? 'connect--connected' : ''}`}
            onClick={handleConnectClick}
          >
            <i className="material-icons">people</i>
          </button>
          <button className={`subtitles ${subtitles ? 'subtitles--active' : ''}`} onClick={handleSubtitlesClick}>
            <i className="material-icons">subtitles</i>
          </button>
          <button className={`fullscreen ${props.fullscreen ? 'fullscreen--active' : ''}`} onClick={handleFullscreenClick}>
            <i className="material-icons">{props.fullscreen ? 'fullscreen_exit' : 'fullscreen'}</i>
          </button>
        </div>
        <div className="progress-container">
          <Progress
            min={0}
            max={props.duration}
            value={props.currentTime}
            onChange={handleChange}
            onChangeUp={handleChangeUp}
          />
        </div>
      </div>
    </Container>
  );
};
