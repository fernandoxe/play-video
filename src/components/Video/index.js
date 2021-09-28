import styled from 'styled-components';

const Container = styled.div`
`;

export const Video = (props) => {
  const { url } = props;
  return (
    <Container>
      <h1>Video {url}</h1>
    </Container>
  );
};