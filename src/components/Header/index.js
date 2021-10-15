import styled from 'styled-components';

const Container = styled.div`
  .nav {
    height: 2rem;
    background-color: #aa00ff;
  }
`;

export const Header = () => {
  return (
    <Container>
      <nav className="nav"></nav>
    </Container>
  );
};