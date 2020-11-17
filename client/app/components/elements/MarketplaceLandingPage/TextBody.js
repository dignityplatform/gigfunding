import React, { Component } from 'react';

class MarketplaceLandingPageTextBody extends Component {
  render() {
    return (
      <div className='how-it-works-details'>
        {this.props.children}
      </div>
    )
  }
}

export default MarketplaceLandingPageTextBody