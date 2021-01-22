class AddListingTitleColorToListingShape < ActiveRecord::Migration[5.2]
  def change
    add_column :listing_shapes, :listing_title_color, :string
  end
end
