import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  .movies {
  }
`;

export const MoviesList = (props) => {
  const { movies = [] } = props;
  return (
    <Container>
      <ul className="movies">
        {movies.map(movie =>
          <li key={movie.name}>
            <Link to={`/movie/${movie.name}`}>{movie.description}</Link>
          </li>
        )}
      </ul>
    </Container>
  );
};
