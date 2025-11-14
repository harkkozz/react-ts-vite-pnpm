import React, { type PropsWithChildren } from 'react';

import { MemoryRouter } from 'react-router-dom';

const TestApp: React.FC<PropsWithChildren<{ path?: string }>> = ({ path, children }) => (
  <MemoryRouter initialEntries={[!path ? '/' : path]}>{children}</MemoryRouter>
);

export default TestApp;
