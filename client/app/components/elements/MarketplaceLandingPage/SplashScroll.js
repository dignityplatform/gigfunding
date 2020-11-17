import React, { Component } from 'react';

const downChevronSvg = <svg alt='scroll down icon' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" /></svg>;

class SplashScroll extends Component {

  scrollToNextSection() {
    scroll({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className='splash-scroll-container'>
        <button className='splash-scroll-button' onClick={this.scrollToNextSection.bind(this)} title='Scroll to next section' alt='scroll down button'>
          {downChevronSvg}
        </button>
      </div>
    );
  }
}

export default SplashScroll;
