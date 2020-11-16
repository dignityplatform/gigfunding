import React, { Component } from 'react';
import MarketplaceLandingPageHeading from '../../elements/MarketplaceLandingPage/Heading';
import MarketplaceLandingPageSubHeading from '../../elements/MarketplaceLandingPage/SubHeading.js';
import MarketplaceLandingPageActionButton from '../../elements/MarketplaceLandingPage/ActionButton';

class SplashActions extends Component {
  render() {
    return (
      <div className='splash-actions'>
        <div className='splash-action mobile'>
          <MarketplaceLandingPageHeading text={'HIRE A SKILL'} highlight={'offering'}/>
          <MarketplaceLandingPageHeading text={'OR'}/>
          <MarketplaceLandingPageHeading text={'VOLUNTEER A SKILL'} highlight={'requesting'}/>
          <MarketplaceLandingPageSubHeading text={'and donate the payment to a good cause'}/>
          <MarketplaceLandingPageActionButton text={'Sign up for free'} colorClass={'offering'} action={this.props.routes.login_path()}/>
        </div>
        <div className='splash-action desktop'>
          <MarketplaceLandingPageHeading text={'I WANT TO'}/>
          <MarketplaceLandingPageHeading text={'VOLUNTEER A SKILL'} highlight={'requesting'}/>
          <MarketplaceLandingPageSubHeading text={'and donate the payment to a good cause'}/>
          <MarketplaceLandingPageActionButton text={'Sign up for free'} colorClass={'requesting'} action={this.props.routes.login_path()}/>
        </div>
        <div className='splash-action desktop'>
          <MarketplaceLandingPageHeading text={'I WANT TO'}/>
          <MarketplaceLandingPageHeading text={'HIRE A SKILL'} highlight={'offering'}/>
          <MarketplaceLandingPageSubHeading text={'and donate the payment to a good cause'}/>
          <MarketplaceLandingPageActionButton text={'Sign up for free'} colorClass={'offering'} action={this.props.routes.login_path()}/>
        </div>
      </div>
    )
  }
}

export default SplashActions