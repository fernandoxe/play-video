import styled from 'styled-components';

const Container = styled.div`
  .video {
    width: 100%;
  }
`;

export const Video = (props) => {
  const { name } = props;
  return (
    <Container>
      <h1>Video {name}</h1>
      <video className="video">
        <source src={`/media/${name}.mp4`} type="video/mp4" />
        <track src={`/media/${name}_es.vtt`} kind="subtitles" srcLang="es"/>
        <track src={`/media/${name}_en.vtt`} kind="subtitles" srcLang="en"/>
      </video>
    </Container>
  );
};