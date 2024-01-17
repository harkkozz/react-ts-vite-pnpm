import React from 'react';

import { Route, Routes } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import HomePage from 'pages/HomePage/HomePage';
import ComponentOne from 'pages/OtherPage/OtherPage';
import { HOME_PAGE, OTHER_PAGE } from 'router/constants';

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path={HOME_PAGE} />
      <Route element={<ComponentOne />} path={OTHER_PAGE} errorElement={<ErrorBoundary />} />
      <Route element={<div>404 Page not found</div>} path="*" />
    </Routes>
  );
};

export default MainRouter;
