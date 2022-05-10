import React from 'react';
import './i18n/i18n';
import {useTranslation} from 'react-i18next';
import MainNavigation from './navigation';

const App = () => {
  const {t, i18n} = useTranslation();

  return <MainNavigation />;
};

export default App;
