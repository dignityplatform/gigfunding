import React, { Component } from 'react';

const generateVideoPlayerWrapper = (backgroundImageSrc) => {
  class VideoPlayerWrapper extends Component {
    render() {
      return (
        <div className='player-wrapper'>
          <img className='background-image' src={backgroundImageSrc}/>
          {this.props.children}
        </div>
      );
    }
  }

  return VideoPlayerWrapper;
};


export default generateVideoPlayerWrapper;
