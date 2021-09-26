import styled from 'styled-components';

const Container = styled.div`
  .movies {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export const MoviesList = (props) => {
  const { movies = [] } = props;
  return (
    <Container>
      <ul className="movies">
        {movies.map(movie => <li key={movie.name}>{movie.description}</li>)}
      </ul>
    </Container>
  );
};
