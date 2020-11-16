import React, { Component } from 'react';

class MarketplaceLandingPageSubHeading extends Component {
  render() {
    return (
      <a className='marketplace-landing-page-sub-heading'>
        {this.props.text}
      </a>
    )
  }
}

export default MarketplaceLandingPageSubHeading