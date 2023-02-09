import React from 'react';
import ComponentOne from 'components/ComponentOne';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary';

const MainRouter: React.FC<React.PropsWithChildren> = () => {
  return (
    <Routes>
      <Route
        element={<ComponentOne />}
        path="/component-one"
        errorElement={<ErrorBoundary />}
        action={(val) => console.log('action', val)}
        loader={(val) => console.log('loader', val)}
      />
    </Routes>
  );
};

export default MainRouter;
