import { useParams } from 'react-router';
import { series as seriesData } from '../../data';
import { SeasonList } from '../../components/SeasonList';
import styled from 'styled-components';

const Container = styled.div`
  .season {
  }
`;

export const Season = (props) => {
  const { series } = useParams();
  const episodes = seriesData.filter(s => s.name === series);
  return (
    <Container>
      <SeasonList episodes={episodes} />
    </Container>
  );
}