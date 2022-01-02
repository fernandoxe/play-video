import { useRef, useState } from 'react';
// import { io } from 'socket.io-client';
import styled from 'styled-components';
import { secondsToTime, socketConnect } from '../../services';
import { Controls } from './Controls';
import Loader from './Controls/Loader';
import { Users } from './Users';
const mediaUrl = process.env.REACT_APP_MEDIA_URL;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  .video {
    position: relative;
    display: flex;
    /* max-width: 100%; */
    max-height: 100%;

    video {
      width: 100%;
      outline: 0;
      ::cue {
        background: transparent;
        font-family: 'Inria Sans', sans-serif;
        font-size: 3.7vw;
        /* line-height: 2rem; */
        text-shadow:
          1px 1px 3px #000,
          -1px -1px 0 #000,
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000;
      }
    }

    .controls-click {
      width: 100%;
      height: 100%;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;

      &--cursor-hidden {
        cursor: none;
      }
    }

    .controls-container {
      width: 100%;
      height: 100%;
      &--hidden {
        display: none;
      }
    }

    .loader-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .users-container {
      position: absolute;
      top: 0;
      right: 0;
      max-height: 50%;
      overflow: auto;
      margin-top: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`;

export const Video = (props) => {
  const { name } = props;
  const fullscreenContainerRef = useRef(null);
  const videoRef = useRef(null);
  const socket = useRef(null);
  const controlsTimeout = useRef(null);
  const manualPingInterval = useRef(null);
  const [showControls, setShowControls] = useState(true);
  const [users, setUsers] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [loadedMetadata, setLoadedMetadata] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [connected, setConnected] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const touchEventRef = useRef(false);

  const pause = () => {
    videoRef.current.pause();
    setPlaying(false);
  };

  const play = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  const changeTime = (time) => {
    // console.log('time changed to', time);
    setCurrentTime(time);
    videoRef.current.currentTime = time;
  };

  const handlePlay = (value) => {
    if(value) {
      console.log('play at', videoRef.current.currentTime);
      socketEmit('play', { room: props.name, user: props.user, time: videoRef.current.currentTime });
      play();
    } else {
      console.log('pause at', videoRef.current.currentTime, videoRef.current.paused);
      socketEmit('pause', { room: props.name, user: props.user, time: videoRef.current.currentTime });
      pause();
    }
  };

  const handleProgressChange = (value) => {
    // console.log('change react from Video (dragging)', value);
    // setCurrentTime(value);
    handleControlsClick(); // to activate de timer to show/hide controls
    changeTime(value);
  };
  
  const handleProgressChangeUp = (value) => {
    console.log('change range time to', secondsToTime(value));
    socketEmit('changeTime', { room: props.name, user: props.user, time: videoRef.current.currentTime });
    changeTime(value);
  };

  const handleControlsClick = () => {
    setShowControls(true);

    if(controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
      // console.log('timeout removed', controlsTimeout.current);
    }

    controlsTimeout.current = setTimeout(() => {
      !videoRef.current.paused && setShowControls(false);
      // console.log('timeout finished', controlsTimeout.current);
    }, 2000);

    // console.log('controls click');
  };

  const handleMouseMove = () => {
    if(touchEventRef.current) return;
    // console.log('mouse moved');
    handleControlsClick();
  };

  const handleSubtitlesClick = (value) => {
    if(value) {
      for (let i = 0; i < videoRef.current.textTracks.length; i++) {
        const track = videoRef.current.textTracks[i];
        track.mode = 'showing';
      }
    } else { 
      for (let i = 0; i < videoRef.current.textTracks.length; i++) {
        const track = videoRef.current.textTracks[i];
        track.mode = 'hidden';
      }
    }
  };

  const handleFullscreenClick = (fullscreen) => {
    const fullscreenContainer = fullscreenContainerRef.current;
    if(fullscreen) {
      if(fullscreenContainer.requestFullscreen) {
        fullscreenContainer.requestFullscreen({ navigationUI: 'hide' });
      } else if(this.container.webkitRequestFullscreen) {
        fullscreenContainer.webkitRequestFullscreen({ navigationUI: 'hide' });
      } else if(this.container.mozRequestFullScreen){
        fullscreenContainer.mozRequestFullScreen({ navigationUI: 'hide' });
      }
      window.screen.orientation.lock('landscape').catch(e => console.log(e));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      window.screen.orientation.lock('portrait-primary').catch(e => console.log(e));
    }
  };

  const handleConnectClick = (connecting) => {
    if(connecting) {
      console.log('connecting...');

      socket.current = socketConnect();
      // socket.current = io('http://localhost:5000/');

      socket.current.on('connect', () => {
        console.log(`Connected as ${props.user}`);
        socketEmit('join', { room: props.name, user: props.user });
        setConnected(true);
        manualPingInterval.current = setInterval(() => {
          console.log(`Sending ping at ${videoRef.current.currentTime}`);
          socketEmit('ping', { room: props.name, user: props.user, time: videoRef.current.currentTime });
        }, 1000 * 60 * 20);
      });
      socket.current.on('disconnect', () => {
        console.log(`Disconnected from room ${props.name}`);
        clearInterval(manualPingInterval.current);
        setConnected(false);
      });
      socket.current.on('ping', (message) => {
        console.log(`${message.user} sent ping at ${secondsToTime(message.time)}`);
      });
      socket.current.on('joined', message => {
        console.log(`${message.user} joined to room ${message.room}`);
        setUsers(message.users);
      });
      socket.current.on('left', message => {
        console.log(`${message.user} left the room ${message.room}`);
        setUsers(message.users);
      });


      socket.current.on('play', message => {
        console.log(`${message.user} touched play at ${secondsToTime(message.time)}`);
        play();
        handleControlsClick();
      });
      socket.current.on('pause', message => {
        console.log(`${message.user} touched pause at ${secondsToTime(message.time)}`);
        pause();
        handleControlsClick();
      });
      socket.current.on('changeTime', message => {
        console.log(`${message.user} changed time to ${secondsToTime(message.time)}`);
        changeTime(message.time);
        handleControlsClick();
      });
      
      socket.current.on('startWaiting', message => {
        console.log(`${message.user} started to wait at ${secondsToTime(message.time)}, your time: ${secondsToTime(videoRef.current.currentTime)}`);
      });
      socket.current.on('stopWaiting', message => {
        console.log(`${message.user} stopped waiting at ${secondsToTime(message.time)}, your time: ${secondsToTime(videoRef.current.currentTime)}`);
      });

    } else {
      socket.current.disconnect();
      setConnected(false);
    }
  };

  const handleLoadedMetadata = () => {
    setLoadedMetadata(true);
  };

  const handleTimeUpdate = () => {
    // console.log('time update', videoRef.current.currentTime);
    setCurrentTime(videoRef.current.currentTime);
    // Math.floor(videoRef.current.currentTime) % 10 === 0 && console.log('ping', videoRef.current.currentTime);
  };

  const socketEmit = (message, data) => {
    socket.current?.connected && socket.current.emit(message, data);
  }

  const handleWaiting = () => {
    socketEmit('startWaiting', { room: props.name, user: props.user, time: videoRef.current.currentTime });
    setWaiting(true);
  };

  const handlePlaying = () => {
    if(waiting) {
      socketEmit('stopWaiting', { room: props.name, user: props.user, time: videoRef.current.currentTime });
      setWaiting(false);
    }
  };

  const handleTouchStart = (event) => {
    touchEventRef.current = true;
    // console.log('touch start', touchEventRef.current);
  };

  return (
    <Container>
      <div
        className="video"
        ref={fullscreenContainerRef}
      >
        {(!loadedMetadata || waiting) &&
          <div className="loader-container">
            <Loader />
          </div>
        }
        {loadedMetadata &&
          <div
            className={`controls-click ${showControls ? '' : 'controls-click--cursor-hidden'}`}
            onClick={handleControlsClick}
            onTouchStart={handleTouchStart}
            onMouseMove={handleMouseMove}
          >
            <div
              className={`controls-container ${showControls ? '' : 'controls-container--hidden'}`}
            >
              { connected &&
                <div className="users-container">
                  <Users users={users} />
                </div>
              }
              <Controls
                currentTime={currentTime}
                duration={videoRef.current.duration}
                onProgressChange={handleProgressChange}
                onProgressChangeUp={handleProgressChangeUp}
                onPlay={handlePlay}
                playing={playing}
                onSubtitlesClick={handleSubtitlesClick}
                onFullscreenClick={handleFullscreenClick}
                onConnectClick={handleConnectClick}
                connected={connected}
              />
            </div>
          </div>
        }
        <video
          ref={videoRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onWaiting={handleWaiting}
          onPlaying={handlePlaying}
          crossOrigin="anonymous"
        >
          <source src={`${mediaUrl}/media/${name}.mp4`} type="video/mp4" />
          <track src={`${mediaUrl}/media/${name}.vtt`} default kind="subtitles" srcLang="es"/>
          <track src={`${mediaUrl}/media/${name}_en.vtt`} kind="subtitles" srcLang="en"/>
        </video>
      </div>
    </Container>
  );
};
