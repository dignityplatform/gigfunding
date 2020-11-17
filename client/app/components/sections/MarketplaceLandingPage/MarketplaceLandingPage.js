import React, { Component } from 'react';
import SplashScreen from '../../composites/MarketplaceLandingPage/SplashScreen/SplashScreen';
import HowItWorks from '../../composites/MarketplaceLandingPage/HowItWorks/HowItWorks';

class MarketplaceLandingPage extends Component {

  render() {
    return (
      <section className='marketplace-landing-page'>
        <SplashScreen {...this.props}/>
        <HowItWorks {...this.props}/>
      </section>
    )
  }
}

export default MarketplaceLandingPage