import React, { Component } from 'react';
import MarketplaceLandingPageHeading from '../../elements/MarketplaceLandingPage/Heading';
import MarketplaceLandingPageSubHeading from '../../elements/MarketplaceLandingPage/SubHeading.js';

class SplashActions extends Component {
  render() {
    return (
      <div className='splash-actions'>
        <div className='splash-action mobile'>
          <MarketplaceLandingPageHeading text={'HIRE A SKILL'} highlight={'offering'}/>
          <MarketplaceLandingPageHeading text={'OR'}/>
          <MarketplaceLandingPageHeading text={'VOLUNTEER A SKILL'} highlight={'requesting'}/>
          <MarketplaceLandingPageSubHeading text={'and donate the payment to a good cause'}/>
          {/* <LandingPageActionButton text={'Sign up for free'} color={'#EBB205'}/> */}
        </div>
        <div className='splash-action desktop'>
        </div>
        <div className='splash-action desktop'>
        </div>
      </div>
    )
  }
}

export default SplashActions