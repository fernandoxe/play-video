import styled from 'styled-components';

const Container = styled.div`
  
`;

const millisecondsToTime = (milliseconds) => {
  return new Date(milliseconds).toISOString().slice(11, -5);
};

export const Timer = props => {

  const currentTime = millisecondsToTime(props.currentTime);
  const duration = millisecondsToTime(props.duration);

  return (
    <Container>
      <div>{currentTime}</div>
      /
      <div>{duration}</div>
    </Container>
  );
};
