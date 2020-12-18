class AddTypeSelectionLabelToListingShape < ActiveRecord::Migration[5.2]
  def change
    add_column :listing_shapes, :type_selection_label_tr_key, :string
  end
end
