import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  .season {
  }
`;

export const SeasonList = (props) => {
  const {season = []} = props;
  return (
    <Container>
      <ul className="season">
        {season.episodes?.map((episode, index) =>
          <li key={episode.name} className="season__episode">
            <Link to={`/series/${season.name}/${season.season}/${index + 1}`}>{episode.description}</Link>
          </li>
        )}
      </ul>
    </Container>
  );
}