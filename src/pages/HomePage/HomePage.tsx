import { useEffect } from 'react';

import i18next, { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import Button from 'components/Button/Button';

const HomePage = () => {
  const { t } = useTranslation();
  const { language } = i18next;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('i18nextLng') !== null) {
      changeLanguage(localStorage.getItem('i18nextLng') ?? 'en');
    }
  }, []);

  return (
    <div>
      <h2>{t('homePage')}</h2>
      <Button bgColor="red" text={t('otherPage')} onClick={() => navigate('/other-page')} />
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value={'en'}>English</option>
        <option value={'de'}>German</option>
      </select>
    </div>
  );
};

export default HomePage;
