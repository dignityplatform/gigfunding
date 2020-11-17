import React, { Component } from 'react';
import SplashHeader from '../../../elements/MarketplaceLandingPage/SplashHeader';
import SplashActions from './SplashActions';
import SplashScroll from '../../../elements/MarketplaceLandingPage/SplashScroll';

class SplashScreen extends Component {
  render() {
    return (
      <section className='splash-screen'>
        <img src={this.props.images.splashImageSrc} className='background-image' alt='landing page cover image, hairdressing gig being completed'/>
        <div className='wrapper'>
          <SplashHeader/>
          <SplashActions routes={this.props.routes}/>
          <SplashScroll/>
        </div>
      </section>
    )
  }
}

export default SplashScreen