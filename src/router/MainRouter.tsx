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
      <Route
        element={<ComponentOne />}
        path={OTHER_PAGE}
        errorElement={<ErrorBoundary />}
        action={(val) => console.log('action', val)}
        loader={(val) => console.log('loader', val)}
      />
    </Routes>
  );
};

export default MainRouter;
