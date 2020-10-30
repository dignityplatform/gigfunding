require "spec_helper"

RSpec.describe TransactionHelper, type: :helper do
  describe '#transaction_starter' do

    let(:community) do
      FactoryGirl.create(:community)
    end

    let(:starter) do
      FactoryGirl.create(:person, member_of: community,
                                  given_name: 'Starter of transaction')
    end
    let(:author) do
      FactoryGirl.create(:person, member_of: community,
                                  given_name: 'Author of listing')
    end

    let(:offering_listing_shape) do
      FactoryGirl.create(:listing_shape, community_id: community.id, name: 'offering')
    end
    let(:requesting_listing_shape) do
      FactoryGirl.create(:listing_shape, community_id: community.id, name: 'requesting')
    end

    let(:offering_listing) do
      FactoryGirl.create(:listing, community_id: community.id,
                                   author: author,
                                   listing_shape: offering_listing_shape)
    end
    let(:requesting_listing) do
      FactoryGirl.create(:listing, community_id: community.id,
                                   author: author,
                                   listing_shape: requesting_listing_shape)
    end

    let(:offering_transaction) do
      FactoryGirl.create(:transaction, community: community,
                                       listing: offering_listing,
                                       starter: starter,
                                       listing_author_id: author.id,
                                       current_state: 'preauthorized')
    end
    let(:requesting_transaction) do
      FactoryGirl.create(:transaction, community: community,
                                       listing: requesting_listing,
                                       starter: author,
                                       listing_author_id: starter.id,
                                       current_state: 'preauthorized')
    end

    describe 'requesting transaction type' do
      it 'returns transction starter' do
        expect(transaction_starter(transaction: requesting_transaction)).to eq(starter)
      end
    end

    describe 'offering transaction type' do
      it 'returns transction starter' do
        expect(transaction_starter(transaction: offering_transaction)).to eq(starter)
      end
    end
  end
end