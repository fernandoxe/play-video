import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .button {
    border: none;
    border-radius: 50%;
    i {
      color: fuchsia;
    }
  }
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
        className="button"
        onClick={handleClick}
      >
        <i className="material-icons">play_arrow</i>
      </button>
    </Container>
  );
};
