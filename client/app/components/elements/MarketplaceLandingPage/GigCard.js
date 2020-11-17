import React, { Component } from 'react';

class GigCard extends Component {
  render() {

    const linkToGig = this.props.routes.listing_path(this.props.id)
    const userStatement = `${this.props.author} ${this.props.type}`
    const priceUnits = this.props.unitType === 'unit' ? '' : `/${this.props.unitType}`
    const priceStatement = `£${this.props.price}${priceUnits}`
    const titleStatement = this.props.listingTitle.toUpperCase()
    const linkTitle = this.props.listingTitle

    return (
      <article className='gig-card'>
        <a href={linkToGig} title={`View ${linkTitle}`}>
          <div className='listing-image-container'>
            <img src={this.props.imageSrc} alt='gig listing image'/>
          </div>
          <div className='user-statement'>
            {userStatement}
          </div>
          <div className='title-statement'>
            {titleStatement}
          </div>
          <div className='price-statement'>
            {priceStatement}
          </div>
        </a>
      </article>
    )
  }
}

export default GigCard