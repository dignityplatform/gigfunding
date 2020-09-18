class AddDeletedToCauses < ActiveRecord::Migration[5.2]
  def change
    add_column :causes, :deleted, :boolean, default: false
  end
end
