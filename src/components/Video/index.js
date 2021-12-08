import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { socketConnect } from '../../services';
import { Controls } from './Controls';
const mediaUrl = process.env.REACT_APP_MEDIA_URL;

const Container = styled.div`
  width: 100%;
  height: 100%;

  .video {
    display: flex;
    /* max-width: 100%; */
    max-height: 100%;

    video {
      width: 100%;
      outline: 0;

      ::cue {
        background: transparent;
        text-shadow:
          1px 1px 3px #000,
          -1px -1px 0 #000,
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000;
      }
    }   
  }
`;

export const Video = (props) => {
  const { name } = props;
  const videoRef = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = socketConnect();

    socket.current.on('paused', (time) => {
      console.log('paused at', time);
      pause();
    });

    socket.current.on('played', (time) => {
      console.log('played at', time);
      play();
    });

    socket.current.on('seek', (time) => {
      console.log('seek at', time);
      changeTime(time);
    });
  }, []);

  const pause = () => {
    videoRef.current.pause();
  };

  const play = () => {
    videoRef.current.play();
  };

  const changeTime = (time) => {
    videoRef.current.currentTime = time;
  };

  const handlePlay = () => {
    console.log('play at', videoRef.current.currentTime);
    socket.current?.emit('play', videoRef.current.currentTime);
  };

  const handlePause = () => {
    console.log('pause at', videoRef.current.currentTime, videoRef.current.paused);
    socket.current?.emit('pause', videoRef.current.currentTime);
  };
  
  const handleSeeked = () => {
    console.log('seeked', videoRef.current.currentTime);
    socket.current?.emit('seeked', videoRef.current.currentTime);
  };

  const handleProgressInput = (value) => {

  };

  const handleProgressChange = (value) => {

  };

  const handlePlay = (value) => {

  };

  const handleSubtitlesClick = (value) => {

  };

  return (
    <Container>
      <div className="video">
        <Controls
          currentTime={videoRef.current.currentTime}
          duration={videoRef.current.duration}
          onProgressInput={handleProgressInput}
          onProgressChange={handleProgressChange}
          onPlay={handlePlay}
          onSubtitlesClick={handleSubtitlesClick}
        />
        <video
          controls
          ref={videoRef}
          onPlay={handlePlay}
          onPause={handlePause}
          onSeeked={handleSeeked}
        >
          <source src={`${mediaUrl}/media/${name}.mp4`} type="video/mp4" />
          <track src={`${mediaUrl}/media/${name}.vtt`} default kind="subtitles" srcLang="es"/>
          <track src={`${mediaUrl}/media/${name}_en.vtt`} kind="subtitles" srcLang="en"/>
        </video>
      </div>
    </Container>
  );
};
