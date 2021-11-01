import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .range {
    width: 100%;
    appearance: none;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      background-color: gray;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      cursor: pointer;
    }

    ::-moz-range-thumb {
      background-color: blue;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      cursor: pointer;
    }

    ::-webkit-slider-runnable-track {
      background-color: lightblue;
      height: 8px;
    }

    ::-moz-range-track {
      background-color: lightblue;
      height: 8px;
    }
  }
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
        className="range"
        ref={rangeRef}
      />
    </Container>
  );
};
