import React, { Component, Fragment } from 'react';
import Heading from '../../../elements/MarketplaceLandingPage/Heading';
import TextBody from '../../../elements/MarketplaceLandingPage/TextBody';

class HowItWorksDetails extends Component {
  render() {

    const requesting_path = this.props.routes.homepage_without_locale_path({'transaction_type': 'requesting'})
    const offering_path = this.props.routes.homepage_without_locale_path({'transaction_type': 'offering'})

    return (
      <div className='text-content-wrapper desktop-order-1'>
        <article className='how-it-works-details'>
          <Heading text={'HOW TO VOLUNTEER SKILLS'} highlight={'requesting'}/>
          <TextBody>
            You can <strong>volunteer</strong> (pretty much) any skill on Gigfunding. Simply create a listing to advertise your skill, and other members can then find your listing. When someone hires you, the money they pay is donated to your favourite cause and theirs.
            <br></br><br></br>
            You can also browse our <a href={requesting_path} title='Browse requesting listings'>Requests</a> page, to see the skills people are currently seeking, and respond to those.
            <br></br><br></br>
            We like to call this <i>Giving by Doing!</i>
          </TextBody>
        </article>
        <article className='how-it-works-details'>
          <Heading text={'HOW TO HIRE SKILLS'} highlight={'offering'}/>
          <TextBody>
            To hire skills, simply <a href={offering_path} title='Browse offering listings'>browse</a> our glorious marketplace of volunteers to find the talent you need.
            <br></br><br></br>
            You can also request (pretty much) any skill you want on Gigfunding, by posting a listing.
            The money you pay will be donated to your favourite cause, and the volunteer's.
            <br></br><br></br>
            <i>Everyone wins!</i>
          </TextBody>
        </article>
      </div>
    )
  }
}

export default HowItWorksDetails
