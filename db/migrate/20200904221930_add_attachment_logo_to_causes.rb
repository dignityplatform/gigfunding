class AddAttachmentLogoToCauses < ActiveRecord::Migration[5.2]
  def self.up
    change_table :causes do |t|
      t.attachment :logo
    end
  end

  def self.down
    remove_attachment :causes, :logo
  end
end
