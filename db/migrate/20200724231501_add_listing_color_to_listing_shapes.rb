class AddListingColorToListingShapes < ActiveRecord::Migration[5.2]
  def change
    add_column :listing_shapes, :listing_color, :string, default: "FFFFFF"
  end
end
