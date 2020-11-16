module MarketplaceLandingPageHelper
  def marketplace_landing_page_props
    {
      i18n: {
        locale: I18n.locale,
        defaultLocale: I18n.default_locale
      },
      splashScreen: {
        splashImageSrc: image_url('marketplace_landing_page/splash-image')
      }
    }
  end
end