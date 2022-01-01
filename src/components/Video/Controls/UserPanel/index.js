import { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0b0b10;
  padding: 13%;
  padding-top: 32px;
  padding-bottom: 32px;
  z-index: 2;

  .user-content {
    display: flex;
    flex-direction: column;
  }

  .user-input {
    font: inherit;
    border: none;
    padding: 4px 8px;
    margin-bottom: 16px;
    outline: 0;
    &::selection {
      background-color: #7C4DFF;
      color: #dddddd;
    }
  }

  .user-actions {
    display: flex;
    justify-content: center;
  }

  .user-submit {
    font: inherit;
    border: none;
    padding: 4px 8px;
    width: 100%;
    background-color: #7C4DFF;
    color: #dddddd;
    :disabled {
      color: #0b0b10;
      background: rgba(124, 77, 255, 0.4);
    }
  }
`;

export const UserPanel = props => {
  const [username, setUsername] = useState(window.localStorage.getItem('username') || '');

  const handleChange = (event) => {
    setUsername(event.target.value);
  }
  
  const handleFocus = (event) => {
    event.target.select();
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    window.localStorage.setItem('username', username);
    props.onSubmit(username);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="user-content">
          <input
            type="text"
            className="user-input"
            placeholder="nombre"
            value={username}
            onChange={handleChange}
            onFocus={handleFocus}
            autoFocus
          />
          <div className='user-actions'>
            <button className="user-submit" type="submit" value="Aceptar" disabled={!username.trim()}>Aceptar</button>
          </div>
        </div>
      </form>
    </Container>
  );
};