import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop, loadState } from '@forte-dev/ui';

import './i18n';
import App from './app/app';
import AuthService from './app/services/auth-service';
import configureStore from './app/store/configure-store';

const initialState = loadState();
const store = configureStore({ initialState, services: { AuthService } });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.NX_PUBLIC_URL}>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
