import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .button {
    border: none;
    border-radius: 50%;
    padding: 0;
    background-color: #7C4DFF;
    opacity: 0.4;
    display: block;
    i {
      font-size: 7rem;
      color: #fff;
      display: block;
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

  useEffect(() => {
    setPlay(props.playing);
  }, [props]);

  return (
    <Container>
      <button
        className="button"
        onClick={handleClick}
      >
        <i className="material-icons">
          {play ? 'pause' : 'play_arrow'}
        </i>
      </button>
    </Container>
  );
};
