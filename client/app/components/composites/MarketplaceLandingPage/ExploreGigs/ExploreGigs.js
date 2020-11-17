import React, { Component } from 'react';
import SectionHeading from '../../../elements/MarketplaceLandingPage/SectionHeading';
import TwoWaySelector from './TwoWaySelector';
import ExploreGigsAction from './ExploreGigsAction';
import ViewGigs from './ViewGigs';

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

    const selectedGigs = this.state.sectionOneSelected ? 
      this.props.requesting_listings:
      this.props.offering_listings
    
    return (
      <section className='explore-gigs wrapper'>
        <SectionHeading text='EXPLORE GIGS'/>
        <TwoWaySelector
          sectionOneSelected={this.state.sectionOneSelected} 
          handleButtonOneClick={this.selectSectionOne.bind(this)}
          handleButtonTwoClick={this.selectSectionTwo.bind(this)}
        />
        <ViewGigs gigs={selectedGigs} routes={this.props.routes}/>
        <ExploreGigsAction sectionOneSelected={this.state.sectionOneSelected} routes={this.props.routes} />
      </section>
    )
  }
}

export default ExploreGigs