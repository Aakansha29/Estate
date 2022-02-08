class AddFieldsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :role, :integer
    add_column :users, :name, :string
    add_column :users, :contact_no, :string
    add_column :users, :address, :string
  end
end
