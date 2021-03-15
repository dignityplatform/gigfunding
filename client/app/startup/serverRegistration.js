// Shows the mapping from the exported object to the name used by the server rendering.
import ReactOnRails from 'react-on-rails';

import OnboardingGuideApp from './OnboardingGuideApp';
import OnboardingTopBar from './OnboardingTopBarApp';
import TopbarApp from './TopbarApp';
import SearchPageApp from './SearchPageApp';
import MarketplaceLandingPageApp from './MarketplaceLandingPageApp';
import FAQsApp from './FAQsApp'

ReactOnRails.register({
  OnboardingGuideApp,
  OnboardingTopBar,
  TopbarApp,
  SearchPageApp,
  MarketplaceLandingPageApp,
  FAQsApp
});

ReactOnRails.registerStore({
});
