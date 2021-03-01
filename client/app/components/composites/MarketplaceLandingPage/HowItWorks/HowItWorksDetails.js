import React, { Component } from 'react';
import Heading from '../../../elements/MarketplaceLandingPage/Heading';
import TextBody from '../../../elements/MarketplaceLandingPage/TextBody';

class HowItWorksDetails extends Component {
  render() {

    const requesting_path = this.props.routes.homepage_without_locale_path({ transaction_type: 'requesting' });
    const offering_path = this.props.routes.homepage_without_locale_path({ transaction_type: 'offering' });

    return (
      <div className='text-content-wrapper desktop-order-1'>
        <article className='how-it-works-details'>
          <Heading text={'VOLUNTEER YOUR SKILLS'} highlight={'requesting'}/>
          <TextBody>
            We’re not quite back to normality yet. The good news is you can still virtually volunteer (pretty much) any skill you have by <span>posting a listing.</span>
            <br /><br />
            So whether you’re a piano teacher, language expert or marketing consultant; you can still give in a way that you love. When someone hires you, the money they pay is donated to your favourite cause and theirs.
            <br /><br />
            See which skills people are <span>looking to hire</span> right now.
            <br /><br />
            <span>This is Giving by Doing.</span>
          </TextBody>
        </article>
        <article className='how-it-works-details'>
          <Heading text={'HIRE SKILLS'} highlight={'offering'}/>
          <TextBody>
            You can hire (pretty much) any skill you want by <span><strong>posting a listing.</strong></span>
            <br /><br />
            So whether you need a dog walker, accountant, or photographer;
            we'll find the person you need. The money you pay will be donated
            to your favourite cause and theirs.
            <br /><br />
            See which skills people are <span><strong>volunteering</strong></span> right now.
            <br /><br />
            <span><strong>That's fun-raising.</strong></span>
          </TextBody>
        </article>
      </div>
    );
  }
}



export default HowItWorksDetails;
