import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  .seasons {
  }
`;

export const SeriesList = (props) => {
  const { series = [] } = props;
  return (
    <Container>
      <ul className="seasons">
        {series.map(season =>
          <li key={season.season}>
            <Link to={`/series/${season.name}`}>{season.name} season {season.season}</Link>
          </li>
        )}
      </ul>
    </Container>
  );
};
