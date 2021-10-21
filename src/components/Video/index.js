import { useEffect } from 'react';
import styled from 'styled-components';
import { socketConnect } from '../../services';
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

  useEffect(() => {
    const socket = socketConnect();
  }, [])

  return (
    <Container>
      <div className="video">
        <video controls>
          <source src={`${mediaUrl}/media/${name}.mp4`} type="video/mp4" />
          <track src={`${mediaUrl}/media/${name}.vtt`} default kind="subtitles" srcLang="es"/>
          <track src={`${mediaUrl}/media/${name}_en.vtt`} kind="subtitles" srcLang="en"/>
        </video>
      </div>
    </Container>
  );
};
