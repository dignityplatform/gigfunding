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
#  default_cause     :boolean          default(FALSE)
#
# Indexes
#
#  index_causes_on_community_id  (community_id)
#

class Cause < ApplicationRecord

  DEFAULT = {
    name: 'Unselected (Gigfunding)',
    description: 'Your cause is not selected. Until you select a cause, all donations will be paid to Gigfunding.org. Causes can be selected and changed near the bottom of your Settings page.',
    link: 'https://gigfunding.org',
    default_cause: true
  }

  belongs_to :community, foreign_key: 'community_id'
  has_many :people, foreign_key: "cause_id"
  has_many :transactions, foreign_key: 'starter_cause_id'
  has_many :transactions, foreign_key: 'author_cause_id'

  validates :name, presence: true, length: { in: 1..255 }
  validates :description, presence: true, length: { minimum: 1 }
  validates :link, presence: true, url: true
  validates :community_id, presence: true

  has_attached_file :logo,
    :styles => {
      :square => "408x408"},
    :processor => "mini_magick",
    :convert_options => {
      square: '-compose Copy -gravity center -extent 408x408'}


  validates_attachment_content_type :logo, content_type: IMAGE_CONTENT_TYPE

  process_in_background :logo
end
