import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .button {
    border: none;
    border-radius: 50%;
    width: 13vw;
    height: 13vw;
    background-color: fuchsia;
    opacity: 0.5;
    i {
      font-size: 7rem;
      color: #fff;
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
