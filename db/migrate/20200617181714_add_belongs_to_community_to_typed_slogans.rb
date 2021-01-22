class AddBelongsToCommunityToTypedSlogans < ActiveRecord::Migration[5.2]
  def change
    remove_column :typed_slogans, :community_id
    change_table :typed_slogans do |t|
      t.belongs_to :community
    end
  end
end
