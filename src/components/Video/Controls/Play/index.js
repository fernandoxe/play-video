import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  
`;

export const Play = props => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    const newActive = !active;
    setActive(newActive);
    props.onClick?.(newActive);
  };

  return (
    <Container>
      <button
        onClick={handleClick}
      >
      </button>
    </Container>
  );
};
