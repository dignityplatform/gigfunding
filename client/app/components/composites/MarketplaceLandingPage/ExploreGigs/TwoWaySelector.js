import React, { Component } from 'react';
import Heading from '../../../elements/MarketplaceLandingPage/Heading';

class TwoWaySelector extends Component {
  render() {

    let buttonOneHighlight;
    let buttonTwoHighlight;
    if (!!this.props.sectionOneSelected) {
      buttonOneHighlight = 'requesting';
      buttonTwoHighlight = '';
    } else {
      buttonOneHighlight = '';
      buttonTwoHighlight = 'offering';
    }

    return (
      <div className='two-way-selector'>
        <div className='selector-container'>
          <button className='selector-button' onClick={this.props.handleButtonOneClick}>
            <Heading text='VOLUNTEER' highlight={buttonOneHighlight}/>
          </button>
        </div>
        <div className='selector-container'>
          <button className='selector-button' onClick={this.props.handleButtonTwoClick}>
            <Heading text='HIRE' highlight={buttonTwoHighlight} />
          </button>
        </div>
      </div>
    )
  }
}

export default TwoWaySelector