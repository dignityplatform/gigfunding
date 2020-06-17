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

require 'rails_helper'

RSpec.describe TypedSlogan, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
