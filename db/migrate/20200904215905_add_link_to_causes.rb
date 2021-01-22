class AddLinkToCauses < ActiveRecord::Migration[5.2]
  def change
    add_column :causes, :link, :string
  end
end
