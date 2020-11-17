import React, { Component } from 'react';

class ViewGigs extends Component {
  render() {
    const gigs = this.props.gigs.map((gig_data) => {
      <GigCard {...gig_data} routes={this.props.routes}/>
    })

    return (
      <div className='gig-cards-container flex-container full-width'>
        {gigs}
      </div>
    )
  }
}

export default ViewGigs