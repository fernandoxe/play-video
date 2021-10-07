import { useParams } from 'react-router';
import { SeasonList } from '../../components/SeasonList';
import styled from 'styled-components';
import { getSeasons } from '../../services';

const Container = styled.div`
  .season {
  }
`;

export const Series = (props) => {
  const { series } = useParams();
  const seasons = getSeasons(series);
  return (
    <Container>
      <ul>
        {seasons.map(season =>
          <li key={season.season}>
            <SeasonList season={season} />
          </li>
        )}  
      </ul>
    </Container>
  );
}