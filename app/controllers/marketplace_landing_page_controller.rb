class MarketplaceLandingPageController < ApplicationController
  def show
    session[:landing_page_visited] = true
    @is_landing_page = true
    requesting_listing_shape = ListingShape.find_by(name: 'requesting')
    @requesting_listings = requesting_listing_shape.listings_with_images(count: 3)
    offering_listing_shape = ListingShape.find_by(name: 'offering')
    @offering_listings = offering_listing_shape.listings_with_images(count: 3)
  end
end
