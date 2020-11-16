import React, { Component } from 'react';


class SplashScreen extends Component {
  render() {
    return (
      <div className='splash-screen'>
        <img src={this.props.splashScreen.splashImageSrc} className='background-image'/>
      </div>
    )
  }
}

export default SplashScreen