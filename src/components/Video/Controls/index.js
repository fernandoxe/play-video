import { useRef, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Progress } from './Progress';
import { Play } from './Play';
import { Timer } from './Timer';

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

  const handlePlay = value => {
    console.log('play', value);
  };

  return (
    <Container>
      <Play onClick={handlePlay} />
      <Timer currentTime={0} duration={1200} />
      <Progress
        min={0}
        max={1200}
        onInput={handleInput}
        onChange={handleChange}
      />
    </Container>
  );
};
