import React from 'react';

import { useNavigate } from 'react-router';

import styles from './HomePage.module.scss';

const HomePage: React.FC<React.PropsWithChildren> = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className={styles.heading}>Main page</h2>
      <button className={styles.link} onClick={() => navigate('other-page')}>
        Other page{' '}
      </button>
    </div>
  );
};

export default HomePage;
