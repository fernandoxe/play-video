import styled from 'styled-components';

const Container = styled.div`
  .seasons {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export const SeriesList = (props) => {
  const { series } = props;
  return (
    <Container>
      <ul className="seasons">
        {series.map(season => <li key={season.season} className="season">{season.name} season {season.season}</li>)}
      </ul>
    </Container>
  );
};
