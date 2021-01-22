class AddCommunityIdToCauses < ActiveRecord::Migration[5.2]
  change_table :causes do |t|
    t.belongs_to :community
  end
end
