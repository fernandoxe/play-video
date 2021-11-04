import { useRef, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Progress } from './Progress';

const Container = styled.div`
  
`;

export const Controls = props => {
  // const {} = props;

  const handleInput = value => {
    console.log('input', value);
  };

  const handleChange = value => {
    console.log('change', value);
  };

  return (
    <Container>
      <Progress
        min={0}
        max={1200}
        onInput={handleInput}
        onChange={handleChange}
      />
    </Container>
  );
};
