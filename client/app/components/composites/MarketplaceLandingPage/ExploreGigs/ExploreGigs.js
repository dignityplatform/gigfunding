import React, { Component } from 'react';
import SectionHeading from '../../../elements/MarketplaceLandingPage/SectionHeading';
import TwoWaySelector from './TwoWaySelector';

class ExploreGigs extends Component {
  render() {
    return (
      <section className='explore-gigs wrapper'>
        <SectionHeading text='EXPLORE GIGS'/>
        <TwoWaySelector/>
      </section>
    )
  }
}

export default ExploreGigs