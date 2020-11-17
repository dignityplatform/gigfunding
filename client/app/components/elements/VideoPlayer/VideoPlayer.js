import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import generateVideoPlayerWrapper from './generateVideoPlayerWrapper'

class VideoPlayerWrapper extends Component {
  render() {
    return(
      <div className='player-wrapper'>
        {this.props.children}
      </div>
    )
  }
}

class VideoPlayer extends Component {
  render() {

    const VideoPlayerWrapper = generateVideoPlayerWrapper(this.props.screenshotSrc);
    
    return (
      <ReactPlayer url={this.props.url} width='unset' height='unset' controls light playing wrapper={VideoPlayerWrapper}/>
    )
  }
}

export default VideoPlayer