import React, { Component } from 'react';
import VideoPlayer from '../../../elements/VideoPlayer/VideoPlayer';

class HowItWorksVideo extends Component {
  render() {
    return (
      <div className='video-player-container flex-container full-width'>
        <VideoPlayer url='https://gigfunding-static-assets.s3.eu-west-2.amazonaws.com/gigfunding-explainer.mp4'/>
      </div>
    )
  }
}

export default HowItWorksVideo