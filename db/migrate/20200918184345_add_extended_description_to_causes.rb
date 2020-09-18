class AddExtendedDescriptionToCauses < ActiveRecord::Migration[5.2]
  def change
    add_column :causes, :extended_description, :text
  end
end
