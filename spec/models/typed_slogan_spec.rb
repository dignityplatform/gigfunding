# == Schema Information
#
# Table name: typed_slogans
#
#  id                :bigint           not null, primary key
#  locale            :string(255)
#  typed_slogan_text :string(255)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  community_id      :bigint
#
# Indexes
#
#  index_typed_slogans_on_community_id  (community_id)
#

require 'spec_helper'

RSpec.describe TypedSlogan, type: :model do
  let(:community) { FactoryGirl.create(:community) }

  describe 'validations - locale' do
    it 'is required' do
      no_locale = TypedSlogan.create(community_id: community.id, locale: nil, typed_slogan_text: 'test')
      expect(no_locale).to_not be_valid

      with_locale = TypedSlogan.create(community_id: community.id, locale: 'en', typed_slogan_text: 'test')
      expect(with_locale).to be_valid
    end
  end

  describe 'validations - typed_slogan_text' do
    it 'is required' do
      no_typed_slogan_text = TypedSlogan.create(community_id: community.id, locale: 'en', typed_slogan_text: nil)
      expect(no_typed_slogan_text).to_not be_valid
    end

    it 'must not be empty' do
      empty_typed_slogan_text = TypedSlogan.create(community_id: community.id, locale: 'en', typed_slogan_text: '')
      expect(empty_typed_slogan_text).to_not be_valid

      typed_slogan_text = TypedSlogan.create(community_id: community.id, locale: 'en', typed_slogan_text: 't')
      expect(typed_slogan_text).to be_valid
    end
  end
end
