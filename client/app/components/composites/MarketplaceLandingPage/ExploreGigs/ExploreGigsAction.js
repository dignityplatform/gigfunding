import React, { Component } from 'react';
import ActionButton from '../../../elements/MarketplaceLandingPage/ActionButton';

class ExploreGigsAction extends Component {
  render() {

    let textContent;
    let colorClass;
    if (this.props.sectionOneSelected) {
      textContent = 'Sign up to start volunteering';
      colorClass = 'requesting';
    } else {
      textContent = 'Sign up to start hiring';
      colorClass = 'offering';
    }

    return (
      <div className='how-it-works-action flex-container full-width desktop-order-3'>
        <ActionButton text={textContent} colorClass={colorClass} action={this.props.routes.sign_up_path()}/>
      </div>
    );
  }
}

export default ExploreGigsAction;
