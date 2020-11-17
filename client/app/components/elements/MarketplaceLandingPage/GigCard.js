import React, { Component } from 'react';

class GigCard extends Component {
  render() {

    const linkToGig = this.props.routes.listing_path(this.props.id)
    const userStatement = `${this.props.author} ${this.props.type}`
    const priceUnits = this.props.unitType === 'unit' ? '' : `/${this.props.unitType}`
    const priceStatement = `£${this.props.price}${priceUnits.toUpperCase()}`
    const titleStatement = this.props.listingTitle.length > 35 ? 
      `${this.props.listingTitle.toUpperCase().substring(0,32)}...` : 
      this.props.listingTitle.toUpperCase()
    const linkTitle = this.props.listingTitle

    return (
      <article className='gig-card-container'>
        <a href={linkToGig} title={`View ${linkTitle}`} className='gig-card-inner'>
          <img src={this.props.imageSrc} alt='gig listing image'/>
          <div className='details-container'>
            <div className='user-statement'>
              {userStatement}
            </div>
            <div className='price-container'>
              <div className='title-statement'>
                {titleStatement}
              </div>
              <div className='price-statement'>
                {priceStatement}
              </div>
            </div>
          </div>
        </a>
      </article>
    )
  }
}

export default GigCard