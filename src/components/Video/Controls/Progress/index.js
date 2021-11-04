import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  .range {
    width: 100%;
    appearance: none;
    background-color: transparent;
    margin: 0;
    outline: 0;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: gray;
      cursor: pointer;
    }

    ::-moz-range-thumb {
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: gray;
      cursor: pointer;
    }
  }

  .range, .rail, .progress {
    position: absolute;
    height: 4px;
  }

  .rail {
    width: 100%;
    background-color: lightgray;
  }

  .progress {
    background-color: purple;
  }
`;

export const Progress = props => {
  const rangeRef = useRef(null)
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    props.onChange?.(event.target.value);
  };

  const handleInput = (event) => {
    setProgress(event.target.value);
    props.onInput?.(event.target.value);
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
      <div className="rail"></div>
      <div className="progress" style={{width: `${progress * 100 / props.max}%`}}></div>
      <input
        type="range"
        className="range"
        ref={rangeRef}
        value={progress}
        min={props.min}
        max={props.max}
      />
    </Container>
  );
};
