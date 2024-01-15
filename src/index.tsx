import React from 'react';

import ReactDOM from 'react-dom/client';

import '18nConfig/setup';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
