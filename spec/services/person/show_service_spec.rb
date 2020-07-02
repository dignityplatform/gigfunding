require 'spec_helper'

describe Person::ShowService do

  let(:community) { FactoryGirl.create(:community) }

  let(:seller) do
    FactoryGirl.create(:person, member_of: community,
                                given_name: 'Sherry',
                                family_name: 'Rivera',
                                display_name: 'Sky caterpillar'
                      )
  end

  let(:listing_shape1) do
    FactoryGirl.create(:listing_shape, community_id: community.id,
                                       name: 'shape1'
                                       )
  end
  let(:listing_shape2) do
    FactoryGirl.create(:listing_shape, community_id: community.id,
                                       name: 'shape2'
                                       )
  end

  let(:listing1) do
    FactoryGirl.create(:listing, community_id: community.id,
                                 title: 'Apple cake',
                                 author: seller,
                                 listing_shape_id: listing_shape1.id
                                 )
  end
  let(:listing2) do
    FactoryGirl.create(:listing, community_id: community.id,
                                 title: 'Bannana Cake',
                                 author: seller,
                                 listing_shape_id: listing_shape1.id
                                 )
  end
  let(:listing3) do
    FactoryGirl.create(:listing, community_id: community.id,
                                 title: 'Pineapple cake',
                                 author: seller,
                                 listing_shape_id: listing_shape2.id
                                 )
  end

  let(:subject) do
    params = {'username': seller.username, 'show_closed': false}
    Person::ShowService.new(community: community, params: params, current_user: seller)
  end

  describe "#listings_per_shape" do
    it 'listing_shapes as keys of returned hash' do
      allow(ListingShape).to receive(:where).and_return([listing_shape1, listing_shape2])
      allow(subject).to receive(:listings_search)
      expect(subject.listings_per_shape.keys).to eq([listing_shape1, listing_shape2])
    end

    it 'sorts listings by listing_name' do
      allow(ListingShape).to receive(:where).and_return([listing_shape1, listing_shape2])
      allow(subject).to receive(:listings_search).and_return([listing1, listing2], [listing3])
      result = subject.listings_per_shape
      expect(result[listing_shape1]).to eq([listing1, listing2])
      expect(result[listing_shape2]).to eq([listing3])
    end
  end
end