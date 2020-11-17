import React, { Component } from 'react';
import SectionHeading from '../../../elements/MarketplaceLandingPage/SectionHeading';
import TwoWaySelector from './TwoWaySelector';
import ExploreGigsAction from './ExploreGigsAction';

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
        <ExploreGigsAction sectionOneSelected={this.state.sectionOneSelected} routes={this.props.routes} />
      </section>
    )
  }
}

export default ExploreGigs