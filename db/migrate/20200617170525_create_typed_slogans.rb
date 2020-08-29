class CreateTypedSlogans < ActiveRecord::Migration[5.2]
  def change
    create_table :typed_slogans do |t|
      t.integer :community_id
      t.string :locale
      t.string :typed_slogan_text

      t.timestamps
    end
  end
end
