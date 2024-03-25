import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.scss';
import App from './App';
import { AppProvider } from './useAppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
  </AppProvider>
  </React.StrictMode>
);