import React, { Component } from 'react';
import ActionButton from '../../../elements/MarketplaceLandingPage/ActionButton';

class HowItWorksAction extends Component {
  render() {
    return (
      <div className='flex-container full-width desktop-order-3 how-it-works-action'>
        <ActionButton text='Sign up for free' colorClass='offering' action={this.props.routes.sign_up_path()}/>
      </div>
    );
  }
}

export default HowItWorksAction;
