class AddImageToProperty < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :image, :text
  end
end
