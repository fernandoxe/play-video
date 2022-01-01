import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 16px;
  display: flex;
  align-items: center;

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
      background-color: #7C4DFF;
      cursor: pointer;
    }

    ::-moz-range-thumb {
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #7C4DFF;
      cursor: pointer;
    }
  }

  .range, .rail, .progress {
    position: absolute;
    height: 4px;
  }

  .rail {
    width: 100%;
    background-color: #dddddd;
  }

  .progress {
    background-color: #9C27B0;
  }
`;

export const Progress = props => {
  const rangeRef = useRef(null);
  // const [progress, setProgress] = useState(props.value);

  const handleChange = (event) => {
    // setProgress(event.target.value);
    props.onChange?.(event.target.value);
    // console.log('change react (release?)', event.target.value);
  };

  // const handleInput = (event) => {
  //   setProgress(event.target.value);
  //   // props.onChangeUp?.(event.target.value);
  //   console.log('input react (dragging)', event.target.value);
  // };
  
  useEffect(() => {
    // setProgress(props.value);

    const handleChangeUp = (event) => {
      // setProgress(event.target.value);
      props.onChangeUp?.(event.target.value);
      console.log('change (release)', event.target.value);
    };

    // console.log('add listeners');
    const inputRange = rangeRef.current; // copy current ref to use the same in remove listeners
    inputRange.addEventListener('change', handleChangeUp);
    // inputRange.addEventListener('input', handleInput);
    return () => {
      // console.log('remove listeners');
      inputRange.removeEventListener('change', handleChangeUp);
      // inputRange.removeEventListener('input', handleInput);
    };
  }, [props]);
  
  return (
    <Container>
      <div className="rail"></div>
      <div className="progress" style={{width: `${props.value * 100 / props.max}%`}}></div>
      <input
        type="range"
        className="range"
        ref={rangeRef}
        value={props.value}
        onChange={handleChange}
        min={props.min}
        max={props.max}
      />
    </Container>
  );
};
