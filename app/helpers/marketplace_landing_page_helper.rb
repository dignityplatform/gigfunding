module MarketplaceLandingPageHelper
  def marketplace_landing_page_props
    {
      i18n: {
        locale: I18n.locale,
        defaultLocale: I18n.default_locale
      },
      images: {
        splashImageSrc: image_url('marketplace_landing_page/splash-image.jpg')
      },
      requestingListings: collect_card_attributes(listings_collection: @requesting_listings, type: 'is looking for'),
      offeringListings: collect_card_attributes(listings_collection: @offering_listings, type: 'is offering')
    }
  end


  def collect_card_attributes(listings_collection:, type:)
    listings_collection ||= []
    listings_collection.map do |listing|
      {
        imageSrc: image_url(listing.listing_images.first.image.url(:square)),
        author: listing.author.given_name.capitalize,
        listingTitle: listing.title,
        price: listing.price_cents / 100,
        unitType: listing.unit_type,
        type: type,
        id: listing.id
      }
    end
  end
end
