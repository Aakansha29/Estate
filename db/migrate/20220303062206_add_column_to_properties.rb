class AddColumnToProperties < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :user_id, :integer
    add_index :properties, :user_id
  end
end
