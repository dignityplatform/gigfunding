import React, { Component } from 'react';
import SplashHeader from '../../elements/SplashHeader/SplashHeader';
import SplashActions from '../SplashActions/SplashActions';
import SplashScroll from '../../elements/SplashScroll/SplashScroll';

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