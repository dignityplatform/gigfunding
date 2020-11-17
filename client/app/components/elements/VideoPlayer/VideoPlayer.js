import React, { Component } from 'react';
import ReactPlayer from 'react-player';

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
    return (
      <ReactPlayer url={this.props.url} width='unset' height='unset' controls light wrapper={VideoPlayerWrapper}/>
    )
  }
}

export default VideoPlayer