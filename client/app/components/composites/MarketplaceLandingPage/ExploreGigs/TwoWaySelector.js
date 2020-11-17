import React, { Component } from 'react';
import Heading from '../../../elements/MarketplaceLandingPage/Heading';

class TwoWaySelector extends Component {
  render() {
    return (
      <div className='two-way-selector'>
        <div className='selector-container'>
          <button className='selector-button'>
            <Heading text='VOLUNTEER'/>
          </button>
        </div>
        <div className='selector-container'>
          <button className='selector-button'>
            <Heading text='HIRE'/>
          </button>
        </div>
      </div>
    )
  }
}

export default TwoWaySelector