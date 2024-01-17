import { BrowserRouter } from 'react-router-dom';

import { idiomSetup } from '18nConfig/setup';
import MainRouter from 'router/MainRouter';

idiomSetup();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
