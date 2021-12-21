import styled from 'styled-components';

const Container = styled.div`
`;

export const Users = props => {
  const { users } = props;

  return (
    <Container>
      <ul>
        {users.map(user =>
          <li key={user}>
            {user}
          </li>
        )}
      </ul>
    </Container>
  );
};