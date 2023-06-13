import React from 'react';

import { useNavigate } from 'react-router';

import styles from './OtherPage.module.scss';

const OtherPage: React.FC<React.PropsWithChildren> = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className={styles.heading}>Other page</h2>
      <button className={styles.link} onClick={() => navigate('/')}>
        Home page
      </button>
    </div>
  );
};

export default OtherPage;
