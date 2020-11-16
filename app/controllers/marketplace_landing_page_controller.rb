class MarketplaceLandingPageController < ApplicationController
  def show
    session[:landing_page_visited] = true
    @is_landing_page = true
  end
end
