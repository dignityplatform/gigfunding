class MarketplaceLandingPageController < ApplicationController
  def show
    session[:landing_page_visited] = true
    @is_landing_page = true
    @react_props = {
      i18n: {
        locale: I18n.locale,
        defaultLocale: I18n.default_locale
      },
    }
  end
end
