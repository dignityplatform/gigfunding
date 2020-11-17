module MarketplaceLandingPageHelper
  def marketplace_landing_page_props
    {
      i18n: {
        locale: I18n.locale,
        defaultLocale: I18n.default_locale
      },
      images: {
        splashImageSrc: image_url('marketplace_landing_page/splash-image')
      },
      requesting_listings: collect_card_attributes(listings_collection: @requesting_listings, type: 'is requesting'),
      offering_listings: collect_card_attributes(listings_collection: @offering_listings, type: 'is volunteering')
    }
  end


  def collect_card_attributes(listings_collection:, type:)
    listings_collection.map do |listing| 
      {
        imageSrc: image_url(listing.listing_images.first.image.url(:square_2x)),
        author: listing.author.given_name.capitalize,
        listing_title: listing.title,
        price: listing.price_cents / 100,
        unit_type: listing.unit_type,
        type: type, 
        id: listing.id
      }
    end
  end
end