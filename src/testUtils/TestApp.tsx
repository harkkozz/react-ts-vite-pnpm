import { PropsWithChildren } from 'react';

import { MemoryRouter } from 'react-router-dom';

const Test: React.FC<PropsWithChildren<any>> = ({ path, children }) => (
  <MemoryRouter initialEntries={[!path ? '/' : path]}>{children}</MemoryRouter>
);

export default Test;
