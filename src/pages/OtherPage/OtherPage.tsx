import React from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import Button from 'components/Button/Button';

const OtherPage: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="mb-4 text-2xl">{t('otherPage')}</h2>
      <Button text={t('homePage')} onClick={() => navigate('/')} />
    </div>
  );
};

export default OtherPage;
