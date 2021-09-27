import styled from 'styled-components';

const Container = styled.div`
  .season {
  }
`;

export const SeasonList = (props) => {
  const {episodes = []} = props;
  return (
    <Container>
      <ul className="season">
        {episodes.map(episode => <li key={episode.name} className="season__episode">{episode.description}</li>)}
      </ul>
    </Container>
  );
}