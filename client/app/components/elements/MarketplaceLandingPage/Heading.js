import React, { Component } from 'react';

class MarketplaceLandingPageHeading extends Component {
  render() {
    const highlightClass = this.props.highlight ? `half-highlight-element ${this.props.highlight}` : '';

    return (
      <h3 className={`marketplace-landing-page-heading ${highlightClass}`}>
        {this.props.text}
      </h3>
    );
  }
}

export default MarketplaceLandingPageHeading;
