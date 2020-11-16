import React, { Component } from 'react';
import SplashScreen from '../../composites/SplashScreen/SplashScreen';

if (typeof document !== 'undefined') {
  require('./MarketplaceLandingPage.scss');
}

class MarketplaceLandingPage extends Component {

  render() {
    return (
      <section className='marketplace-landing-page'>
        <SplashScreen {...this.props}/>
      </section>
    )
  }
}

export default MarketplaceLandingPage