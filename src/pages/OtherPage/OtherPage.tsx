import React from 'react';

import { useNavigate } from 'react-router';

const OtherPage: React.FC<React.PropsWithChildren> = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Other page</h2>
      <button onClick={() => navigate('/')}>Home page</button> <br />
      <br />
    </div>
  );
};

export default OtherPage;
