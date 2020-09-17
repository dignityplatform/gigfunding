class AddArchivedToCauses < ActiveRecord::Migration[5.2]
  def change
    add_column :causes, :archived, :boolean, default: false
  end
end
