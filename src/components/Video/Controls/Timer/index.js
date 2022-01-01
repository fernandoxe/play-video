import styled from 'styled-components';
import { secondsToTime } from '../../../../services';

const Container = styled.div`
  font-size: 0.875rem;
`;

export const Timer = props => {
  const currentTime = secondsToTime(props.currentTime);
  const duration = secondsToTime(props.duration);

  return (
    <Container>
      {currentTime} / {duration}
    </Container>
  );
};
