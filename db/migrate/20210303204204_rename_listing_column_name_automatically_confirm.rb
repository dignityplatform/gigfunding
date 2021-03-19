class RenameListingColumnNameAutomaticallyConfirm < ActiveRecord::Migration[5.2]
  def change
    rename_column :listings, :automatically_confirm, :automatically_accept_payment
  end
end
