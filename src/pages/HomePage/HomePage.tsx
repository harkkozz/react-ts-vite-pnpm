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
    <div className="container">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl">{t('homePage')}</h2>

        <select
          className="border p-1"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value={'en'}>English</option>
          <option value={'de'}>German</option>
        </select>
      </div>
      <Button bgColor="red" text={t('otherPage')} onClick={() => navigate('/other-page')} />
    </div>
  );
};

export default HomePage;
