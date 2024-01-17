import * as stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import Button from 'components/Button/Button';

const styles = stylex.create({
  heading: {
    textAlign: 'center',
  },
});

const HomePage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div>
      <h2 {...stylex.props(styles.heading)}>{t('homePage')}</h2>
      <Button text={t('otherPage')} onClick={() => navigate('/other-page')} bgColor="red" />
    </div>
  );
};

export default HomePage;
