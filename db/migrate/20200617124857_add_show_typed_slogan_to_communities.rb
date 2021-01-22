class AddShowTypedSloganToCommunities < ActiveRecord::Migration[5.2]
  def change
    add_column :communities, :show_typed_slogan, :boolean, default: false
  end
end