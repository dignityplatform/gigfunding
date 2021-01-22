require "spec_helper"

RSpec.describe HomepageHelper, type: :helper do
  let(:community) do
    FactoryGirl.create(:community)
  end
  let(:listing_shape_search_text) do
    FactoryGirl.create(:listing_shape, community_id: community.id, search_text_tr_key: 'test.translation')
  end
  let(:listing_shape_no_search_text) do
    FactoryGirl.create(:listing_shape, community_id: community.id, search_text_tr_key: nil)
  end

  describe '#search_bar_placeholder' do
    it 'selected listing shape with search text' do
      expect(search_bar_placeholder(listing_shape_search_text)).to eq('test')
    end

    it 'selected listing shape without search text' do
      @community_customization = community.community_customizations.first
      expect(search_bar_placeholder(listing_shape_no_search_text)).to eq('What are you looking for?')
    end
  end
end