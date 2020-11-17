import React, { Component } from 'react';

class MarketplaceLandingPageSectionHeading extends Component {
  render() {
    return (
      <div className='flex-container full-width'>
        <h2 className='marketplace-landing-page-section-heading half-highlight-element'>
          {this.props.text}
        </h2>
      </div>
    )
  }
}

export default MarketplaceLandingPageSectionHeading