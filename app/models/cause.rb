# == Schema Information
#
# Table name: causes
#
#  id                :bigint           not null, primary key
#  name              :string(255)
#  description       :text(65535)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  link              :string(255)
#  logo_file_name    :string(255)
#  logo_content_type :string(255)
#  logo_file_size    :integer
#  logo_updated_at   :datetime
#  community_id      :bigint
#
# Indexes
#
#  index_causes_on_community_id  (community_id)
#

class Cause < ApplicationRecord
  belongs_to :community, foreign_key: 'community_id'

  validates :name, presence: true, length: { in: 1..255 }
  validates :description, presence: true, length: { minimum: 1 }
  validates :link, presence: true, url: true
  validates :community_id, presence: true

  has_attached_file :logo, :styles => {
    :square => "408x408#",
    :square_2x => "816x816#"}

  validates_attachment_content_type :logo, content_type: IMAGE_CONTENT_TYPE

  process_in_background :logo
end
