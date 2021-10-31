import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

export const Controls = props => {
  // const {} = props;
  const rangeRef = useRef(null);

  const handleChange = (event) => {
    console.log('change', event.target.value);
  };

  const handleInput = (event) => {
    console.log('input', event.target.value);
  };

  useEffect(() => {
    console.log('add listeners');
    const inputRange = rangeRef.current; // copy current ref to use the same in remove listeners
    inputRange.addEventListener('change', handleChange);
    inputRange.addEventListener('input', handleInput);
    return () => {
      console.log('remove listeners');
      inputRange.removeEventListener('change', handleChange);
      inputRange.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <Container>
      <input
        type="range"
        ref={rangeRef}
      />
    </Container>
  );
};
