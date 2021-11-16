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
  const [play, setPlay] = useState(false);

  const handleClick = () => {
    const newPlay = !play;
    setPlay(newPlay);
    props.onClick?.(newPlay);
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
