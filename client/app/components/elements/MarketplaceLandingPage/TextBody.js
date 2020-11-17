import React, { Component } from 'react';

class MarketplaceLandingPageTextBody extends Component {
  render() {
    return (
      <div className='how-it-works-text-body'>
        {this.props.children}
      </div>
    );
  }
}

export default MarketplaceLandingPageTextBody;
