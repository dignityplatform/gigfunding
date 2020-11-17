import React, { Component } from 'react';
import MarketplaceLandingPageSectionHeading from '../../../elements/MarketplaceLandingPage/SectionHeading';
import MarketplaceLandingPageSubHeading from '../../../elements/MarketplaceLandingPage/SubHeading.js';

class HowItWorks extends Component {
  render() {
    return (
      <section className='how-it-works'>
        <div className='wrapper'>
          <MarketplaceLandingPageSectionHeading text='HOW IT WORKS'/>
          <div className='text-content'>
            <MarketplaceLandingPageSubHeading style='text-align: left;' text='Gigfunding is an online marketplace, where you can Hire or Volunteer skills, and all the payment is donated to causes you choose'/>
          </div>
        </div>
      </section>
    )
  }
}

export default HowItWorks