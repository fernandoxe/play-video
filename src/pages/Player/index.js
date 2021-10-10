import { useParams } from 'react-router';
import styled from 'styled-components';
import { Video } from '../../components/Video';
import { getMovie, getEpisode } from '../../services';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Player = (props) => {
  const { movie, series, season, episode } = useParams();
  const movieData = movie && getMovie(movie);
  const episodeData = series && getEpisode(series, season, episode);

  return (
    <Container>
      {movie && movieData &&
        <Video name={movieData.name} />
      }
      {series && episodeData &&
        <Video name={episodeData.name} />
      }
    </Container>
  );
};