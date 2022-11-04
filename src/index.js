import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initFakeServer } from './services/fake-server.service';

import './styles/global.scss';

initFakeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
