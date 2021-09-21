import styled from 'styled-components';

const Container = styled.div`
  .season {
    list-style-type: none;
    margin: 0;
    padding: 0;
    &__episode {

    }
  }
`;

export const SeasonList = (props) => {
  const {episodes = []} = props;
  return (
    <Container>
      <ul className="season">
        {episodes.map(episode => <li className="season__episode">{episode.name}</li>)}
      </ul>
    </Container>
  );
}