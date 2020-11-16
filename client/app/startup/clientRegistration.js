import ReactOnRails from 'react-on-rails';
import React from 'react';
import ReactDOM from 'react-dom';

import OnboardingTopBar from './OnboardingTopBarApp';
import OnboardingGuideApp from './OnboardingGuideApp';
import TopbarApp from './TopbarApp';
import SearchPageApp from './SearchPageApp';
import ManageAvailabilityApp from './ManageAvailabilityApp';
import ListingWorkingHoursApp from './ListingWorkingHoursApp';
import MarketplaceLandingPageApp from './MarketplaceLandingPageApp';

ReactOnRails.register({
  OnboardingGuideApp,
  OnboardingTopBar,
  TopbarApp,
  SearchPageApp,
  ManageAvailabilityApp,
  ListingWorkingHoursApp,
  MarketplaceLandingPageApp,
});

ReactOnRails.registerStore({
});

if (typeof window !== 'undefined') {
  window.React = React;
  window.ReactDOM = ReactDOM;
}
