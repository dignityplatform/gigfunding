import React, { Component, Fragment } from 'react';
import Heading from '../../../elements/MarketplaceLandingPage/Heading';
import TextBody from '../../../elements/MarketplaceLandingPage/TextBody';

class HowItWorksDetails extends Component {
  render() {
    return (
      <div className='text-content-wrapper desktop-order-1'>
        <article className='how-it-works-details'>
          <Heading text={'HOW TO VOLUNTEER YOUR SKILLS'} highlight={'requesting'}/>
          <TextBody>
            To help out a neighbour, offer your skills by adding them to the <strong>Listings</strong> page. You can also tap the Help Out button on any listing you think you can help out with!
            <br></br><br></br>
            When a neighbour requests your skills, you’ll get a message from them to ask any claryfing questions.
            <br></br><br></br>
            Once the hirer has paid the fee, you can arrange to meet up!
            <br></br><br></br>
            Don’f forget to review your hirer, so other people know they can trust your neighbour.
          </TextBody>
        </article>
        <article className='how-it-works-details'>
          <Heading text={'HOW TO HIRE A VOLUNTEER'} highlight={'offering'}/>
          <TextBody>
            To hire a volunteer, request their skill on the <strong>Listings</strong> page. This will allow you to message your neighbour. You can ask them any clarifying questions you want. 
            <br></br><br></br>
            Once you’re both happy, you’ll be asked to pay the fee.  
            <br></br><br></br>
            After you’ve paid, you can arrange to meet up!
            <br></br><br></br>
            Don’f forget to review your volunteer, so other people know they can trust your neighbour.
          </TextBody>
        </article>
      </div>
    )
  }
}

export default HowItWorksDetails