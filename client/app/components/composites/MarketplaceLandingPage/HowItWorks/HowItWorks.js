import React, { Component } from 'react';
import SectionHeading from '../../../elements/MarketplaceLandingPage/SectionHeading';
import SubHeading from '../../../elements/MarketplaceLandingPage/SubHeading.js';
import HowItWorksDetails from './HowItWorksDetails';
import HowItWorksVideo from './HowItWorksVideo.js';
import HowItWorksAction from './HowItWorksAction.js';

class HowItWorks extends Component {
  render() {
    return (
      <section className='how-it-works'>
        <div className='wrapper'>
          <SectionHeading text='HOW IT WORKS'/>
          <div className='text-content-wrapper'>
            <SubHeading style='text-align: left;' text='Gigfunding is an online marketplace, where you can Hire or Volunteer skills, and all the payment is donated to causes you choose'/>
          </div>
          <HowItWorksVideo/>
          <HowItWorksDetails/>
          <HowItWorksAction routes={this.props.routes}/>
        </div>
      </section>
    )
  }
}

export default HowItWorks