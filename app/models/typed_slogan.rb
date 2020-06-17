# == Schema Information
#
# Table name: typed_slogans
#
#  id                :bigint           not null, primary key
#  community_id      :integer
#  locale            :string(255)
#  typed_slogan_text :string(255)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class TypedSlogan < ApplicationRecord
  belongs_to :community

  validates_length_of :typed_slogan_text, :in => 2..100, :allow_nil => false
end
