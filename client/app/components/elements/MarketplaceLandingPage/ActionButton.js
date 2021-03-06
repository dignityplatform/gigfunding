import React, { Component } from 'react';

class MarketplaceLandingPageActionButton extends Component {
  render() {
    return (
      <a href={this.props.action} className={`marketplace-landing-page-action-button ${this.props.colorClass}`} title='Sign up'>
        {this.props.text}
      </a>
    );
  }
}

export default MarketplaceLandingPageActionButton;
