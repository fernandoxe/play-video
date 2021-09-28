import { useParams } from 'react-router';
import { series as seriesData } from '../../data';
import { SeasonList } from '../../components/SeasonList';
import styled from 'styled-components';

const Container = styled.div`
  .season {
  }
`;

export const Series = (props) => {
  const { series } = useParams();
  const seasons = seriesData.filter(s => s.name === series);
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