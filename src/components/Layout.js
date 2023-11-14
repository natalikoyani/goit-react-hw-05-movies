import { Navigation } from './Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Header } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
