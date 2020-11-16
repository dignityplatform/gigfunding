import React, { Component } from 'react';

const downChevronSvg = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path></svg>

class SplashScroll extends Component {
  render() {
    return (
      <div className='splash-scroll-container'>
        <button className='splash-scroll-button'>
          {downChevronSvg}
        </button>
      </div>
    )
  }
}

export default SplashScroll