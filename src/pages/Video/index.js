import { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Video as Vid } from '../../components/Video';
import { UserPanel } from '../../components/Video/Controls/UserPanel';

const Container = styled.div`

`;

export const Video = (props) => {
  const { video } = useParams();
  const [user, setUser] = useState(window.localStorage.getItem('username'), '');

  const handleSubmit = (username) => {
    setUser(username);
  };

  return (
    <Container>
      { !user && <UserPanel onSubmit={handleSubmit} /> }
      { user && <Vid name={video} user={user} /> }
    </Container>
  );
}