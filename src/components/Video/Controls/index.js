import styled from 'styled-components';

const Container = styled.div`
`;

export const Controls = props => {
  // const {} = props;

  const handleChange = (event) => {
    console.log('change', event.target.value);
  };

  const handleInput = (event) => {
    console.log('input', event.target.value);
  };

  return (
    <Container>
      <input
        type="range"
        onChange={handleChange}
        onInput={handleInput}
      />
    </Container>
  );
};
