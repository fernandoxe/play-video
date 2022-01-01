import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 4px solid #7C4DFF;
  border-top: 4px solid transparent;
  animation: ${rotate} 0.7s linear infinite;
`;

const Loader = props => {
  return (
    <Circle />
  );
};

export default Loader;