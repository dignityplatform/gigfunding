# == Schema Information
#
# Table name: causes
#
#  id          :bigint           not null, primary key
#  name        :string(255)
#  description :text(65535)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Cause < ApplicationRecord
  validates :name, presence: true, length: { in: 1..255 }
  validates :description, presence: true, length: { minimum: 1 }
end
