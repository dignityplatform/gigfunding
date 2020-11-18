class MarketplaceLandingPageController < ApplicationController
  before_action :redirect_logged_in_users

  def show
    @is_landing_page = true
    requesting_listing_shape = ListingShape.exist.find_by(name: 'requesting')
    @requesting_listings = requesting_listing_shape&.listings_with_images(count: 3)
    offering_listing_shape = ListingShape.exist.find_by(name: 'offering')
    @offering_listings = offering_listing_shape&.listings_with_images(count: 3)
  end

  private

  def redirect_logged_in_users
    redirect_to(homepage_without_locale_path(locale: nil)) if @current_user
  end
end
