import React, { Component } from 'react';

class MarketplaceLandingPageSubHeading extends Component {
  render() {
    return (
      <h3 className='marketplace-landing-page-sub-heading'>
        {this.props.text}
      </h3>
    )
  }
}

export default MarketplaceLandingPageSubHeading