import React, { Component } from 'react';
import Heading from '../../../elements/MarketplaceLandingPage/Heading';
import TextBody from '../../../elements/MarketplaceLandingPage/TextBody';

class HowItWorksDetails extends Component {
  render() {
    return (
      <div className='how-it-works-details'>
        <Heading text={'HOW TO VOLUNTEER YOUR SKILLS'} highlight={'offering'}/>
        <TextBody>
          To help out a neighbour, offer your skills by adding them to the <strong>Listings</strong> page. You can also tap the Help Out button on any listing you think you can help out with!
          <br></br><br></br>
          When a neighbour requests your skills, you’ll get a message from them to ask any claryfing questions.
          <br></br><br></br>
          Once the hirer has paid the fee, you can arrange to meet up!
          <br></br><br></br>
          Don’f forget to review your hirer, so other people know they can trust your neighbour.
        </TextBody>
      </div>
    )
  }
}

export default HowItWorksDetails