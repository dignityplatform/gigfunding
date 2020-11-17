import React, { Component } from 'react';
import ActionButton from '../../../elements/MarketplaceLandingPage/ActionButton';

class HowItWorksAction extends Component {
  render() {
    return (
      <div className='how-it-works-action flex-container full-width desktop-order-3'>
        <ActionButton text={'Sign up for free'} colorClass={'offering'} action={this.props.routes.login_path()}/>
      </div>
    )
  }
}

export default HowItWorksAction