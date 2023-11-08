import styled from 'styled-components';
import { Navigation } from './Navigation';
import { Outlet } from 'react-router-dom';

export const Container = styled.div``;

export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>

      <Outlet />
    </Container>
  );
};
