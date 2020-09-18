class AddDefaultCauseToCauses < ActiveRecord::Migration[5.2]
  def change
    add_column :causes, :default_cause, :boolean, default: false, not_null: true 
  end
end
