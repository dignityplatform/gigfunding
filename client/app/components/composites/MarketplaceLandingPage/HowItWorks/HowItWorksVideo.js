import React, { Component } from 'react';
import VideoPlayer from '../../../elements/VideoPlayer/VideoPlayer';

class HowItWorksVideo extends Component {
  render() {
    return (
      <div className='video-player-container flex-container full-width desktop-order-2'>
        <VideoPlayer
          url='https://gigfunding-static-assets.s3.eu-west-2.amazonaws.com/gigfunding-explainer.mp4'
          screenshotSrc='https://gigfunding-static-assets.s3.eu-west-2.amazonaws.com/gigfunding-explainer-screenshot.jpg'
        />
      </div>
    );
  }
}

export default HowItWorksVideo;
