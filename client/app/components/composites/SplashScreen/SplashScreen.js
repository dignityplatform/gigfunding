import React, { Component } from 'react';
import SplashHeader from '../../elements/SplashHeader/SplashHeader';

class SplashScreen extends Component {
  render() {
    return (
      <div className='splash-screen'>
        <img src={this.props.splashScreen.splashImageSrc} className='background-image'/>
        <div className='wrapper'>
          <SplashHeader/>
        </div>
      </div>
    )
  }
}

export default SplashScreen