import { useParams } from 'react-router';
import styled from 'styled-components';
import { Video } from '../../components/Video';

const Container = styled.div`
`;

export const Player = (props) => {
  const { movie, series, season, episode } = useParams();
  console.log(series);

  return (
    <Container>
      {movie &&
        <Video url={`movie ${movie}`} />
      }
      {series &&
        <Video url={`series ${series} ${season} ${episode}`} />
      }
    </Container>
  );
};