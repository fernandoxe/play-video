import styled from 'styled-components';

const Container = styled.div`
  .video {
    width: 100%;
  }
`;

export const Video = (props) => {
  const { url } = props;
  return (
    <Container>
      <h1>Video {url}</h1>
      <video className="video">
        <source src={`/media/${url}.mp4`} type="video/mp4" />
        <track src={`/media/${url}_es.vtt`} kind="subtitles" srcLang="es"/>
        <track src={`/media/${url}_en.vtt`} kind="subtitles" srcLang="en"/>
      </video>
    </Container>
  );
};