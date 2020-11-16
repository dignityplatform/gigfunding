import React from 'react';
import { initialize as initializeI18n } from '../utils/i18n';
import MarketplaceLandingPage from '../components/sections/MarketplaceLandingPage/MarketplaceLandingPage';
import { subset } from '../utils/routes';

export default (props) => {
  const locale = props.i18n.locale;
  const defaultLocale = props.i18n.defaultLocale;

  initializeI18n(locale, defaultLocale, process.env.NODE_ENV);

  const routes = subset([
    'login',
    'sign_up',
  ], { locale });

  const combinedProps = Object.assign({}, props, { routes });
  return <MarketplaceLandingPage {...combinedProps}/>;
};
