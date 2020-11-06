class MarketplaceLandingPageController < ApplicationController
  def show
    session[:landing_page_visited] = true
  end
end
