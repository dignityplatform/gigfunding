class AddDefaultListingTitleColorToListingShape < ActiveRecord::Migration[5.2]
  def up
    change_column :listing_shapes, :listing_title_color, :string, default: "000000"
  end

  def down
    change_column :listing_shapes, :listing_title_color, :string, default: nil
  end
end