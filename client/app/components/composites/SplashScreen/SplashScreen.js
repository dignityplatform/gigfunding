import React, { Component } from 'react';


const in_browser_env = (typeof document !== 'undefined') 

if (in_browser_env) {
  require('./SplashScreen.scss');
}

class SplashScreen extends Component {

  render() {

    let splashImageSrc
    if (in_browser_env) {
      splashImageSrc = this.props.splashScreen.splashImageSrc
    }

    return (
      <div className='splash-screen'>
        <img src={splashImageSrc} className='background-image'/>
      </div>
    )
  }
}

export default SplashScreen