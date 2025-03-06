import React from 'react';
import { AppProvider } from './lib/hooks/context';
import MainPage from './pages/MainPage';

const App: React.FC = () => <MainPage />;

export default () => (
  <AppProvider>
    <App />
  </AppProvider>
);
