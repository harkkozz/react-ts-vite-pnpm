import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import MainRouter from 'router/MainRouter';

import store from 'store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
