import React from 'react';
import { initialize as initializeI18n } from 'utils/i18n';
import { subset } from 'utils/routes';
import FAQsSection from 'components/sections/Gigfunding/FAQs/FAQsSection'
import FAQsData from 'assets/json/faqs.json'

export default props => {
  const locale = props.i18n.locale;
  const defaultLocale = props.i18n.defaultLocale;

  initializeI18n(locale, defaultLocale, process.env.NODE_ENV);

  const routes = subset([
    'homepage_without_locale',
  ], { locale });

  const combinedProps = Object.assign({}, props, { routes, faqsData: FAQsData });
  return <FAQsSection {...combinedProps}/>;
};
