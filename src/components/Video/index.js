import styled from 'styled-components';
const mediaUrl = process.env.REACT_APP_MEDIA_URL;

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
      <video className="video" controls>
        <source src={`${mediaUrl}/media/${name}.mp4`} type="video/mp4" />
        <track src={`${mediaUrl}/media/${name}.vtt`} default kind="subtitles" srcLang="es"/>
        <track src={`${mediaUrl}/media/${name}_en.vtt`} kind="subtitles" srcLang="en"/>
      </video>
    </Container>
  );
};
