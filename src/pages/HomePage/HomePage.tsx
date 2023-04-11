import React from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { counterSelector } from 'store/counter/counterSelector';
import { decrement, increment } from 'store/counter/counterSlice';

import styles from './HomePage.module.scss';

const HomePage: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counter = useSelector(counterSelector);
  const navigate = useNavigate();

  return (
    <div className={styles.homePage}>
      <h2>Main page</h2>
      <a className={styles.link} onClick={() => navigate('other-page')}>
        Other page{' '}
      </a>
      <div className={styles.actions}>
        <label htmlFor="increment-button">{t('increment')}</label>
        <button id="increment-button" className={styles.actionsButton} onClick={() => dispatch(increment())}>
          {t('increment')}
        </button>
        <label htmlFor="decrement-button">Decrement</label>
        <button id="decrement-button" className={styles.actionsButton} onClick={() => dispatch(decrement())}>
          {t('decrement')}
        </button>
        <div className={styles.result}>{counter}</div>
      </div>
    </div>
  );
};

export default HomePage;
