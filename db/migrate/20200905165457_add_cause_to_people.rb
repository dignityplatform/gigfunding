class AddCauseToPeople < ActiveRecord::Migration[5.2]
  change_table :people do |t|
    t.belongs_to :cause
  end
end
