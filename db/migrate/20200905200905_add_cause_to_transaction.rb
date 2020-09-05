class AddCauseToTransaction < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :starter_cause_id, :integer
    add_column :transactions, :author_cause_id, :integer
  end
end
