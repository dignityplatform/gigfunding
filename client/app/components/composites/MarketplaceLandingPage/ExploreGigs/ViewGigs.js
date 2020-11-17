import React, { Component } from 'react';
import GigCard from '../../../elements/MarketplaceLandingPage/GigCard';

class ViewGigs extends Component {
  render() {
    const gigs = this.props.gigs.map((gig_data, index) => {
      return <GigCard {...gig_data} routes={this.props.routes} key={index}/>
    })

    console.log(gigs)

    return (
      <div className='gig-cards-container flex-container full-width'>
        {gigs}
      </div>
    )
  }
}

export default ViewGigs