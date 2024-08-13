import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { HOME_PAGE, OTHER_PAGE } from 'router/constants';

import HomePage from 'pages/HomePage/HomePage';
import ComponentOne from 'pages/OtherPage/OtherPage';

import ErrorBoundary from 'components/ErrorBoundary';

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path={HOME_PAGE} />
      <Route element={<ComponentOne />} errorElement={<ErrorBoundary />} path={OTHER_PAGE} />
      <Route element={<div>404 Page not found</div>} path="*" />
    </Routes>
  );
};

export default MainRouter;
