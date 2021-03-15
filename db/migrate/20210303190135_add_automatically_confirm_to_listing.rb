class AddAutomaticallyConfirmToListing < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :automatically_confirm, :boolean, default: false
  end
end
