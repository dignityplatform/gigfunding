class AddFooterColorToCommunity < ActiveRecord::Migration[5.2]
  def change
    add_column :communities, :footer_color, :string
  end
end
