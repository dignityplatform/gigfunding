import React, { Component } from 'react';
import SectionHeading from '../../../elements/MarketplaceLandingPage/SectionHeading';
import TwoWaySelector from './TwoWaySelector';

class ExploreGigs extends Component {
  constructor () {
    super()
    this.state = {
      sectionOneSelected: true
    }
  }

  selectSectionOne () {
    this.setState({
      sectionOneSelected: true
    })
  }

  selectSectionTwo () {
    this.setState({
      sectionOneSelected: false
    })
  }

  render() {
    return (
      <section className='explore-gigs wrapper'>
        <SectionHeading text='EXPLORE GIGS'/>
        <TwoWaySelector 
          sectionOneSelected={this.state.sectionOneSelected} 
          handleButtonOneClick={this.selectSectionOne.bind(this)}
          handleButtonTwoClick={this.selectSectionTwo.bind(this)}
        />
      </section>
    )
  }
}

export default ExploreGigs