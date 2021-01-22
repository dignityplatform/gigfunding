class AddToggleButtonNameToListingShape < ActiveRecord::Migration[5.2]
  def change
    add_column :listing_shapes, :user_descriptor_tr_key, :string
  end
end
