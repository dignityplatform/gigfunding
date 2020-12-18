class AddSearchTextToListingShape < ActiveRecord::Migration[5.2]
  def change
    add_column :listing_shapes, :search_text_tr_key, :string
  end
end
