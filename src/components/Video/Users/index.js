import styled from 'styled-components';

const Container = styled.div`
  font-size: 0.875rem;
  
  .users-title {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
    .material-icons {
      font-size: 1rem;
      color: #7C4DFF;
      margin-right: 8px;
    }
  }

  .users-name {
    margin-bottom: 0.25rem;
  }
`;

export const Users = props => {

  return (
    <Container>
      <div className="users-title">
        <i className="material-icons">group</i>
        <span>Usuarios online</span>
      </div>
      {props.users?.map((user, index) => <div key={`${user.name}${index}`} className="users-name">{user}</div>)}
    </Container>
  );
};