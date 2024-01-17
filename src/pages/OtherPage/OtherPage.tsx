import React from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import Button from 'components/Button/Button';

import styles from './OtherPage.module.scss';

const OtherPage: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation('');

  const navigate = useNavigate();

  return (
    <div>
      <h2 className={styles.heading}>{t('otherPage')}</h2>
      <Button text={t('homePage')} onClick={() => navigate('/')} />
    </div>
  );
};

export default OtherPage;
