import * as stylex from '@stylexjs/stylex';
import { useNavigate } from 'react-router';

import Button from 'components/Button/Button';

const styles = stylex.create({
  heading: {
    textAlign: 'center',
  },
});

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 {...stylex.props(styles.heading)}>Main page</h2>
      <Button text="Other page" onClick={() => navigate('other-page')} bgColor="red" />
    </div>
  );
};

export default HomePage;
