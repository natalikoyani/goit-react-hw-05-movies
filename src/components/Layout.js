import styled from 'styled-components';
import { Navigation } from './Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

export const Container = styled.div``;

export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
